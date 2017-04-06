import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import 'tawian-frontend';
import 'typeface-cousine';
import 'prismjs/themes/prism-dark.css';
import 'katex/dist/katex.min.css';

import PostsViewer from './components/PostsViewer';

import { regularPosts, navbarPosts } from 'config/posts';

const RegularPostsViewerWrapper = React.createClass({
    render() {
        return (
            <PostsViewer
                posts={regularPosts}
            />
        );
    }
});

const NavBarSubmitPostsViewerWrapper = React.createClass({
    render() {
        return (
            <PostsViewer
                posts={['posts/SUBMIT.md']}
            />
        );
    }
});

ReactDOM.render(
    <Router history={ createHashHistory() }>
        <Switch>
            <Route exact path="/" component={RegularPostsViewerWrapper} />
            <Route exact path="/submit" component={NavBarSubmitPostsViewerWrapper} />
        </Switch>
    </Router>
    , document.querySelector('.yingw787-container')
);
