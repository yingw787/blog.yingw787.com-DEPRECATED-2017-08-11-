import React, { Component } from 'react';
import Button from '../common/Button';

export default class App extends Component {
    render() {
        return (
            <Button
                type='default'
                isGhost={false}/>
        );
    }
}
