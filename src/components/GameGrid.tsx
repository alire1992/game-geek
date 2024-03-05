import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchApiResponse {
  id: number;
  result: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchApiResponse>("/games")
      .then((response) => setGames(response.data.result))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
