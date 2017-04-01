import React, { Component } from 'react';
import Post from '../common/Post';

// const handleClickFunction = () => {
//     console.log('clicked!');
// }


export default class App extends Component {
    render() {
        return (
            <Post />
            // <Button
            //     type='default'
            //     isGhost={false}
            //     handleClickFunction={handleClickFunction}/>
        );
    }
}
