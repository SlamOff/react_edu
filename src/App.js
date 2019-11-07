import React, { Suspense } from 'react';
//const Box = React.lazy(() => import('./Box.js'));
import Box from './Box.js';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>test</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<Box />
				</Suspense>
			</div>
		)
	}
}

export default App;
