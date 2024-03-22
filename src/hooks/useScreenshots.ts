import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import APIClient from "../services/apiClient";
import Screenshot from "../entities/Screenshot";

export function useScreenshots(gameId: number) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  const {
    data: screenshots,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("12h"),
  });

  return { screenshots, isLoading, error };
}
