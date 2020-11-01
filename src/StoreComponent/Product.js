import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import './BookCover.css';

class Product extends Component {
	static contextType = BookContext;
	state = {};
	render() {
		const { Products, AddToCart } = this.context;
		return (
			<div>
				<h2 className="h1-responsive font-weight-bold text-center my-5 c-statement">Our bestsellers</h2>
				<p className="grey-text text-center w-responsive mx-auto mb-5 c-statement">
					I have read halve of these books and theres are my favorite, so I had to include them click add to cart to purchase.
				</p>
				<div className="product">
					{Products.map((book) => (
						<div>
							<div className="front-page" key={book._id}>
								<Link to={`/product/${book._id}`}>
									<img src={book.image} alt={book.image} id="frontcover" />
								</Link>
							</div>

							<div className="price">
								<b>${book.price}</b>
							</div>
							<div className="button-style">
								<button onClick={() => AddToCart(book._id)} className="button">
									Add to Cart
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Product;
