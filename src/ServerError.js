import React from 'react';

class ServerError extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="error">
				<h3>Error ocured:</h3>
				<p>{this.props.error}</p>
				<button className="btn btn-resend" onClick={this.props.resend}>Resend request</button>
			</div>
		);
	}
}

export default ServerError;