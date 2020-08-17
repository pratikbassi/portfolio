import React from 'react';
import { Card } from '@material-ui/core';
import Slider from "./slider";


export default function (props) {


    return (
        <div>
                <Slider link={props.link} subtitle={props.subtitle} title={props.title} images={props.images} stack={props.stack}/>
        </div>
    )
}

