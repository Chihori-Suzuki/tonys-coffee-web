import { useState } from "react";
// import GoogleMapReact from "google-maps-react";
import GoogleMapReact from "google-map-react";

function Contact() {
  interface MapProps {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  }
  const initialMapProps: MapProps = {
    center: {
      lat: 49.26399451242248,
      lng: 123.12231588904056,
    },
    zoom: 18,
  };

  const API_KEY = "AIzaSyD11qyipS5P95TznVTMv5yKMTaZz4WoyB0";
  const [mapProps, setMapProps] = useState<MapProps>(initialMapProps);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={mapProps.center}
        zoom={mapProps.zoom}
      />
    </div>
  );
}

export default Contact;
