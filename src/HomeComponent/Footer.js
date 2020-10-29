import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import './Footer.css';
import twitter from '../image/twitter.png';
import instagram from '../image/instagram.png';
import linkedin from '../image/linkedin.png';
const FooterPage = () => {
	return (
		<MDBFooter color="blue" className="font-small pt-4 mt-4" id="footer">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					{/* About info */}
					<MDBCol md="6">
						<Link>
							<strong className="white-text">
								<i className="fas fa-book fa-lg" id="book"></i>BookStore
							</strong>
						</Link>
						<p>
							Finding your favorite book can be a daunting task, Now finding your favorite book has never
							been easier
						</p>
						<p id="address">
							<i class="fa fa-map-marker fa-lg" id="map"></i>4585 Ridenour Street South Beach
						</p>
						<p id="address">Miami Florida 33134</p>
					</MDBCol>
					{/* Quick Links */}
					<MDBCol md="3">
						<ul>
							<li className="list-unstyled" id="links">
								<Link id="links">HOME</Link>
							</li>
							<li className="list-unstyled" id="links">
								<Link id="links">STORE</Link>
							</li>
							<li className="list-unstyled" id="links">
								<Link id="links">ABOUT US</Link>
							</li>
							<li className="list-unstyled" id="links">
								<Link id="links">CONTACT US</Link>
							</li>
						</ul>
					</MDBCol>
					{/* Social */}
					<MDBCol md="3">
						<ul>
							<li className="list-unstyled">
								<img src={instagram} id="icons" alt="instagram-icons" />
							</li>
							<li className="list-unstyled">
								<img src={linkedin} id="icons" alt="Linkedin-icons" />
							</li>
							<li className="list-unstyled">
								<img src={twitter} id="icons" alt="twitter-icons" />
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright: All rights reserved. Privacy Policy | Terms of Use
					<a href="https://www.mdbootstrap.com"> BookShopBD.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default FooterPage;
