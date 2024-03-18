import { useGenres } from "./useGenres";

export function useGenre(id?: number) {
  const { data, error } = useGenres();

  if (error) return undefined;

  return data?.results.find((genre) => genre.id === id);
}
