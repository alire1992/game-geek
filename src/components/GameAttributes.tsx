import { SimpleGrid, Text } from "@chakra-ui/react";

import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

import Game from "../entities/Game";

interface Props {
  game: Game;
}

export default function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefinitionItem term="Platform(s)">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genre(s)">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publisher(s)">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}
