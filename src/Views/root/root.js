import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CommingSoonView from '../CommingSoonView/CommingSoonView';





class Root extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={CommingSoonView}/>

                    </Switch>
                </BrowserRouter>
            </div>
        );
    };
};


export default Root;
