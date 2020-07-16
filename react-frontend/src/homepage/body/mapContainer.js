import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
export function MapContainer (props){
    return (
      <Map google={props.google} zoom={2}>



      </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(MapContainer)