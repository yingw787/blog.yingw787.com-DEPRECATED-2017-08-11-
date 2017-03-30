import React, { Component } from 'react';
import Button from '../common/Button';

const handleClickFunction = () => {
    console.log('clicked!');
}

export default class App extends Component {
    render() {
        return (
            <Button
                type='default'
                isGhost={false}
                handleClickFunction={handleClickFunction}/>
        );
    }
}
