import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { FetchApiResponse } from "../services/apiClient";
import APIClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export function usePlatforms() {
  const apiClient = new APIClient<Platform>("/platforms/lists/parents");

  const { data, isLoading, error } = useQuery<
    FetchApiResponse<Platform>,
    Error
  >({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

  return { data, isLoading, error };
}
