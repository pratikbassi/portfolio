import Header from './header'
import Footer from './footer'
import Body from './body/index'
import React, {useState} from 'react';
import axios from "axios";

export default function () {
    const [state, setState] = useState({
        geoLocation:[null, null],
        allGuests:null
    })

    const getGeo = ()=>{
        axios.get('https://json.geoiplookup.io/')
            .then(
            (res) => {
                console.log(res)
            })
            .then()
            .catch(err => {
                    console.log(err)
                }
        )
    }
    
    const saveLoc = (x, y)=>{
        return axios.post('/api/newGuest',{locationX:x, locationY: y})
    }

    const addMap = ()=>{
        return axios.get('/api/allGuests').then()
    }

    getGeo();

    return (
        <div className='app-total'>
            <Header/>
            <Body allGuests/>
            <Footer/>
        </div>
    )
}
