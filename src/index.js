import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

function verificaAutenticacao(nextStage,replace){
    if(localStorage.getItem('auth-token') === null){
        replace('/');
    }
}

ReactDOM.render((
    <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/timeline(:/login)' component={App} onEnter={verificaAutenticacao} />
                <Route path='/logout' component={Logout} />
            </Switch>
        
    </Router>)
    , document.getElementById('root'));


serviceWorker.unregister();
