import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Container, Row, Col } from 'reactstrap';
import './Book.css';

class Books extends Component {
	constructor(props) {
		super(props);
		this.state = { modal: false };
	}
	toggle = () => {
		this.setState({ modal: !this.state.modal });
	};
	render() {
		return (
			<div className="BookStore">
				<div className="front">
					<img
						id="fontcover"
						src={this.props.image}
						className="profile-image"
						onClick={this.toggle}
						alt="bookImage"
					/>
				</div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.className}>
					<ModalHeader toggle={this.toggle} charCode="Y">
						{this.props.title}
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row>
								<Col lg={5} md={5} sm={5} xs={5}>
									<img src={this.props.image} className="profile-image" alt="bookImage" />
								</Col>
								<Col lg={7} md={7} sm={7} xs={7}>
									<div className="Book-info">
										<p className=" Subtitle">
											<span>
												<b>Category</b>:
											</span>{' '}
											{this.props.categories}
										</p>
										<p className=" Author">
											<span>
												<b>Authors</b>
											</span>
											: {this.props.authors}
										</p>
										<p data-value="7" class="profile profile-ratings">
											<span>Rating:</span>
											<i class="fa fa-star col-yellow"></i>
											<i class="fa fa-star col-yellow"></i>
											<i class="fa fa-star col-yellow"></i>
											<i class="fa fa-star col-yellow"></i>
											{this.props.averageRating}
										</p>
										<div data-value="8" class="profile  profile-description">
											<b>Published Date</b>: {this.props.publishedDate}
										</div>
										<p class="profile-description">
											<b>Description</b>: {this.props.description}
										</p>
									</div>
								</Col>
							</Row>
						</Container>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default Books;
