import React, {useState} from 'react';
import Typist from 'react-typist';
import Modal from 'react-modal';
import Project from './project'
import NewEmail from "./newEmail";
import MapContainer from "./mapContainer";

export default function () {
    const [state, setState] = useState({
        isPaneOpen: false,
        isEmailOpen: false,
        isMapOpen:false
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

    const setEmailOpen = () => {
        if (!state.isEmailOpen) {
            setState((prevState => ({...prevState, isEmailOpen: true})))
        }
    }
    const setEmailClose = () => {
        if (state.isEmailOpen) {
            setState((prevState => ({...prevState, isEmailOpen: false})))
        }
    }

    const setMapOpen = () => {
        if (!state.isMapOpen) {
            setState((prevState => ({...prevState, isMapOpen: true})))
        }
    }
    const setMapClose = () => {
        if (state.isMapOpen) {
            setState((prevState => ({...prevState, isMapOpen: false})))
        }
    }
    return (
        <div className='homepage-body'>
            <Typist
                avgTypingDelay={45}
            >
                <a target="_blank" className='subtitle-link' onClick={setOpen}> Projects </a>
                <br/>
                <a target="_blank" className='subtitle-link' href='https://github.com/pratikbassi'> Github </a>
                <br/>
                <a target="_blank" className='subtitle-link' href='https://www.linkedin.com/in/pratik-bassi-81a490173/'> LinkedIn </a>
                <br/>
                <a target="_blank" className='subtitle-link' href='https://resume.creddle.io/resume/h21hxcw9x6e'> Resume </a>
                <br/>
                <a className='subtitle-link' onClick={setEmailOpen}> Email Me </a>
                <br/>
                <a className='subtitle-link' onClick={setMapOpen}> Visitor Map </a>
            </Typist>
            <Modal
                isOpen={state.isPaneOpen}
                onRequestClose={setClose}
                style={customStyles}
                contentLabel="Projects"
                closeTimeoutMS={500}
            >
                <div className='scroller'>
                                <Project
                                    title={'Agency Sales'}
                                    subtitle={'Graphical Display of Sales Data'}
                                    images=
                                     {[
                                        "/static/agencysales1.png",
                                         "/static/agencysales2.png" ,
                                         "/static/agencysales3.png" ,
                                         "/static/agencysales4.png" ,
                                     ]}
                                    link={'https://imgur.com/a/klBSk4c'}
                                    stack={'PHP, Laravel, Apache2, Gitlab, HTML, CSS, Vue.js, Chart.js, Oracle 10g'}

                                />
                                 <Project
                                     title={'Meezr'}
                                     subtitle={' A Nutrition and Meal Planning Application'}
                                     images=
                                     {[
                                        "/static/meezr1.png" ,
                                         "/static/meezr2.png" ,
                                         "/static/meezr3.png" ,

                                     ]}
                                     link={'https://github.com/pratikbassi/Meezr'}
                                     stack={'Ruby on Rails, React, HTML, CSS, PostgreSQL'}

                                 />
                                <Project
                                    title={'Trender'}
                                    subtitle={'A News Website scraping and graphing app'}
                                    images=
                                     {[
                                        "/static/trender1.png" ,
                                         "/static/trender2.png" ,
                                         "/static/trender3.png" ,
                                     ]}
                                    link={'http://www.trender.ca/'}
                                    stack={'PHP, Laravel, AWS EC2 Ubuntu Server, Vue.js, Chart.js, Vuetify'}
                                />


                </div>

            </Modal>
            <Modal
                isOpen={state.isEmailOpen}
                onRequestClose={setEmailClose}
                style={customStyles}
                contentLabel="Email Me!"
                closeTimeoutMS={500}
            >
                <NewEmail/>
            </Modal>
            <Modal
                isOpen={state.isMapOpen}
                onRequestClose={setMapClose}
                style={customStyles}
                contentLabel="Email Me!"
                closeTimeoutMS={500}
            >
                <MapContainer/>
            </Modal>

        </div>

    )
}


