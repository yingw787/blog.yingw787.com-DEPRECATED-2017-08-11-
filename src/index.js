import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';

ReactDOM.render(
    <Router history={ createBrowserHistory() }>
        <Route path="/" component={App}>
        </Route>
    </Router>
    , document.querySelector('.container')
);
