import React, { Component } from 'react';
import PostsViewer from '../PostsViewer';

// const handleClickFunction = () => {
//     console.log('clicked!');
// }


export default class App extends Component {
    render() {
        return (
            <PostsViewer />
            // <Button
            //     type='default'
            //     isGhost={false}
            //     handleClickFunction={handleClickFunction}/>
        );
    }
}
