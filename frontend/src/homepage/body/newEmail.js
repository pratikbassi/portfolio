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
            '/api/newEmail',
            state
        )   .then(console.log('called'))
            .catch((err)=>{console.log(err)})
    }

    return (
        <div className='email-form'>
            <form>
                <label>
                    <input class='form-name' type="text" placeholder="Name" value={state.name} onChange={handleChange} name="name" required/>
                    <input class='form-email' type="email" placeholder="Email" value={state.email} onChange={handleChange} name="email" required/>
                    <input class='form-subject' type="text" placeholder="Subject" value={state.subject} onChange={handleChange} name="subject" required/>
                    <input class='form-message' type="text" placeholder="Message" value={state.message} onChange={handleChange} name="message" required/>
                </label>
                <button type="button" onClick={sendEmail}>Submit!</button>
            </form>
        </div>
    )
}

