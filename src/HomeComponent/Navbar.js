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
import './Navbar.css';

class NavbarPage extends Component {
	state = {
		isOpen: false,
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div className='color'>
				<Row>
					<Col className="logo-row">
						<img id="logo" src={logo} alt="logo" />
					</Col>
				</Row>

				<MDBNavbar color="info" light expand="md" id="nav">
					<MDBNavbarBrand>
						<Link>
							<strong className="white-text">
								<i className="fas fa-book" id="book"></i>BookStore
							</strong>
						</Link>
					</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav right>
							<MDBNavItem active>
								<MDBNavLink to="/home" className="links">
									<a>HOME</a>
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="/about" className="links">
									<a>ABOUT</a>
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="/product" className="links">
									<a>STORE</a>
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="/contact" className="links">
									<a>CONTACT</a>
								</MDBNavLink>
							</MDBNavItem>
						</MDBNavbarNav>

						<Link to='/cart'>
							<i class="fa fa-shopping-bag fa-2x " aria-hidden="true">
								<span class="badge badge-warning" id="lblCartCount">
									5
								</span>
							</i>
						</Link>
						<MDBNavbarNav right>
							<Link>
								<button className="nav-button">BUY NOW</button>
							</Link>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBNavbar>
				<div id="test">
					<div class="flex-parent jc-center">
						<Link>
							<button class="green margin-right">ABOUT US</button>
						</Link>
						<Link>
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
