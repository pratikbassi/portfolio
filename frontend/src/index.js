import React from 'react';

import App from "./components/App";
import style from './scss/app.scss'
import {render} from "react-dom";


const container = document.getElementById("app");
render(<App />, container);