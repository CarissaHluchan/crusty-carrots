import './SearchTitle.css';
import { useState } from 'react';

function SearchTitle({ setFilteredMovies, moviesList }) {
  const [userSearchInput, setUserSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setUserSearchInput(() => e.target.value);
    const newList = filterMoviesByTitle(e.target.value, moviesList)
    setFilteredMovies(newList)
    if (newList.length === 0) {
      alert("No results matching your search, please try again!")
    };
  };

  function filterMoviesByTitle(title, movies) {
    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
  };

  function clearForm() {
    setFilteredMovies(moviesList);
    setUserSearchInput('');
  }

  const handleSearchReset = (e) => {
    e.preventDefault();
    return
  };

  return (
    <form onSubmit={handleSearchReset}>
      <input
        type="text"
        placeholder="Search by Title"
        className="search-by-title"
        value={userSearchInput}
        onChange={handleSearchInput}
      />
      <button type="reset" className="nav-search-button" onClick={clearForm}>Reset</button>
    </form>
  );
}

export default SearchTitle;