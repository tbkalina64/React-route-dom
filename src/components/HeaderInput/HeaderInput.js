import React, { Component } from 'react';
import './HeaderInput.css';


export class HeaderInput extends Component {
	render() {
		return (
			<div >
				<input type="text" 
				className="header-input" 
				placeholder="New task"  
				key={this.props.id} />{ this.props.title }
			</div>
		)
	}
}

export default HeaderInput;