import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CommingSoonView from '../CommingSoonView/CommingSoonView';
import FrontView from '../FrontView/FrontView';
import TeamView from '../TeamView/TeamView';




class Root extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={CommingSoonView}/>
                        <Route path="/front" component={FrontView}/>
                        <Route path="/team" component={TeamView}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    };
};


export default Root;
