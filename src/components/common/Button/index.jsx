import React, { Component, PropTypes } from 'react';
import classNamesConstructor from 'classnames';
import styles from './styles.css';

const BUTTON_TYPES = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    DISABLED: 'disabled',
    LINK: 'link',
};

// NOTE: Issue with Chrome on macOS where focus does not go away for buttons after onClick. This issue does not appear in Firefox.

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.generateButtonClasses = this.generateButtonClasses.bind(this);
    }

    generateButtonClasses() {
        return classNamesConstructor({
            'btn': true,
            'btn-ghost': this.props.isGhost,
            'btn-default': this.props.type == BUTTON_TYPES.DEFAULT,
            'btn-primary': this.props.type == BUTTON_TYPES.PRIMARY,
            'btn-success': this.props.type == BUTTON_TYPES.SUCCESS,
            'btn-info': this.props.type == BUTTON_TYPES.INFO,
            'btn-warning': this.props.type == BUTTON_TYPES.WARNING,
            'btn-error': this.props.type == BUTTON_TYPES.ERROR,
            'btn-link': this.props.type == BUTTON_TYPES.LINK,
        });
    }

    handleClick() {
        console.log('clicked!');
    }

    render() {
        return (
            <button
                className={this.generateButtonClasses()}
                disabled={this.props.type == BUTTON_TYPES.DISABLED}
                onClick={this.handleClick}>
                Hello World
            </button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    isGhost: PropTypes.bool.isRequired,
};
