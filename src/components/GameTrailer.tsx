import { useTrailer } from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
  const { trailer, isLoading, error } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = trailer?.results[0];

  return first ? (
    <video src={first?.data[480]} poster={first?.previwe} controls></video>
  ) : null;
}
