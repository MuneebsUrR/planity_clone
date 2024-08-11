import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../../lib/data"; // Import the data file

// Custom icon for the markers
const locationIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapView = () => {
  const defaultCenter = [48.8566, 2.3522]; // Coordinates for Paris

  return (
    <MapContainer center={defaultCenter} zoom={12} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add markers for each category */}
      {Object.keys(data).map((category) =>
        data[category].map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={locationIcon}
          >
            <Popup>
              <strong>{location.name}</strong><br />
              {location.address}<br />
              Rating: {location.rating}<br />
              Phone: {location.phone}
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
};

export default MapView;
