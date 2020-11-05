import React, { Component } from 'react';
import DATA from './Data';
import axios from 'axios';
//When ever I want to use my state object I just import BookContext
export const BookContext = React.createContext();

export class BookProvider extends Component {
	constructor(props) {
		super(props);
		this.state = { Products: DATA, Cart: [], Total: 0, Book: [] };
	}
	// NOTE adding my api call
  ApiCall = async () => {
		const api = `https://www.googleapis.com/books/v1/volumes?q=${this.state.BookSearch}`;
		let response = await axios.get(api);

		let data = response.data;
		console.log(data.items);
		this.setState({ Book: [...data.items] });
	};

	//NOTE letting folks know what the website can do
	onClick = () => {
		setTimeout(function () {
			alert('Click On a Book to Learn More');
		}, 6000);
	};
	// ANCHOR
	handleOnChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};
	// THE END OF MY TESTING

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
		const { Products, Cart, Total, Book, BookSearch } = this.state;
		const { AddToCart, Decrease, Increase, RemoveProduct, TotalPrice,} = this;
		return (
			<BookContext.Provider
				value={{
					BookSearch: 'Les Brown',
					Products,
					Cart,
					Book,
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
