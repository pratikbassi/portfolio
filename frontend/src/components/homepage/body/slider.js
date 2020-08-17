import React from "react";
import {Card, CardContent, CardHeader } from "@material-ui/core";
import { Carousel } from 'react-responsive-carousel';


export default function (props) {


    const getConfigurableProps = () => ({
        showArrows: true,
        showStatus:  false,
        showIndicators: true,
        infiniteLoop:  false,
        showThumbs:  false,
        useKeyboardArrows:  false,
        autoPlay: false,
        stopOnHover: false,
        swipeable: false,
        dynamicHeight:  true,
        dynamicWidth: true,
        emulateTouch: false,
        thumbWidth:  100,
        selectedItem: 0,
    });

    return (
            <Card className='project-card'>
                <CardHeader title={props.title} subheader={props.subtitle} className='card-header'/>
                <CardContent>
                    <Carousel className='project-carousel' {...getConfigurableProps()}>
                        {props.images.map(image => (<div> <img className='project-image' src={image}/> </div> ))}
                    </Carousel>
                    <a target="_blank" href={props.link}>View Project</a>
                    <p>Stack: {props.stack}</p>
                </CardContent>
            </Card>
    )
}
