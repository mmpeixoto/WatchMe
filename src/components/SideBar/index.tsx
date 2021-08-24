import { useEffect, useState, useContext } from "react";
import { MoviesContext } from "../../MoviesContext";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Container, ButtonsContainer } from "./style";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const {
    selectedGenreId,
    setSelectedGenreId,
    selectedGenre,
    setSelectedGenre,
  } = useContext(MoviesContext);

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <Container>
      <span>
        Watch<p>Me</p>
      </span>

      <ButtonsContainer>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </ButtonsContainer>
    </Container>
  );
}
