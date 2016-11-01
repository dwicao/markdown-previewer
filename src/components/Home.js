import React, { Component } from 'react';
import marked from 'marked';
import Parser from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.css';

import { styles } from './Home_style';
import { initialText } from './initialText';


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
					<h1 style={styles.title}>Markdown Previewer</h1>
					<div className="col-md-6">
						<textarea rows="25" onChange={this.textUpdate} className="form-control" style={styles.textArea}>{this.state.text}</textarea>
					</div>
					<div id={'foo'} className="col-md-6">
						{Parser(marked(this.state.text))}
					</div>
				</div>
			</div>
		);
	}
}