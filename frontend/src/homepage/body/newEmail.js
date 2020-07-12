import React, {useState} from 'react';
import axios from 'axios'

export default function () {
    let [state, setState] = useState(
        {name: '', email: '', subject: '', message: ''}
    )

    const handleChange = (event) => {
        let item = event.target.name
        setState({item: event.target.value})
    }

    const sendEmail = () => {
        axios.post(
            '/api/',
            state
        )
    }

    return (
        <div className='email-form'>
            <form>
                <label>
                    Name:
                    <input type="text" value={state.name} onChange={() => handleChange('name')} name="name" required/>
                    <input type="email" value={state.email} onChange={() => handleChange('email')} name="email" required/>
                    <input type="text" value={state.subject} onChange={() => handleChange('subject')} name="subject" required/>
                    <input type="text" value={state.message} onChange={() => handleChange('message')} name="message" required/>
                </label>
                <button type="button" onClick={sendEmail}/>
            </form>
        </div>
    )
}

