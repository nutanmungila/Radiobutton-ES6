'use strict';
 import React from 'react';
 import Radiocomp from './Radiocomp'

class App extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<Radiocomp items={this.props.itemList} />
				</div>
			  );
	}

}

App.propTypes = {itemList : React.PropTypes.array.isRequired};
App.defaultProps = {itemList : ["RED","GREEN","BLUE"]};

React.render(<App />,document.getElementById("div-bx"));