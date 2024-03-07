import { useData } from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export function useGenres() {
  return useData<Genre>("/genres");
}
