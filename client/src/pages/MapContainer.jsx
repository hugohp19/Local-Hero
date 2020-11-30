import React from 'react';
import Map from '../components/Map/Map';

const MapContainer = ({ zipCode, mapMarkers, mapCenter }) => {
  return (
    <div className="mapBody">
      <Map mapCenter={mapCenter} markers={mapMarkers} />
    </div>
  );
};

export default MapContainer;
