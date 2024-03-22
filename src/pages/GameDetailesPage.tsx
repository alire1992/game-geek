import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";

import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

export default function GameDetailesPage() {
  const { slug } = useParams();
  const { game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
}
