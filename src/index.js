import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import Header from './js/Header';
import './css/index.css';

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
