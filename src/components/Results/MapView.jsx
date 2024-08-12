import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../../lib/data"; // Import the data file



const MapView = ({DefaultLongitude = 2.3522, DefaultLatitude = 48.8566, zoomValue=12}) => {
  const defaultCenter = [DefaultLatitude, DefaultLongitude]; // Coordinates for Paris

  return (
    <MapContainer center={defaultCenter} zoom={zoomValue} style={{ height: "100%", width: "100%", position:'relative', zIndex:'1' }}>
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
