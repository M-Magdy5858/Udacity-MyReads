import './../App.css';
// import Book from '../components/Book';
import { getAll } from './../BooksAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';

const Home = () => {
	const [myBooks, setMyBooks] = useState([]);

	useEffect(() => {
		getAll().then((books) => setMyBooks(books));
	}, []);

	const changeShelf = (book, shelf) => {
		const indx = myBooks.findIndex((mybook) => mybook.id === book.id);
		myBooks[indx].shelf = shelf;
		setMyBooks([...myBooks]);
	};

	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<Shelf name="Currently Reading" changeShelf={changeShelf} books={myBooks.filter((book) => book.shelf === 'currentlyReading')} />
					<Shelf name="Want to Read" changeShelf={changeShelf} books={myBooks.filter((book) => book.shelf === 'wantToRead')} />
					<Shelf name="Read" changeShelf={changeShelf} books={myBooks.filter((book) => book.shelf === 'read')} />
				</div>
			</div>
			<div className="open-search">
				<Link to={'/search'}>Add a book</Link>
			</div>
		</div>
	);
};

export default Home;
