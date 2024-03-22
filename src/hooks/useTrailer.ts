import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import APIClient from "../services/apiClient";

import Trailer from "../entities/Trailer";

export function useTrailer(gameId: number) {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  const {
    data: trailer,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("12h"),
  });

  return { trailer, isLoading, error };
}
