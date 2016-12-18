import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import './index.css';

class Main extends Component {
	render() {
		return(
			<div>
				<Header />
				<App />
			</div>
		);
	}
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
