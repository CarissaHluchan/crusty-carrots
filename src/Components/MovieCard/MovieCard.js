import './MovieCard.css';
import CarrotRating from '../CarrotRating/CarrotRating';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieCard({
  title, id, poster_path, average_rating }) {
  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <h3 className="movie-title">{title}</h3>
        <img className="movie-poster" src={poster_path} alt="movie poster">{ }</img>
        <div className="movie-card-rating">
          <div>Movie Rating:</div>
          <CarrotRating rating={average_rating} key={`carrot-rating${id}`} />
        </div>
      </div>
    </Link>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
}

export default MovieCard;