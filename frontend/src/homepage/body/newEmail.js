import React from 'react';


export default function () {
    return (
        <div className='email-form'>
            <form>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

