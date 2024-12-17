import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  // Google Map container styling
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  // Map ka center (Lahore)
  const center = {
    lat: 31.5204,
    lng: 74.3587,
  };

  // Dono warehouses ki locations
  const locations = [
    { lat: 31.5404, lng: 74.3587, label: "Warehouse 1" }, // Replace with actual coordinates
    { lat: 31.5004, lng: 74.3787, label: "Warehouse 2" }, // Replace with actual coordinates
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyA02DcVPes1brCNTNau-np_t5QfdGWsocU"> {/* Replace with your API Key */}
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={location.label}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
