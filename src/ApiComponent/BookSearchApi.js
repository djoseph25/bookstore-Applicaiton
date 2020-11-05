import React, { Component } from 'react';
import axios from 'axios';
import Books from './Books';
import './BookSearch.css';
import { BookContext } from '../StoreComponent/BookContext';
import { Button } from 'reactstrap';

class BookSearchApi extends Component {
	static contextType = BookContext;
	constructor(props) {
		super(props);
		this.state = {Book:[], BookSearch: 'JavaScript' };
		this.onSubmit = this.onSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	async componentDidMount(query) {
		const api = `https://www.googleapis.com/books/v1/volumes?q=${this.state.BookSearch}`;
		let response = await axios.get(api);

		let data = response.data;
		console.log(data.items);
		this.setState({ Book: [...data.items] });
	}
	onSubmit(event) {
		event.preventDefault();
		this.componentDidMount();
	}

	handleClick(event) {
		event.preventDefault();
		this.componentDidMount();
	}
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

	//
	render() {
		const { Book} = this.context;
		const Booksetup = this.state.Book.map((book, idx) => {
			const description =
				book.volumeInfo.description === undefined
					? 'NO Description Was Found'
					: book.volumeInfo.description;
			// NOTE I had to use the slice Method here my string were way too long.
			const descriptionSlice = description.slice(0, 160);

			const publishedDate =
				book.volumeInfo.publishedDate === undefined
					? 'No  Date was Found'
					: book.volumeInfo.publishedDate;
			const title =
				book.volumeInfo.title === undefined ? 'No Book Title Was Found' : book.volumeInfo.title;
			const id = book.id || 'NO Id';

			const category =
				book.volumeInfo.categories === undefined ? 'No Category Was Found' : book.volumeInfo.categories;
			const rating =
				book.volumeInfo.averageRating === undefined ? 'No Rating' : book.volumeInfo.averageRating;
			const authors = book.volumeInfo.authors === undefined ? 'No Auhtors' : book.volumeInfo.authors;
			return (
				<Books
					key={idx}
					title={title}
					id={id}
					authors={authors}
					description={descriptionSlice}
					publishedDate={publishedDate}
					categories={category}
					averageRating={rating}
					image={
						book.volumeInfo.hasOwnProperty('imageLinks') === false
							? {
									thumbnail: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-23.jpg',
							  }
							: book.volumeInfo.imageLinks.thumbnail
					}
				/>
				
			);
		});
		return (
			<div className="row">
				<div className="input-style">
					<form onSubmit={this.onSubmit}>
						<input
						    id="input"
							type="text"
							placeholder="search"
							value={this.state.BookSearch}	
							name= 'BookSearch'
							onClick={this.onClick}
							onChange={this.handleOnChange}
						/>
						<button onClick={this.handleClick} id="button-style">
							Search
						</button>
					</form>
				</div>

				<div className="bookpage">{Booksetup}</div>
			</div>
		);
	}
}
export default BookSearchApi;
