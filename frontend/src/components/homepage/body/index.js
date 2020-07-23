import React, {useState} from 'react';
import Typist from 'react-typist';
import Modal from 'react-modal';
import Project from './Project'

export default function () {
    const [state, setState] = useState({
        isPaneOpen: false,
    })

    const customStyles = {
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }
};

    const setOpen = () => {
        if (!state.isPaneOpen) {
            setState((prevState => ({...prevState, isPaneOpen: true})))
        }
    }
    const setClose = () => {
        if (state.isPaneOpen) {
            setState((prevState => ({...prevState, isPaneOpen: false})))
        }
    }
    return (
        <div className='homepage-body'>
            <Typist
                avgTypingDelay={45}
            >
                <a className='subtitle-link' onClick={setOpen}> Projects </a>
                <br/>
                <a className='subtitle-link' href='https://github.com/pratikbassi'> Github </a>
                <br/>
                <a className='subtitle-link' href='https://www.linkedin.com/in/pratik-bassi-81a490173/'> LinkedIn </a>
                <br/>
                <a className='subtitle-link' href='https://resume.creddle.io/resume/h21hxcw9x6e'> Resume </a>
                <br/>
                <a className='subtitle-link' href='mailto:pratikbassi@gmail.com'> Email Me </a>
            </Typist>
            <Modal
                isOpen={state.isPaneOpen}
                onRequestClose={setClose}
                style={customStyles}
                contentLabel="Projects"
                closeTimeoutMS={500}
            >
                <div className='scroller'>
                                <Project images=
                                     {[
                                        { url: "/static/agencysales1.png" },
                                         { url: "/static/agencysales2.png" },
                                         { url: "/static/agencysales3.png" },
                                         { url: "/static/agencysales4.png" },
                                     ]}
                                />
                                 <Project images=
                                     {[
                                        { url: "/static/meezr1.png" },
                                         { url: "/static/meezr2.png" },
                                         { url: "/static/meezr3.png" },

                                     ]}
                                 />
                                <Project images=
                                     {[
                                        { url: "/static/trender1.png" },
                                         { url: "/static/trender2.png" },
                                         { url: "/static/trender3.png" },
                                     ]}
                                />


                </div>

            </Modal>

        </div>

    )
}


