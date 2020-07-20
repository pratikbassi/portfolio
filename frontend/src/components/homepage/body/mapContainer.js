import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

export function MapContainer(props) {
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%'
    }

    return (
        <div className='map-container'>
            <Map google={props.google} containerStyle={containerStyle} zoom={2}>


            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(MapContainer)