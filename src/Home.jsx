import { Link } from "react-router-dom";
import books from "./booksData"; // Import book data

const Home = () => {
  return (
    <div>
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button>Add Book</button>
      </Link>

      {/* Display list of books */}
      <div>
        {books.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
            <img src={book.coverImage} alt={book.title} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;