import React, {useState} from 'react';
import axios from 'axios'
import {Input, TextField, Button, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


export default function () {
    let [state, setState] = useState(
        {name: '', email: '', subject: '', message: '', show: false}
    )

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },

    }));

    const classes = useStyles();


    const handleChange = (event) => {
        event.persist();
        setState(() => ({...state, [event.target.name]: event.target.value}))
    }

    const sendEmail = () => {
        axios.post(
            '/api/email/',
            state
        ).then((res) => {
            if (res.status === 201) {
                setState({name: '', email: '', subject: '', message: '', show: true})
                setTimeout(() => {
                    alert("Email Sent!")
                }, 2000)
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form className='email-form'>
                <Input className='form-name' type="text" placeholder="Name" value={state.name} onChange={handleChange}
                       name="name" required/>
                <Input className='form-email' type="email" placeholder="Email" value={state.email}
                       onChange={handleChange} name="email" required/>
                <Input multiline={true} rows={2} className='form-subject' type="text" placeholder="Subject"
                       value={state.subject} onChange={handleChange} name="subject" required/>
                <TextField multiline={true} rows={6} className='form-message' type="text" placeholder="Message"
                           value={state.message} onChange={handleChange} name="message" required/>
                <Button className={classes.root} type="primary" size="large" variant='text' color="primary"
                        onClick={sendEmail}>Submit</Button>
            </form>
        </div>
    )
}

