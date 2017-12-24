import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component{

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="NavBar" style={{marginLeft:this.props.marginLeft}}>
			    <table>
			        <tr><td>Hello</td></tr>
			        <tr><td>Whats up!</td></tr>
			        <tr><td>Yo Yo</td></tr>
			        <tr><td>React</td></tr>
			    </table>
			</div>
		);
	}
}

export default NavBar;