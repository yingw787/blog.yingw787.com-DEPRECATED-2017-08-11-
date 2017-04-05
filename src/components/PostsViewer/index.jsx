import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import AppBar from '../common/AppBar';
import Post from '../common/Post';
import { links } from 'config/links';

// const links = [
//     {
//         'href': 'https://google.com',
//         'text': 'home'
//     },
//     {
//         'href': 'https://linkedin.com',
//         'text': 'submit'
//     }
// ];

export default class PostsViewer extends Component {
    constructor(props) {
        super(props);
    }
    renderPosts(arrayOfPostLinks) {

    }
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
