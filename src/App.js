import React from 'react';
import AppRouter from './routers/AppRouter';
import 'semantic-ui-css/semantic.min.css'
import './styles/main.scss';

function App() {
	return (
		<div className="App">
			<AppRouter />
		</div>
	);
}

export default App;
