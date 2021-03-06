import React from 'react';
import AppRouter from './routers/AppRouter';
import 'semantic-ui-css/semantic.min.css'
import './styles/main.scss';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
	return (
		<div className="App">
			<AppRouter />
		</div>
	);
}

export default App;
