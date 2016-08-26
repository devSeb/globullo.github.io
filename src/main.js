
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

/** Jquery **/
//var $ = require('./lib/jquery.min.js');
//window.$ = $;
//window.jQuery = $;

/** Css **/
require('./main.scss');
/** bootstrap **/
//require('./lib/bootstrap.min.js');


/** View **/
import App from './views/App.js';
//import Dog from './views/Dog.js';
//import Cat from './views/Cat.js';


/** Redux  init **/
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import textTest from './redux/reducers/textTest'
//console.log("textTest", textTest);

/** List of reducers **/
const rootReducer = combineReducers({
    textTest
});
let store = createStore(rootReducer);


render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
    </Provider>
), document.getElementById('content'));
