import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import AppBar from '../common/AppBar';
import Post from '../common/Post';
import { links } from 'config/links';
import { siteTitle } from 'config/misc';

export default class PostsViewer extends Component {
    constructor(props) {
        super(props);
    }
    renderPosts(arrayOfPostLinks) {
        const arrayOfPosts = _.map(arrayOfPostLinks, postLink => {
            return (
                <Post
                    key={postLink}
                    fileLink={postLink}
                />
            )
        });
        return arrayOfPosts;
    }
    render() {
        return (
            <div className='container'>
                <AppBar
                    siteTitle={siteTitle}
                    links={links}/>
                {this.renderPosts(this.props.posts)}
            </div>
        );
    }
}

PostsViewer.propTypes = {
    posts: PropTypes.array.isRequired
}
