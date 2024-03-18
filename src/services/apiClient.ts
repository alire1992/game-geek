import axios, { AxiosRequestConfig } from "axios";

export interface FetchApiResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "220c57e563454626850a544ee6755117",
  },
});

export default class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return apiClient
      .get<FetchApiResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };
}
