import { usePlatforms } from "./usePlatforms";

export function usePlatform(id?: number) {
  const { data, error } = usePlatforms();

  if (error) return undefined;

  return data?.results.find((platform) => platform.id === id);
}
