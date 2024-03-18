import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { GameQuery } from "../App";
import { FetchApiResponse } from "../services/apiClient";
import APIClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export function useGames(gameQuery: GameQuery) {
  const apiClient = new APIClient<Game>("/games");

  const { data, isLoading, error } = useQuery<FetchApiResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: ms("24h"),
  });

  return { data, isLoading, error };
}
