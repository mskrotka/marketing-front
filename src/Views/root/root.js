import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CommingSoonView from "../CommingSoonView/CommingSoonView";
import FrontView from "../FrontView/FrontView";
import TeamView from "../TeamView/TeamView";
import OfferView from "../OfferView/OfferView";
import HowWorkView from "../HowWorkView/HowWorkView";
import PortfolioView from "../PortfolioView/PortfolioView"
import BlogView from "../BlogView/BlogView"
import FaqView from "../FaqView/FaqView"
import ContactView from "../ContactView/ContactView"




class Root extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={CommingSoonView}/>
                        <Route path="/front" component={FrontView}/>
                        <Route path="/team" component={TeamView}/>
                        <Route path="/offer" component={OfferView}/>
                        <Route path="/how-work" component={HowWorkView}/>
                        <Route path="/portfolio" component={PortfolioView}/>
                        <Route path="/blog" component={BlogView}/>
                        <Route path="/faq" component={FaqView}/>
                        <Route path="/contact" component={ContactView}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    };
};


export default Root;
