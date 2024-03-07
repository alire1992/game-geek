import { useData } from "./useData";

interface Genre {
  id: number;
  name: string;
}

export function useGenres() {
  return useData<Genre>("/genres");
}
