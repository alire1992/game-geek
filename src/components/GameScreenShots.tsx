import { Image, SimpleGrid } from "@chakra-ui/react";
import { useScreenshots } from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

export default function GameScreenShots({ gameId }: Props) {
  const { screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        xl: 3,
      }}
      spacing={2}
    >
      {screenshots?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
}
