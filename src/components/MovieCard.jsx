import {Link} from 'react-router-dom';

// 
function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2> 
      <a href={`/movie/${movie.id}`}>View Info</a> 
    </div>
  );
}

export default MovieCard;