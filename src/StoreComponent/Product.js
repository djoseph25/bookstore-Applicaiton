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
			<div className="product">
				{Products.map((book) => (
					<div>
						<div className="front-page" key={book._id}>
                            
							<Link to={`/product/${book._id}`}>
								<img src={book.image} alt={book.image} id='frontcover' />
							</Link>
						</div>

						<div className="price">
							<b>${book.price}</b>
						</div>
						<div className="button-style">
							<button onClick={() => AddToCart(book._id)} className='button'>Add to Cart</button>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Product;
