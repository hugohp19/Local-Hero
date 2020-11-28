import React from 'react';
import ReactMapboxGL, { Marker } from 'react-mapbox-gl';

const MapContainer = ReactMapboxGL({
  accessToken: process.env.REACT_APP_MAPBOX_API_KEY
});

const MARKER_IMG_URL =
  'https://www.flaticon.com/svg/static/icons/svg/1483/1483336.svg';

const Map = ({ mapCenter, markers }) => {
  return (
    <MapContainer
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '50vh',
        width: '100%',
        border: 'red 1px solid'
      }}
      center={mapCenter}
    >
      {markers.map((marker) => (
        <Marker coordinates={[marker.longitude, marker.latitude]}>
          <img style={{ height: '20px', width: '20px' }} src={MARKER_IMG_URL} />
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
