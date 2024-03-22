import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { FetchApiResponse } from "../services/apiClient";
import APIClient from "../services/apiClient";
import Genre from "../entities/Genre";

export function useGenres() {
  const apiClient = new APIClient<Genre>("/genres");

  const { data, isLoading, error } = useQuery<FetchApiResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

  return { data, error, isLoading };
}
