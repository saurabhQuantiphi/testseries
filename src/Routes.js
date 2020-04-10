import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './Login/Login';
import Landingpage from './Home/Home'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Landingpage} />
                    {/* <Route exact path="/" component={Login} />
                    <Route path="/Landingpage" component={Landingpage} /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
