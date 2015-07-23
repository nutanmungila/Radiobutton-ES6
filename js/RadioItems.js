'use strict'
import React from 'react';

export default class RadioItems extends React.Component{
	constructor(props){
		super(props);
		this.onClickRadio = this.onClickRadio.bind(this);
	}

	onClickRadio(){
		this.props.onSelectedItem(this.props.itm);
	}

	render(){
		return(
				<div>
					
					<input type="radio" name="sex" value="male" onClick={this.onClickRadio}/>{this.props.itm}
					
				</div>
			  );
	}
}

