import React from 'react';
import { Route } from 'react-router-dom'

import CommingSoonView from '../CommingSoonView/CommingSoonView';

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
