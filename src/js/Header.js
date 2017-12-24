import React, { Component } from 'react';
import NavBar from './NavBar';
import '../css/Header.css';

class Header extends Component {

	constructor() {
		super();
		this.state = {
			navBarState : false,
			navBarMarginLeft : "-200px"
		}
		this.ExpandNavBar = this.ExpandNavBar.bind(this);
	}

	ExpandNavBar() {
		console.log("Hello");
		console.log(this.state.navBarWidth);
		if(this.state.navBarState){
			this.setState({
				navBarState : false,
				navBarMarginLeft : "-200px"
			});
		}else{
			this.setState({
				navBarState : true,
				navBarMarginLeft : "0px"
			});
		}
	}

	render() {
		return (
			<div className="Header">
				<div className="Header-banner">
					<h1 className="Header-text" onClick={ this.ExpandNavBar }>&#9776; Mohammed Atif</h1>
				</div>
				<NavBar marginLeft={this.state.navBarMarginLeft} />
			</div>
		);
	}
}

export default Header;