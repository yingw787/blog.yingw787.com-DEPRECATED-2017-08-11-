import React, { Component, PropTypes } from 'react';
import { Parser } from 'html-to-react';
import MarkdownParser from 'markdown-it';
import toString from 'stream-to-string';
import axios from 'axios';

// import exampleMarkdownFilePath from 'posts/EXAMPLE.md';

const HtmlToReactParser = new Parser();
const md = new MarkdownParser();

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            postText: ''
        };
    }

    componentDidMount() {
        let self = this;
        axios.get('../../../posts/EXAMPLE.md')
            .then(response => {
                debugger;
                const text = HtmlToReactParser.parse(md.render(response.data));
                self.setState({
                    loading: false,
                    postText: text
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {!this.state.loading && this.state.postText}
            </div>
        );
    }
}

Post.propTypes = {
    fileLink: PropTypes.string // make PropTypes.string.isRequired
}
