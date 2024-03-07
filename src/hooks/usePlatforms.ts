import { useData } from "./useData";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export function usePlatforms() {
  return useData<Platforms>("/platforms/lists/parents");
}
