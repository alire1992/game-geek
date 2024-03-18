import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { FetchApiResponse } from "../services/apiClient";
import APIClient from "../services/apiClient";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export function usePlatforms() {
  const apiClient = new APIClient<Platforms>("/platforms/lists/parents");

  const { data, isLoading, error } = useQuery<
    FetchApiResponse<Platforms>,
    Error
  >({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

  return { data, isLoading, error };
}
