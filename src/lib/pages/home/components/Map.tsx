import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { decode } from '@googlemaps/polyline-codec';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Polyline,
} from '@react-google-maps/api';
import type { ReactNode } from 'react';
import { useState, useCallback, memo } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 23.7136,
  lng: 45.6753,
};

function Map({
  orders,
  routes,
  children,
}: {
  orders: Order[];
  routes: OptimizedRoute[];
  children?: ReactNode;
}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBvdXlgBN768nlSCYCY5YaXaefhgY65PXc',
  });
  const [activeMarker, setActiveMarker] = useState<Order | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    console.log(map);
  }, []);

  const decodedGeometry = routes[0].result.routes.map((route: Route) =>
    decode(route.geometry)
  );
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      onLoad={onLoad}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
        },
        zoomControl: false,
      }}
    >
      {orders.map((order: Order) => (
        <Marker
          key={order.id}
          position={{
            lat: +order.pickupLocation.split(',')[0] as number,
            lng: +order.pickupLocation.split(',')[1] as number,
          }}
          onClick={() => {
            setActiveMarker(order);
          }}
        />
      ))}
      {activeMarker && (
        <InfoWindow
          position={{
            lat: +activeMarker.pickupLocation.split(',')[0] as number,
            lng: +activeMarker.pickupLocation.split(',')[1] as number,
          }}
          options={{ pixelOffset: new google.maps.Size(0, -30) }}
          onCloseClick={() => {
            setActiveMarker(null);
          }}
        >
          <Card p="0">
            <CardHeader>
              <Heading size="md">Order {activeMarker.id}</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                {activeMarker.pickupTime} - {activeMarker.dropoffTime}
              </Text>
              <Text>{activeMarker.pickupLocation}</Text>
              <Text>{activeMarker.dropoffLocation}</Text>
              <Text>{activeMarker.assignedTo}</Text>
            </CardBody>
            {/* <CardFooter>
              <Button>View here</Button>
            </CardFooter> */}
          </Card>
        </InfoWindow>
      )}
      {routes &&
        decodedGeometry.map((decoded) => (
          <Polyline
            key={decoded[0][0]}
            path={decoded.map((point) => ({
              lat: point[0],
              lng: point[1],
            }))}
            options={{
              strokeColor: '#FF0000',
              strokeOpacity: 1,
              strokeWeight: 4,
            }}
          />
        ))}
      {children}
    </GoogleMap>
  ) : null;
}

export default memo(Map);
