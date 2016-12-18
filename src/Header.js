import React, { Component } from 'react';
import NavBar from './Nav';
import './Header.css';

class Header extends Component {

	constructor() {
		super();
		this.state = {
			navBarState : false,
			navBarWidth : "0px"
		}
		this.ExpandNavBar = this.ExpandNavBar.bind(this);
	}

	ExpandNavBar() {
		console.log("Hello");
		console.log(this.state.navBarWidth);
		if(this.state.navBarState){
			this.setState({
				navBarState : false,
				navBarWidth : "0px",
				navBarPadding : "0px"
			});
		}else{
			this.setState({
				navBarState : true,
				navBarWidth : "200px",
				navBarPadding : "20px"
			});
		}
	}

	render() {
		return (
			<div className="Header">
				<div className="Header-banner">
					<h1 className="Header-text" onClick={ this.ExpandNavBar }>&#9776; Mohammed Atif</h1>
				</div>
				<NavBar width={this.state.navBarWidth} paddingLeft={this.state.navBarPadding} />
			</div>
		);
	}
}

export default Header;