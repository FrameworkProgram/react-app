// import React from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';
import main from './view/main'


import registerServiceWorker from './assets/registerServiceWorker';
ReactDOM.render(
    main,
    document.getElementById('root')
);
registerServiceWorker();
