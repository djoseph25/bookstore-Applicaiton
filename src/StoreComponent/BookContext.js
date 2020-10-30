import React, { Component } from 'react';
import DATA from './Data';
//When ever I want to use my state object I just import BookContext
export const BookContext = React.createContext();

export class BookProvider extends Component {
	state = { Products: DATA, Cart: [], Total: 0 };
	//NOTE FInally got add to cart to work correctly
	AddToCart = (id) => {
		const { Products, Cart } = this.state;
		const check = Cart.every((item) => {
			return item._id !== id;
		});
		if (check) {
			const data = Products.filter((product) => {
				return product._id === id;
			});
			this.setState({ Cart: [...Cart, ...data] });
		} else {
			alert('This Product Is Already In Your Cart.');
		}
	};

	Decrease = (id) => {
		const { Cart } = this.state;
		Cart.forEach((book) => {
			if (book._id === id) {
				book.count === 1 ? (book.count = 1) : (book.count -= 1);
			}
		});
		this.setState({ Cart: Cart });
		this.TotalPrice();
	};

	Increase = (id) => {
		const { Cart } = this.state;
		Cart.forEach((book) => {
			if (book._id === id) {
				book.count += 1;
			}
		});
		this.setState({ Cart: Cart });
		this.TotalPrice();
	};

	RemoveProduct = (id) => {
		if (window.confirm('Do you want to delete this product?')) {
			const { Cart } = this.state;
			Cart.forEach((book, index) => {
				if (book._id === id) {
					Cart.splice(index, 1);
				}
			});
			this.setState({ Cart: Cart });
			this.TotalPrice();
		}
	};

	TotalPrice = () => {
		const { Cart } = this.state;
		const res = Cart.reduce((prev, book) => {
			return prev + book.price * book.count;
		}, 0);
		this.setState({ Total: res });
	};

	render() {
		const { Products, Cart, Total } = this.state;
		const { AddToCart, Decrease, Increase, RemoveProduct, TotalPrice } = this;
		return (
			<BookContext.Provider
				value={{
					Products,
					Cart,
					Total,
					AddToCart,
					Decrease,
					Increase,
					RemoveProduct,
					TotalPrice,
				}}
			>
				{this.props.children}
			</BookContext.Provider>
		);
	}
}
