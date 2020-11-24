import React, { useState } from 'react';
import Map from '../components/Map/Map';
import { mockRequest } from '../utils';

export const MOCK_MARKERS = [
  {
    id: '1',
    name: 'Wyncode',
    longitude: -80.2044,
    latitude: 25.8028
  },
  {
    id: '2',
    name: "Joe's Stone Crab",
    longitude: -80.1353,
    latitude: 25.7689
  },
  {
    id: '3',
    name: 'Zuma',
    longitude: -80.1896,
    latitude: 25.7705
  },
  {
    id: '4',
    name: 'Home',
    longitude: -80.33618,
    latitude: 25.58416
  }
];

const MapContainer = () => {
  const [mapMarkers, setMapMarkers] = useState([]);
  const [mapCenter, setMapCenter] = useState([-80.2044, 25.8028]);

  const fetchMarkers = async () => {
    const res = await mockRequest(MOCK_MARKERS);
    setMapMarkers(res);
    setMapCenter([-80.33618, 25.58416]);
  };

  return (
    <div className="body">
      <button onClick={fetchMarkers}>Confirm</button>
      <Map mapCenter={mapCenter} markers={mapMarkers} />
    </div>
  );
};

export default MapContainer;
