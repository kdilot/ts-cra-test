import React from 'react';
import ReactDOM from 'react-dom';
import Route from 'routes';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import 'antd/dist/antd.css';
import './index.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

ReactDOM.render(
    <HelmetProvider>
        <Route />
    </HelmetProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
