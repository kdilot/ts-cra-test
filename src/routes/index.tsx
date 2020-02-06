import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Page } from 'components';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/page/:name" exact component={Page} />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;
