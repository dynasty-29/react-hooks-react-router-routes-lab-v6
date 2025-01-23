import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 
    fetch("http://localhost:4000/directors")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching directors: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setDirectors(data))
      .catch((error) => setError(error.message));
  }, []);

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

  if (directors.length === 0) {
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
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, movieIndex) => (
                <li key={movieIndex}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;