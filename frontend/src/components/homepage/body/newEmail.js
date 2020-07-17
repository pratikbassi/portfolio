import React, {useState} from 'react';
import axios from 'axios'
import {Form, Input, Button} from 'antd'
import "antd/dist/antd.css";


export default function () {
    let [state, setState] = useState(
        {name: '', email: '', subject: '', message: ''}
    )

    const handleChange = (event) => {
        event.persist();
        setState(() => ({...state, [event.target.name]: event.target.value}))
    }

    const sendEmail = () => {
        axios.post(
            '/api/email/',
            state
        )   .then(console.log(state))
            .catch((err)=>{console.log(err)})
    }

    return (
        <div className='email-form'>
            <Form>
                <label>
                    <Input class='form-name' type="text" placeholder="Name" value={state.name} onChange={handleChange} name="name" required/>
                    <Input class='form-email' type="email" placeholder="Email" value={state.email} onChange={handleChange} name="email" required/>
                    <Input class='form-subject' type="text" placeholder="Subject" value={state.subject} onChange={handleChange} name="subject" required/>
                    <Input class='form-message' type="text" placeholder="Message" value={state.message} onChange={handleChange} name="message" required/>
                </label>
                <Button type="primary" onClick={sendEmail}>Submit!</Button>
            </Form>
        </div>
    )
}

