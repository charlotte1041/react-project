import React from 'react';
import ReactDom from 'react-dom';
import './assets/css/index.css';
import './assets/js/index';
import RouterConfig from './routerConfig';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import defaultState from './store/state';
import reducer from './store/reducer';

const store=createStore(reducer,defaultState);

ReactDom.render(
    <Provider store={store}>
        <RouterConfig/>
    </Provider>,
    document.querySelector('#app')
)