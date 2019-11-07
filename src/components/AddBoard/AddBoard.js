import React, { Component } from 'react';


export class AddBoard extends Component {
	render() {
		return (
			<div>
				<button 
				className="add-board" 
				// onClick={this.props.onAddBoard('Hello')}
				>
					Добавить задание
				</button>
			</div>	
		)
	}
}

export default AddBoard;