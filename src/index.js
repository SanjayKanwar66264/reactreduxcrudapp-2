import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import reducers from './reducers/index'
import promise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.querySelector('.container'));