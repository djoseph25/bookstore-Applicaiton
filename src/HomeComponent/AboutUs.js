import React, { Component } from 'react';
import {
	MDBCard,
	MDBCardBody,
	MDBRow,
	MDBCol,
	MDBContainer,
} from 'mdbreact';
import './AboutUs.css';
export default class AboutUs extends Component {
	render() {
		return (
			<div>
				<MDBRow className="mission">
					<MDBCard>
						<MDBCardBody cascade className="text-center">
							<MDBContainer>
								<h1 className="ourmission c-statement">-Our Mission-</h1>
								<p className="mission-statement">
									A place where the reader and book meet and a journey begins.{' '}
								</p>
								<h1 className="aboutus c-statement">About</h1>
								<p className="mission-statement">
									The STORE statement requests that the procedure save the estimated parameters of the fitted
									model. The resulting item store is a binary file format that cannot be modified. The
									contents of the item store can be processed with the PLM procedure.
								</p>
								<p className="mission-statement">
									The information stored by the STORE statement in PROC REG is a subset of what is usually
									stored by other procedures that implement this statement. In particular, PROC REG stores
									only the estimated parameters of the model, so that you can later use the CODE statement in
									PROC PLM to write SAS DATA step code for prediction to a file or catalog entry. With only
									this subset of information, many other postprocessing features of PROC PLM are not
									available for item stores that are created by PROC REG.
								</p>
							</MDBContainer>
						</MDBCardBody>
					</MDBCard>
				</MDBRow>
				<MDBRow className="mission">
					<MDBCard>
						<MDBCardBody cascade className="text-center">
							<h1 className="ownership c-statement">Ownership</h1>
							<MDBContainer>
								<MDBRow className="owner">
									<MDBCol size="6">
										<img
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
											alt="owner-image"
											id="owner-image"
										/>
										<div className="c-statement">Karen Mcdonald</div>
										<span className="ceo-bio">Owner/Ceo</span>
										<p className="ceo-bio">
											Karen Mcdonald Smith stategic vison and manages investor relations. Before Smith Karen
											was involve in several startup including, Apple, Amazon, Orlando Tech and google Books.
										</p>
										<div className="c-statement">Karen Favorite Books</div>
										<span className="ceo-bio">Da Davinci Code, Live Your Dreams</span>
									</MDBCol>
									<MDBCol size="6">
										<img
											src="https://images.unsplash.com/photo-1584598408453-5163444959e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
											alt="owner-image"
											id="owner-image"
										/>
										<div className="c-statement">Samuel Noel Joseph</div>
										<span className="ceo-bio">Owner/Ceo</span>
										<p className="ceo-bio">
											Samuel Joseph stategic vison and manages investor relations. Before Smith Karen was
											involve in several startup including, nefity, yahoo Books, Orlando Tech and don't google
											Books.
										</p>
										<div className="c-statement">Noel Favorite Books</div>
										<span className="ceo-bio">Goodnight Moon, Baby Code Play</span>
									</MDBCol>
								</MDBRow>
							</MDBContainer>
						</MDBCardBody>
					</MDBCard>
				</MDBRow>
			</div>
		);
	}
}
