import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FrontView from '../FrontView/FrontView';
import TeamView from '../TeamView/TeamView';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



class Root extends React.Component {
    render() {
        return (
            <div>

                    <Header/>

                        <Switch>
                        <Route exact path="/" component={FrontView}/>
                        <Route path="/team" component={TeamView}/>
                        </Switch>

                    <Footer/>

            </div>
        );
    };
};


export default Root;
