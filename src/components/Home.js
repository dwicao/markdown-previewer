import React, { Component } from 'react';
import marked from 'marked';
import Parser from 'html-react-parser';

import styles from './Home.css';
import { initialText } from './text';

const renderer = new marked.Renderer();


export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: initialText
		};

		this.textUpdate = this.textUpdate.bind(this);
	}

	textUpdate(event) {
		this.setState({ text: event.target.value });
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className={styles.markdownTitle}>Markdown Previewer</h1>
					<div className="col-md-6">
						<textarea rows="25" onChange={this.textUpdate} className={`${styles.markdownTextarea} form-control`}>{this.state.text}</textarea>
					</div>
					<div id={'foo'} className={`${styles.markdownPreview} col-md-6`}>
						{Parser(marked(this.state.text))}
					</div>
				</div>
			</div>
		);
	}
}