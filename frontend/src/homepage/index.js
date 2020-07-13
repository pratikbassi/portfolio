import Header from './header'
import Footer from './footer'
import React from 'react';
import axios from "axios";

export default function () {
    const getGeo = ()=>{
        axios.get('https://json.geoiplookup.io/')
            .then(
            (res) => {
                console.log(res)
            }).error(err => {
                    console.log(err)
                }
        )
    }

    const addMap = ()=>{

    }


    return (
        <div className='app-total'>
            <Header/>
            <Footer/>
        </div>
    )
}
