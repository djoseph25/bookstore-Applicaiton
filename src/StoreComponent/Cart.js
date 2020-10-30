import React, { Component } from 'react';
import { BookContext } from './BookContext';
import { Link } from 'react-router-dom';
import './Cart.css';
class CartItem extends Component {
	static contextType = BookContext;

	componentDidMount() {
		this.context.TotalPrice();
	}

	render() {
		const { Cart, Total, Increase, Decrease, RemoveProduct } = this.context;
		if (Cart.length <= 0) {
			return <h1 className="cart-title">Your Shopping Cart is Empty</h1>;
		} else {
			return (
				<div className='cart-style'>
					<h1 className="cart">Your Items</h1>
					{Cart.map((book) => (
						<div class="container mb-4">
							<div class="row">
								<div class="col-12">
									<div class="table-responsive">
										<table class="table table-striped">
											<tbody>
												<tr>
													<td className="crop">
														<img src={book.image} id="image" key={book._id} />
													</td>
													<td>In stock</td>
													<div className="title">
														<td className="book">{book.title}</td>
													</div>

													<td>
														<button className="decrease" onClick={() => Decrease(book._id)}>
															-
														</button>
														{book.count}
														<button className="increase" onClick={() => Increase(book._id)}>
															+
														</button>
													</td>
													<td class="text-right">${book.price * book.count}</td>
													<td class="text-right">
														<button class="btn btn-sm btn-danger" onClick={() => RemoveProduct(book._id)}>
															<i class="fa fa-trash"></i>
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="move-total">
						<div class="totals">
							<div class="totals-item">
								<label>Total Items In Cart</label>
								<div class="totals-value" id="cart-subtotal">
									{Cart.length}
								</div>
							</div>
							<div class="totals-item">
								<label>Shipping</label>
								<div class="totals-value" id="cart-shipping">
									$0
								</div>
							</div>
							<div class="totals-item totals-item-total">
								<label>Grand Total</label>
								<div class="totals-value" id="cart-total">
									${Total}
								</div>
							</div>
						</div>
						<Link to="/">
							<button class="checkout" onClick={this.Checkout}>
								Checkout
							</button>
						</Link>
					</div>
				</div>
			);
		}
	}
}

export default CartItem;
