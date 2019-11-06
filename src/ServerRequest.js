import React from 'react';
import './ServerRequest.css';
import ServerResult from './ServerResult.js';
import ServerError from './ServerError.js';
import axios from 'axios';

class ServerRequest extends React.Component {
	state = {
		data: [],
		error: false,
		result: false,
		errorMessage: '',
		timer: 5000,
		counter: 1,
		cancel: false
	};

	counter = () => {
		let interval = setInterval(() => {
			this.setState.counter =+ this.state.timer/1000 - 1;
			console.log( this.state.timer/1000 - 1);
		}, 1000);
	}

	sendRequest = () => {
		// use the wrong link for error displaying
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		let cancel;
		
		return axios('https://api.nasa.gov/planetary/apod?api_key=3kjYCYoBK3Id0kmoaDtA4E4qjJC8ZNyxnaCgctdT')
			.then(res => {
				//console.log(axios(config))
				// setTimeout is used for cancelRequest being available
				//setTimeout(() => {
					this.setState({
						result: true,
						error: false,
						data: res.data,
						errorMessage: '',
						counter: 0
					});
				//}, this.state.timer);
				//this.counter();
			})
			.catch(err => {
				this.setState({
					error: true,
					result: false,
					data: [],
					errorMessage: err.message
				});
			})
	};

	cancelRequest = () => {
		this.setState({
			cancel: true
		});
	};

	render() {
		return (
			<div className="wrapper">
				<button className="btn btn-send" onClick={this.sendRequest}>Send request</button>
				<button className="btn btn-reject" onClick={this.cancelRequest}>Cancel request</button>
				{this.state.counter !== 0 && <span>Data will be received in <strong>{this.state.counter}</strong> seconds</span>}
				{this.state.result && <ServerResult data={this.state.data} />}
				{this.state.error && <ServerError error={this.state.errorMessage} resend={this.sendRequest} />}
			</div>
		);
	}
}

export default ServerRequest;
