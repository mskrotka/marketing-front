import React from 'react';
import ReactDOM from 'react-dom';
import RootCommingSoon from './views/rootCommingSoon/rootCommingSoon';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Root from './views/root/root'

ReactDOM.render((
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={RootCommingSoon}/>

        </Switch>
        <Route path="/root" component={Root}/>
    </BrowserRouter>), document.getElementById('root'))