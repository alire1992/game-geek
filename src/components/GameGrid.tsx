import { Text, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </SimpleGrid>
    </>
  );
}
