import { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from './../BooksAPI';
import './../App.css';
import Book from '../components/Book';

const Search = ({myBooks,changeShelf}) => {
	const [result, setResult] = useState([]);

	const searchQuery = (input) => {
		input.length
			? search(input, 2).then((res) => {
					res.length && setResult([...res]);
			  })
			: setResult([]);
	};
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to={'/'}>
					Close
				</Link>

				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title, author, or ISBN" onChange={(e) => searchQuery(e.target.value.trim())} />
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{result.length &&
						result.map((book) => {
              const bookIndx =  myBooks.findIndex(mybook=>book.id===mybook.id)
              book['shelf']= bookIndx > -1 ? myBooks[bookIndx].shelf : 'none';
							return (
								<li key={book.id}>
									<Book book={book} changeShelf={changeShelf}/>
								</li>
							);
						})}
				</ol>
			</div>
		</div>
	);
};

export default Search;
