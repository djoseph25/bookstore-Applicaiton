import React, { Component } from 'react';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
} from 'mdbreact';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import {BookContext} from '../StoreComponent/BookContext'
import './Navbar.css';

class NavbarPage extends Component {
	static contextType = BookContext;
	state = {
		isOpen: false,
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		const { Cart} = this.context;
		return (
			<div className="color">
				<Row>
					<Col className="logo-row">
						<img id="logo" src={logo} alt="logo" />
					</Col>
				</Row>

				<MDBNavbar color="info" light expand="md" id="nav">
					<MDBNavbarBrand>
						<Link to='/home'>
							<strong className="white-text">
								<i className="fas fa-book" id="book"></i>BookStore
							</strong>
						</Link>
					</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav right>
							<MDBNavItem >
								<MDBNavLink to="/Home" className="links">
									<b href='/'>HOME</b>
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="/about" className="links">
									<b>ABOUT</b>
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="/product" className="links">
									<b>STORE</b>
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="/contact" className="links">
									<b>CONTACT</b>
								</MDBNavLink>
							</MDBNavItem>
						</MDBNavbarNav>

						<Link to="/cart">
							<i class="fa fa-shopping-bag fa-2x " aria-hidden="true">
								<span class="badge badge-warning" id="lblCartCount">
									{Cart.length}
								</span>
							</i>
						</Link>
						<MDBNavbarNav right>
							<Link to ='/product'>
								<button className="nav-button">BUY NOW</button>
							</Link>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBNavbar>
				<div id="test">
					<div class="flex-parent jc-center">
						<Link to='/about'>
							<button class="green margin-right">ABOUT US</button>
						</Link>
						<Link to='/contact'>
							<button class="magenta">CONTACT</button>
						</Link>
					</div>
				</div>
				<div></div>
			</div>
		);
	}
}

export default NavbarPage;
