import React, { Component, PropTypes } from 'react';
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
                    <a href={link.href}>{link.text}</a>
                </li>
            );
        });
        return arrayOfLinks;
    }

    render() {
        return (
            <header className="site-header dashed-bottom">
                <a className="site-title" href="#">{this.props.siteTitle}</a>
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
