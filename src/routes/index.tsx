import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import loadable from '@loadable/component';
const Home = loadable(() => import('components/home'));
const Error = loadable(() => import('components/error'));
const Test = loadable(() => import('components/page/test'));
const Csv = loadable(() => import('components/page/Csv'));
const Codeblock = loadable(() => import('components/page/Codeblock'));
const BoardWrite = loadable(() => import('modules/board'));

const Root: React.FC = () => {
    const history = createBrowserHistory();
    // history.listen((location) => {
    //     // path 변경시 ga 전송
    //     console.log('location', location);
    // });

    // useEffect(() => {
    //     //  최초 로딩시 ga 전송 필요
    //     console.log('location', window.location.pathname);
    // }, []);

    return (
        <BrowserRouter>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/csv" exact component={Csv} />
                    <Route path="/codeblock" exact component={Codeblock} />
                    <Route path="/boardwrite" exact component={BoardWrite} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
};

export default Root;
