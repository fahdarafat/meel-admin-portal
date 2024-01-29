type Order = {
  orderId: number;
  shortAddress: string;
  timestampStart: string;
  timestampEnd: string;
  fullAddress: string;
  latitude: string;
  longitude: string;
};

type OptimizedRoute = {
  description: string;
  result: {
    code: number;
    summary: {
      cost: number;
      routes: number;
      unassigned: number;
      setup: number;
      service: number;
      duration: number;
      waiting_time: number;
      priority: number;
      delivery: number[];
      pickup: number[];
      distance: number;
    };
    routes: Route[];
  };
  message: string;
  status: string;
};

type Route = {
  vehicle: number;
  cost: number;
  steps: Step[];
  service: number;
  duration: number;
  waiting_time: number;
  priority: number;
  delivery: number[];
  pickup: number[];
  distance: number;
  geometry: string;
  long_vehicle_id: string;
};

type Step = {
  type: string;
  arrival: number;
  duration: number;
  service: number;
  waiting_time: number;
  location: number[];
  location_index: number;
  load: number[];
  distance: number;
};
