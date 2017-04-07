import React, { Component, PropTypes } from 'react';
import { Parser } from 'html-to-react';
import MarkdownParser from 'markdown-it';
import prism from 'markdown-it-prism';

// TODO: markdown-it-mermaid has ES6 arrow functions that break the production build. Need to resolve this before uncommenting the markdown-it-mermaid import below.
// This is because node_modules folder is ignored by babel-loader, and when the packages are imported, the fat arrow functions are written directly to the bundle.js file, which means when UglifyJS was running, it failed to parse and threw an exception.

// TODO: markdown-it-katex creates unsupported props in React; figure out a way to disable these when importing this and chaining it to the markdown-it parser.

// import mk from 'markdown-it-katex';
// import markdownItMermaid from 'markdown-it-mermaid';
import axios from 'axios';

import styles from './styles.css';

const HtmlToReactParser = new Parser();
const md = new MarkdownParser();
md.use(prism);
// md.use(mk);
// md.use(markdownItMermaid);

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
        axios.get(this.props.fileLink)
            .then(response => {
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
    fileLink: PropTypes.string.isRequired
}
