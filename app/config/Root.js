import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../components/MainPage';
import BeerDetails from '../components/BeerDetails/BeerDetails';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/details/:id" component={BeerDetails} />
            </Switch>
        </Router>
    );
};

export default Root;

