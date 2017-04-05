import React, { Component } from 'react';
import PostsViewer from '../PostsViewer';

// const handleClickFunction = () => {
//     console.log('clicked!');
// }

import { regularPosts } from 'config/posts';


export default class App extends Component {
    render() {
        return (
            <PostsViewer
                posts={regularPosts}/>
            // <Button
            //     type='default'
            //     isGhost={false}
            //     handleClickFunction={handleClickFunction}/>
        );
    }
}
