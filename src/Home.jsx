import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button>Add Book</button>
      </Link>
      {/* List of BookCard components */}
    </div>
  );
};

export default Home;