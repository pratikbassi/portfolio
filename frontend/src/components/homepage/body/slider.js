import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import {Card, CardContent } from "@material-ui/core";


export default function (props) {



    return (
        <div className='project-card'>
            <Card>
                <CardContent>
                    <SimpleImageSlider width={600} height={400} images={props.images}/>
                </CardContent>

            </Card>
        </div>
    )
}
