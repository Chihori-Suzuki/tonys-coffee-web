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
      lat: 49.26387900523431,
      lng: -123.12220859868819,
    },
    zoom: 18,
  };

  const API_KEY = "AIzaSyD11qyipS5P95TznVTMv5yKMTaZz4WoyB0";
  const [mapProps, setMapProps] = useState<MapProps>(initialMapProps);
  return (
    <div className="container">
    <div style={{ width: "30vw", height: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={mapProps.center}
        zoom={mapProps.zoom}
      />
    </div>
    <div>
      
    </div></div>
  );
}

export default Contact;
