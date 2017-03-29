import React, { Component } from 'react';
import classNamesConstructor from 'classnames';
import styles from './styles.css';

const buttonClass = classNamesConstructor({
    'styles.container': false,
    'btn': true,
    'btn-primary': true
})

export default class Button extends Component {
    render() {
        return (
            <button className={buttonClass}>Hello World</button>
        );
    }
}
