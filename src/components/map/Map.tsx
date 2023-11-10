import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function Map() {
  return <MapContainer center={[46.506752431013815, 6.628202694568924]} zoom={15}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
}