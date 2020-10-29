import React, { Component } from 'react';
import axios from 'axios';
import Books from './Books';
import './BookSearch.css';

class BookSearchApi extends Component {
	constructor(props) {
		super(props);
		this.state = { Book: [] };
		this.onSubmit = this.onSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	async componentDidMount(query) {
		const api = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
		let response = await axios.get(api);

		let data = response.data;
		console.log(data.items);
		this.setState({ Book: [...data.items] });
	}
	onSubmit(event) {
		event.preventDefault();
		var query = this.input.value;
		// console.log(query);
		this.componentDidMount(query);
	}

	handleClick(event) {
		event.preventDefault();
		var query = this.input.value;
		// console.log(query);
		this.componentDidMount(query);
	}
	render() {
		const Booksetup = this.state.Book.map((book, idx) => {
			const description =
				book.volumeInfo.description === undefined
					? 'NO Description Was Found'
					: book.volumeInfo.description;
			// NOTE I had to use the slice Method here my string were way too long.
			const descriptionSlice = description.slice(0, 160);

			const publishedDate =
				book.volumeInfo.publishedDate === undefined
					? 'No Published Date was Found'
					: book.volumeInfo.publishedDate;
			const title =
				book.volumeInfo.title === undefined ? 'No Book Title Was Found' : book.volumeInfo.title;

			const category =
				book.volumeInfo.categories === undefined ? 'No Category Was Found' : book.volumeInfo.categories;
			const rating =
				book.volumeInfo.averageRating === undefined ? 'No Rating' : book.volumeInfo.averageRating;
			const authors = book.volumeInfo.authors === undefined ? 'No Auhtors' : book.volumeInfo.authors;
			return (
				<Books
					key={idx}
					title={title}
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
			<div>
				<div id="Input">
					<div className="searchbox animated zoomIn">
						<form onSubmit={this.onSubmit} className="">
							<input
								type="text"
								placeholder="search"
								class="search"
								ref={(input) => (this.input = input)}
							/>
							<i class="fas fa-search"></i>
							{/* <button onClick={this.handleClick} id="closeid" type="reset" class="close">
								<i class="fas fa-times"></i>
								<p id="demo"></p>Search
							</button> */}
						</form>
					</div>
				</div>
				<div className="bookpage">{Booksetup}</div>
			</div>
		);
	}
}
export default BookSearchApi;
