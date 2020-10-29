import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavbarPage from '../src/HomeComponent/Navbar';
import FooterPage from '../src/HomeComponent/Footer'
import Contact from '../src/HomeComponent/Contact'
import AboutUs from '../src/HomeComponent/AboutUs'
import Cart from '../src/StoreComponent/Cart'
import Product from '../src/StoreComponent/Product'
import Details from '../src/StoreComponent/Details'
import BookSearchApi from '../src/ApiComponent/BookSearchApi'

function App() {
	return (
		<div className="App">
			<NavbarPage />
			<Switch>
				<Route exact path="/home" component= {BookSearchApi}  />
				<Route path="/product/" component={Product} />
				<Route path="/product/:id" component={Details} />
				<Route path="/about" component={AboutUs} />
				<Route path="/contact" component={Contact} />
				<Route path="/cart" component={Cart} />
			</Switch>
			<FooterPage />
		</div>
	);
}

export default App;
