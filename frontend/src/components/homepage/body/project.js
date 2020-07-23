import React from 'react';
import { Card } from '@material-ui/core';
import Slider from "./slider";


export default function (props) {


    return (
        <div >
                <Slider title={props.title} images={props.images}/>
        </div>
    )
}

