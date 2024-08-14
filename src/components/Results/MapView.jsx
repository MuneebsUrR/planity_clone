import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../../lib/data"; 


import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Create a custom marker icon
const customMarkerIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapView = ({ DefaultLongitude = 2.3522, DefaultLatitude = 48.8566, zoomValue = 12 }) => {
  const defaultCenter = [DefaultLatitude, DefaultLongitude]; // Coordinates for Paris

  return (
    <MapContainer center={defaultCenter} zoom={zoomValue} style={{ height: "100%", width: "100%", position: 'relative', zIndex: '1' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      
      {Object.keys(data).map((category) =>
        data[category].map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={customMarkerIcon} 
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
