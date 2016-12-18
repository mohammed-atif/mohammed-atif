import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component{

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="NavBar" style={{width:this.props.width, paddingLeft:this.props.paddingLeft}}>
				Heelo
			</div>
		);
	}
}

export default NavBar;