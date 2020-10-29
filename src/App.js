import React from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
import NavbarPage from '../src/HomeComponent/Navbar';
import FooterPage from '../src/HomeComponent/Footer'
function App() {
	return (
		<div className="App">
			<NavbarPage/>
		     <FooterPage/>
		</div>
	);
}

export default App;
