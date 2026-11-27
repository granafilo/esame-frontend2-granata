import type { MovieDetail, MovieResponse } from "../types/type";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getMovieList = async (): Promise<MovieResponse> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
  );

  if (!res.ok) {
    throw new Error(`Errore nel caricamento: ${res.status}`);
  }
  const json = await res.json();

  return json;
};

export const getMovieDetail = async (id: number): Promise<MovieDetail> => {
  if (!id || isNaN(id)) throw new Error("Id non valido o non presente");

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
  );

  if (!res.ok) {
    throw new Error(`Errore nel caricamento: ${res.status}`);
  }

  const json = await res.json();

  return json;
};
