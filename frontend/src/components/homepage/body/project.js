import React, {useState} from 'react';
import { Card } from '@material-ui/core';
import Slider from "./slider";


export default function (props) {
    let [state, setState] = useState(
        {name: '', email: '', subject: '', message: '', show:false}
    )


    return (
        <div className='project-card'>
            <Card>
                <Slider images={props.images}/>
            </Card>
        </div>
    )
}

