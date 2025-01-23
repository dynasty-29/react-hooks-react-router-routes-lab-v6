import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace this URL with the actual endpoint for fetching actors
    fetch("http://localhost:4000/actors")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching actors: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setActors(data))
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

  if (actors.length === 0) {
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
        <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, movieIndex) => (
                <li key={movieIndex}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
