import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import 'tawian-frontend';
import 'typeface-cousine';

import App from './components/App';

ReactDOM.render(
    <Router history={ createBrowserHistory() }>
        <Route path="/" component={App}>
        </Route>
    </Router>
    , document.querySelector('.app-container')
);
