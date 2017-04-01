import React, { Component, PropTypes } from 'react';
import { Parser } from 'html-to-react';
import marked from 'marked';

const HtmlToReactParser = new Parser();
// const MarkdownParser = new markdown();

export default class Post extends Component {
    render() {
        return (
            <div>
                {HtmlToReactParser.parse(marked('I am using __markdown__.'))}
            </div>
        );
    }
}
