import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchApiResponse {
  id: number;
  result: Game[];
}
export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchApiResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.result))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    () => controller.abort();
  }, []);

  return { games, error };
}
