import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class AppBar extends Component {
    constructor(props) {
        super(props);
        this.generateLinks = this.generateLinks.bind(this);
    }

    generateLinks() {
        const arrayOfLinks = _.map(this.props.links, function(link) {
            return (
                <li key={link.text}>
                    <Link to={link.href}>{link.text}</Link>
                </li>
            );
        });
        return arrayOfLinks;
    }

    render() {
        return (
            <header className="site-header dashed-bottom">
                <Link to="/" className="site-title">{this.props.siteTitle}</Link>
                <nav className="site-nav nav-separated" style={{'flex': 'none'}}>
                    <ul>
                        {this.generateLinks()}
                    </ul>
                </nav>
            </header>
        );
    }
}

AppBar.propTypes = {
    siteTitle: PropTypes.string.isRequired,
    links: PropTypes.array,
};
