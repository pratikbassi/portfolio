
import React from 'react';


import MapContainer from "./mapContainer";
import NewEmail from "./newEmail";
import EmailProgress from "./emailProgress";

export default function () {


    return (
        <div className='homepage-body'>
            Hello!
            <MapContainer/>
            <NewEmail/>
            <EmailProgress/>
        </div>
    )
}
