import { useGenres } from "../hooks/useGeneres";

export default function GenreList() {
  const { genres, isLoading, error } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
