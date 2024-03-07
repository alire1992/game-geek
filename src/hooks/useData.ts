import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchApiResponse<T> {
  count: number;
  results: T[];
}

export function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);

      apiClient
        .get<FetchApiResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          if (err instanceof CanceledError) return;
          setError(err.message);
        });

      () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}
