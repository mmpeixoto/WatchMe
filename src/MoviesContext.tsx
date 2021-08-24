import { createContext, ReactNode, useEffect, useState } from "react";

interface MoviesContextContent {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  selectedGenre: GenreResponseProps;
  setSelectedGenre: (genre: GenreResponseProps) => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export const MoviesContext = createContext({} as MoviesContextContent);

export function MoviesProvider({ children }: TransactionsProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );
  return (
    <MoviesContext.Provider
      value={{
        selectedGenreId,
        setSelectedGenreId,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
