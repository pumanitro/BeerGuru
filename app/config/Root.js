import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../components/MainPage';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage} exact />
            </Switch>
        </Router>
    );
};

export default Root;

