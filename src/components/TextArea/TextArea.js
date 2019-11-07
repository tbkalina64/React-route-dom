import React, { Component } from 'react';
import './TextArea.css';


export default class TextArea extends Component {
	render() {
		return (
			<div >
				<textarea 
				className="text-area" 
				placeholder="Description"
				key={this.props.id} >
				{ this.props.description }
				</textarea>
			</div>
		)
	}
};