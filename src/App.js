import React from 'react';
import './App.css';
import ServerRequest from './ServerRequest.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to Axios</h1>
				<ServerRequest />
			</div>
		);
	}
}

export default App;
