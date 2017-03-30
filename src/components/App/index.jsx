import React, { Component } from 'react';
import AppBar from '../common/AppBar';

// const handleClickFunction = () => {
//     console.log('clicked!');
// }

const links = [
    {
        'href': 'https://google.com',
        'text': 'google'
    },
    {
        'href': 'https://linkedin.com',
        'text': 'linkedin'
    }
];

export default class App extends Component {
    render() {
        return (
            <AppBar
                siteTitle="yingw787"
                links={links}/>
            // <Button
            //     type='default'
            //     isGhost={false}
            //     handleClickFunction={handleClickFunction}/>
        );
    }
}
