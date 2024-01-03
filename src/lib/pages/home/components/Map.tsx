import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 23.7136,
  lng: 45.6753,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBvdXlgBN768nlSCYCY5YaXaefhgY65PXc',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
      }}
    />
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
