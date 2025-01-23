import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    if (movieId) {
      fetch(`http://localhost:4000/movies/${movieId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching movie: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => setMovie(data))
        .catch((error) => setError(error.message));
    }
  }, [movieId]);

  if (error) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Error</h1>
          <p>{error}</p>
        </main>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres && movie.genres.map((g, index) => (
          <span key={index}>{g}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
