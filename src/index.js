import React from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';
import router from './router'

import registerServiceWorker from './assets/registerServiceWorker';
ReactDOM.render(
    router,
    document.getElementById('root')
);
registerServiceWorker();
