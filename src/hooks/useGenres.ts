import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import apiClient, { FetchApiResponse } from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export function useGenres() {
  const { data, isLoading, error } = useQuery<FetchApiResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient<FetchApiResponse<Genre>>("genres").then((res) => res.data),
    staleTime: ms("24h"),
  });

  return { data, error, isLoading };
}
