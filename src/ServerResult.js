import React from 'react';

class ServerResult extends React.Component {
	render() {
		return (
			<div className="result">
				<h3>Received Data</h3>
				<p className="result__title"><strong>Title: </strong>{this.props.data.title}</p>
				<p className="result__date"><strong>Date: </strong> {this.props.data.date}</p>
				<p className="result__desc"><strong>Description: </strong>{this.props.data.explanation}</p>
				<img className="result__pict" src={this.props.data.url} />
			</div>
		);
	}
}

export default ServerResult;