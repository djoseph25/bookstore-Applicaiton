import React, {Component} from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from 'mdbreact';
import './Contact.css'

class ContactPage extends Component {
	constructor(props) {
		super(props);
		this.state = { Name: '', Email: '', Subject: '', Message: '' };
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSumit = (event) => {
		event.preventDefault();
        this.setState({ Name: '', Email: '', Subject:'', Message: '' });
        alert(`Your Name ${this.state.Name} Your Email ${this.state.Email}`);
	};
 render(){

	return (
		<section className="my-5">
			<h2 className="h1-responsive font-weight-bold text-center my-5 c-statement ">
				Get inTouch with us
			</h2>
			<p className="text-center w-responsive mx-auto pb-5 c-statement">
				We Are here to please and treat our Customer like family, if you have any question. Please feel
				free to reach to us.
			</p>
			<MDBRow>
				<MDBCol lg="5" className="lg-0 mb-4">
					<MDBCard>
						<MDBCardBody>
							<div className="form-header blue accent-1">
								<h3 className="mt-2 c-statement">
									<MDBIcon icon="envelope" /> Write to us:
								</h3>
							</div>
							<p className="dark-grey-text pb-2 c-statement">
								We'll Usually reply within 24 hours if God is willing.
							</p>
							<form onSubmit={this.handleSumit}>
								<div className="YourName">
									<i class="fas fa-user-tie"></i>{' '}
									<input
										className="contact-input"
										type="text"
										id="name"
										name="Name"
										placeholder="Your Name"
										required="required"
										value={this.state.Name}
										onChange={this.handleChange}
									/>
								</div>
								<div className="YourEmail">
									<i class="fas fa-envelope"></i>{' '}
									<input
										className="contact-input"
										type="text"
										id="email"
										name="Email"
										placeholder="Your Email"
										required="required"
										value={this.state.Email}
										onChange={this.handleChange}
									/>
								</div>
								<div className="Options">
									<i class="fas fa-tags"></i>
									<select className="contact-input">
										<option>Choose your option</option>
										<option value="1">General Question</option>
										<option value="2">Shipping</option>
										<option value="3">Refunds</option>
									</select>
								</div>
								<div className="Message">
									<i class="fas fa-pencil-alt"></i>{' '}
									<input
										className="contact-input"
										type="text"
										id="message"
										name="Message"
										placeholder="subject"
										required="required"
										value={this.state.Message}
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="c-statement">
									Send Message
								</button>
							</form>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
				<MDBCol lg="7">
					<div
						id="map-container"
						className="rounded z-depth-1-half map-container"
						style={{ height: '400px' }}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
							title="This is a unique title"
							width="100%"
							height="100%"
							frameBorder="0"
							style={{ border: 0 }}
						/>
					</div>
					<br />
					<MDBRow className="text-center c-statement">
						<MDBCol md="4">
							<MDBBtn tag="a" floating color="blue" className="accent-1">
								<MDBIcon icon="map-marker-alt" />
							</MDBBtn>
							<p>Miami Florida, 33134</p>
							<p className="mb-md-0">United States</p>
						</MDBCol>
						<MDBCol md="4">
							<MDBBtn tag="a" floating color="blue" className="accent-1">
								<MDBIcon icon="phone" />
							</MDBBtn>
							<p>(509) 374-7383</p>
							<p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
						</MDBCol>
						<MDBCol md="4">
							<MDBIcon icon="envelope" />
							<MDBBtn tag="a" floating color="blue" className="accent-1"></MDBBtn>
							<p>BookShopBD@gmail.com</p>
							<p className="mb-md-0">saleteams@gmail.com</p>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</section>
	);
};
}
export default ContactPage;
