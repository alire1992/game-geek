import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";

import Game from "../entities/Game";

export function useGame(slug: string) {
  const apiClient = new APIClient<Game>(`/games`);

  const {
    data: game,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("12h"),
  });

  return { game, isLoading, error };
}
