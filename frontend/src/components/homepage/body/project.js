import React from 'react';
import { Card } from '@material-ui/core';
import Slider from "./slider";


export default function (props) {


    return (
        <div>
                <Slider subtitle={props.subtitle} title={props.title} images={props.images}/>
        </div>
    )
}

