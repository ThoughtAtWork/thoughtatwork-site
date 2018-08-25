import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const RITMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 43.084721, lng: -77.674516 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.084721, lng: -77.674516 }} />}
  </GoogleMap>));

export default RITMap;
