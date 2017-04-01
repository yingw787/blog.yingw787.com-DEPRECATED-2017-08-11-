import React, { Component, PropTypes } from 'react';
import AppBar from '../common/AppBar';

const links = [
    {
        'href': 'https://google.com',
        'text': 'home'
    },
    {
        'href': 'https://linkedin.com',
        'text': 'submit'
    }
];

export default class PostsViewer extends Component {
    render() {
        return (
            <div className='container'>
                <AppBar
                    siteTitle="yingw787"
                    links={links}/>
                {this.props.posts}
            </div>
        );
    }
}

PostsViewer.propTypes = {
    posts: PropTypes.array // make PropTypes.array.isRequired
}
