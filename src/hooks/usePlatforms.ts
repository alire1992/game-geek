import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import apiClient, { FetchApiResponse } from "../services/apiClient";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export function usePlatforms() {
  const { data, isLoading, error } = useQuery<
    FetchApiResponse<Platforms>,
    Error
  >({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient<FetchApiResponse<Platforms>>("/platforms/lists/parents").then(
        (res) => res.data
      ),
    staleTime: ms("24h"),
  });

  return { data, isLoading, error };
}
