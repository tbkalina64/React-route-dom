import React, { Component } from 'react';
import './CloseBtn.css';


export class CloseBtn extends Component {
	render() {
		return (
			<div >
				<button type="button" 
				className="close-btn" 
				// onClick={ this.props.onDeleted }
				>X</button>
			</div>
		)
	}
}

export default CloseBtn;