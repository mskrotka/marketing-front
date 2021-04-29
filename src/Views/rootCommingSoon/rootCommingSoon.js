import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CommingSoonView from '../CommingSoonView/CommingSoonView';


import FrontView from '../FrontView/FrontView';
import TeamView from '../TeamView/TeamView';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class RootCommingSoon extends React.Component {
    render() {
        return (
            <div>

                    <Route path="/" component={CommingSoonView}/>

            </div>
        );
    };
};

export default RootCommingSoon;
