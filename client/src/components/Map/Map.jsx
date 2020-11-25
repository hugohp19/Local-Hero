// import React from 'react';
// import ReactMapboxGL, { Marker } from 'react-mapbox-gl';

// const MapContainer = ReactMapboxGL({
//   accessToken: process.env.REACT_APP_MAPBOX_API_KEY
// });

// const MARKER_IMG_URL =
//   'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697';

// const Map = ({ mapCenter, markers }) => {
//   return (
//     <MapContainer
//       style="mapbox://styles/mapbox/streets-v9"
//       containerStyle={{
//         height: '60vh',
//         width: '60vw'
//       }}
//       center={mapCenter}
//     >
//       {markers.map((marker) => (
//         <Marker coordinates={[marker.longitude, marker.latitude]}>
//           <img style={{ height: '20px', width: '20px' }} src={MARKER_IMG_URL} />
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;
