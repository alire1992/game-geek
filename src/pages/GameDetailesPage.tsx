import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";

import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

export default function GameDetailesPage() {
  const { slug } = useParams();
  const { game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
    </>
  );
}
