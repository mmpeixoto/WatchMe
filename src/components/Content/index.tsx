import { Container } from "./style";
import { MovieCard } from "../MovieCard/index";
import { useState, useContext, useEffect } from "react";
import { MoviesContext } from "../../MoviesContext";
import { api } from "../../services/api";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {
  const {
    selectedGenreId,
    setSelectedGenreId,
    selectedGenre,
    setSelectedGenre,
  } = useContext(MoviesContext);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <>
      <Container>
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>
        <main>
          <div className="movies-list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>{" "}
        </main>
      </Container>
    </>
  );
}
