import React, { Component } from 'react';
import HeaderInput from '../HeaderInput/HeaderInput';
import TextArea from '../TextArea/TextArea';
import CloseBtn from '../CloseBtn/CloseBtn';

import './BoardList.css';




// import ContactsListRow from './ContactsListRow';

export class BoardList extends Component {
	// const { title, description } = this.props;
	render() {
		return (
			<div className="border-item">
				 <HeaderInput />
				 <TextArea />
				 <CloseBtn 
				 //key={this.props.id} 
//onDeleted={() => onDeleted(id) }
				 />
			</div>
		)
	}
}
export default BoardList;