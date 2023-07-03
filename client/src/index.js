import React from 'react';
import ReactDOM from 'react-dom';

// css styling
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';


import { BrowserRouter } from "react-router-dom";
import Router from './router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
