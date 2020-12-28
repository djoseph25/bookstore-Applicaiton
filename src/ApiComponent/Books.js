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
					<ModalHeader toggle={this.toggle} charCode="Exit" id="modal-title">
						<p id="book-title">{this.props.title}</p>
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row>
								<Col lg={5} md={5} sm={5} xs={5}>
									<img src={this.props.image} className="profile-image" alt="bookImage" />
									{/* {this.props.id} */}
								</Col>
								<Col lg={7} md={7} sm={7} xs={7}>
									<div className="Book-info">
										<p>
											<span className="bold">Category: </span>
											<span>{this.props.categories}</span>
										</p>
										<p>
											<span className="bold">Authors: </span>
											<span>{this.props.authors}</span>
										</p>
										<p data-value="7" class="profile-ratings">
											<span className="bold">Rating: </span>
											<i class="fa fa-star col-yellow"></i>
											<i class="fa fa-star col-yellow"></i>
											<i class="fa fa-star col-yellow"></i>
											<i class="fa fa-star col-yellow"></i>
											  <span> {this.props.averageRating}</span>
										</p>
										<p>
											<span className="bold">Published Date: </span>
											<span>{this.props.publishedDate}</span>
										</p>
										<p>
											<span className="bold">Description: </span>
											<span>{this.props.description}</span>
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
