import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {useEffect, useState} from 'react';
import Axios from "axios";

export function MapContainer(props) {
    const [state, setState] = useState(
        {locations:[]}
    )
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%'
    }
    
    const getMarkers = () => {
        Axios.get('/api/visitor')
            .then((response)=>{
                setState(prevState => (
                    {...prevState, locations: response.data}
                    ))
            })
            .catch((error)=>{console.log(error)})
    }


    useEffect((() => {
        getMarkers()
    }),[])
    useEffect((() => {
    }),[state.locations.length])

    return (
        <div className='map-container'>
            <Map google={props.google} containerStyle={containerStyle} zoom={2} className={'map'}>

                {state.locations.map(location => {
                    return(
                        <Marker position={{
                            lat: location.locationX,
                            lng: location.locationY
                        }} />
                    )
                })
                }
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(MapContainer)