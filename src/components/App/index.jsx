import React, { Component } from 'react';
import PostsViewer from '../PostsViewer';

import { regularPosts } from 'config/posts';

export default class App extends Component {
    render() {
        return (
            <PostsViewer
                posts={regularPosts}/>
        );
    }
}
