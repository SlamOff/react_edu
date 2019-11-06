import React from 'react';
import './ServerRequest.css';
import ServerResult from './ServerResult.js';
import ServerError from './ServerError.js';
import axios from 'axios';

class ServerRequest extends React.Component {

	constructor() {
		super();
		this.url = 'https://api.nasa.gov/planetary/apod?api_key=3kjYCYoBK3Id0kmoaDtA4E4qjJC8ZNyxnaCgctdT';
		this.CancelToken = axios.CancelToken;
		
	}

	state = {
		data: [],
		error: false,
		result: false,
		errorMessage: '',
		cancel: false,
	};

	componentDidUpdate(){
		const CancelToken = axios.CancelToken;
		if(this.state.cancel){
			this.source.cancel('You canceled your request');
		}
	}

	sendRequest = () => {
		this.source = this.CancelToken.source();
		axios(this.url, {
			cancelToken: this.source.token
		})
			.then(res => {
				console.log('then');
				this.setState({
					result: true,
					error: false,
					data: res.data,
					errorMessage: '',
				});
			})
			.catch(err => {
				console.log('catch');
				this.setState({
					error: true,
					result: false,
					data: [],
					errorMessage: err.message
				});
			}
		)
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
				{this.state.result && <ServerResult data={this.state.data} />}
				{this.state.error && <ServerError error={this.state.errorMessage} resend={this.sendRequest} />}
			</div>
		);
	}
}

export default ServerRequest;
