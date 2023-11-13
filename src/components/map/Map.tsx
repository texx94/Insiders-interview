import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "./Map.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useMemo } from "react";
import { Icon, LatLngTuple } from "leaflet";

interface markers {
  athlete: string;
  geocode: LatLngTuple;
}

function createData(
  athlete: string,
  long: number,
  lat: number,
) {
  return { athlete: athlete, geocode: [long, lat] as LatLngTuple };
}

export default function Map() {
  const messages = useSelector((state: RootState) => state.data.messages);

  const markers: markers[] = useMemo(
    () => {
      const lastMessage = messages[messages.length - 1];
      const markers = [];
      for (const athlete in lastMessage?.athletes) {
        const lat = lastMessage.athletes[athlete as keyof object]['latitude'];
        const long = lastMessage.athletes[athlete as keyof object]['longitude'];
        markers.push(createData(athlete, lat, long));
      }
      return markers;
    },
    [messages],
  );

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2098/2098567.png ",
    iconAnchor: [19, 38],
    iconSize: [38, 38],
  })

  return <MapContainer center={[46.506752431013815, 6.628202694568924]} zoom={15}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {markers.map((marker) => (
      <Marker position={marker.geocode} icon={customIcon}>
        <Tooltip className="test" direction="top" opacity={1} permanent>{marker.athlete}</Tooltip>
      </Marker>
    ))}

  </MapContainer>
}