import React, { Component, PropTypes } from 'react';
import { Parser } from 'html-to-react';
import MarkdownParser from 'markdown-it';
import prism from 'markdown-it-prism';
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
