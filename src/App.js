import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAll } from './BooksAPI';

function App() {
  const [myBooks, setMyBooks] = useState([]);

	useEffect(() => {
		getAll().then((books) => setMyBooks(books));
	}, []);

  const changeShelf = (book, shelf) => {
    const myBooksCopy = [...myBooks]
		const indx = myBooksCopy.findIndex((mybook) => mybook.id === book.id);
		myBooksCopy[indx].shelf = shelf;
		setMyBooks(myBooksCopy);
	};

	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home myBooks={myBooks} changeShelf={changeShelf} />} />
				<Route path="/search" element={<Search myBooks={myBooks} />} />
			</Routes>
		</div>
	);
}

export default App;
