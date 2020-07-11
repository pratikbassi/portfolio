import React, {useState} from 'react';


export default function () {
    let [state, setState] = useState(
        {name: '', email: '', subject: '', message: ''}
    )


    return (
        <div className='email-form'>
            <form>
                <label>
                    Name:
                    <input type="text" value={state.name} name="name" required/>
                    <input type="email" value={state.email} name="email" required/>
                    <input type="text" value={state.subject} name="subject" required/>
                    <input type="text" value={state.message}  name="message" required/>
                </label>
                <button type="button" />
            </form>
        </div>
    )
}

