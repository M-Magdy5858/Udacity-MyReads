import { update } from "../BooksAPI";
import "./../App.css";
import Changer from "./Changer";

const Book = ({ book, changeShelf }) => {
	const selectShelf = (shelf) => {
		update(book, shelf);
		changeShelf && changeShelf(book, shelf);
	};
  const placeholder = 'https://via.placeholder.com/128x193.png?text=No+Image'
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${book?.imageLinks?.hasOwnProperty("thumbnail") ? book?.imageLinks.thumbnail : placeholder})`,
					}}
				></div>
				<Changer currentShelf={book?.shelf} selectShelf={selectShelf} />
			</div>
			<div className="book-title">{book?.title}</div>
			<div className="book-authors">
        {book?.authors ? (
          book?.authors?.map((author) => (
            <span key={author}>
              {author}
              <br />
            </span>
          ))
        ) : (
            <span>No author available</span>
        )
        
        }
				
			</div>
		</div>
	);
};

export default Book;
