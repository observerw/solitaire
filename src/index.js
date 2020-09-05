import React from 'react';
import './general.css'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {mainRoute} from "./route/index";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";


ReactDOM.render(
    <Router>
        <Switch>
            {mainRoute.map(route =>
                <Route key={route.path} {...route}/>)}
            <Redirect to='/error'/>
        </Switch>
    </Router>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();
