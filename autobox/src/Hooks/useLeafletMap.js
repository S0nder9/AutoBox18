import { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const useLeafletMap = (center, zoom, height, width, markers = [], imageUrl, imageBounds) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      const customIcon = new L.Icon({
        iconUrl: imageUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41] 
      });

      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      markers.forEach(({ position, popup }) => {
        L.marker(position, { icon: customIcon }).addTo(map).bindPopup(popup);
      });
    }
  }, [map, markers, imageUrl, imageBounds]);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: height, width: width }} whenCreated={setMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={false}
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={new L.Icon({ iconUrl: imageUrl })}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default useLeafletMap;
