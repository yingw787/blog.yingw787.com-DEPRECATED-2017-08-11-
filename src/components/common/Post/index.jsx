import React, { Component, PropTypes } from 'react';
import { Parser } from 'html-to-react';
import MarkdownParser from 'markdown-it';

const HtmlToReactParser = new Parser();
const md = new MarkdownParser();

export default class Post extends Component {
    render() {
        return (
            <div>
                {HtmlToReactParser.parse(md.render('markdown-it __rules__.'))}
            </div>
        );
    }
}
