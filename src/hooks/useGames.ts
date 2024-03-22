import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import { FetchApiResponse } from "../services/apiClient";
import APIClient from "../services/apiClient";
import { useGameQueryStore } from "../store";
import Game from "../entities/Game";

export function useGames() {
  const apiClient = new APIClient<Game>("/games");
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const {
    data,
    isFetching,
    isFetchingNextPage,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<FetchApiResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });

  return {
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    error,
    hasNextPage,
  };
}
