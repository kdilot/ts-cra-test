import React, { useEffect } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { createBrowserHistory } from 'history';
import loadable from '@loadable/component';
const Home = loadable(() => import('components/home'));
const Page = loadable(() => import('components/page'));
const Error = loadable(() => import('components/error'));
const Test = loadable(() => import('components/page/test'));
const Csv = loadable(() => import('components/page/Csv'));
const Codeblock = loadable(() => import('components/page/Codeblock'));

const Root: React.FC = () => {
    const history = createBrowserHistory();
    history.listen((location) => {
        // path 변경시 ga 전송
        console.log('location', location);
    });

    useEffect(() => {
        //  최초 로딩시 ga 전송 필요
        console.log('location', window.location.pathname);
    }, []);

    return (
        <BrowserRouter>
            <Router history={history}>
                <Helmet>
                    <title>라우터 페이지</title>
                </Helmet>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/page/:name" exact component={Page} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/csv" exact component={Csv} />
                    <Route path="/codeblock" exact component={Codeblock} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
};

export default Root;
