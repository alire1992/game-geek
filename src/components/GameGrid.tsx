import React from "react";
import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { useGames } from "../hooks/useGames";

export default function GameGrid() {
  const { data, error, isFetching, hasNextPage, fetchNextPage } = useGames();
  const skeletons = Array.from(new Array(10), (_, i) => i + 1);

  if (error) return <Text>{error.message}</Text>;
  const totalFetchedGame =
    data?.pages.reduce((acc, page) => (acc += page.results.length), 0) || 0;

  return (
    <InfiniteScroll
      dataLength={totalFetchedGame}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      next={() => fetchNextPage()}
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding="10px"
        spacing={6}
      >
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {isFetching &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}
