import React from 'react';
import Header from './homepage/header'
import Body from './homepage/body/index'
import Axios from "axios";

export default function App () {

    Axios.get('https://json.geoiplookup.io/')
        .then((response) => {
            Axios.post('/api/visitor/',{
                locationX: response.data.latitude,
                locationY: response.data.longitude,
                publicIp: response.data.ip || ''
            })
                .then((response)=>{console.log(response)})
                .catch(
                    error => console
            )
        }).catch(
        error => console
    )

    return (
        <div className='frontpage'>
            <Header />
            <Body />
        </div>
    )
}



