import { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const useLeafletMap = (center, zoom, height, width, markers = [], imageUrl, imageBounds) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      // Очистка предыдущих маркеров
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Добавление новых маркеров
      markers.forEach(({ position, popup }) => {
        L.marker(position).addTo(map).bindPopup(popup);
      });

      // Добавление пользовательского фонового изображения
      if (imageUrl && imageBounds) {
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        map.fitBounds(imageBounds);  // Подгонка карты по изображению
      }
    }
  }, [map, markers, imageUrl, imageBounds]);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: height, width: width }} whenCreated={setMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={false}
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default useLeafletMap;
