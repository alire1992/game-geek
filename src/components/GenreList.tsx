import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedImagrUrl from "../services/imageUrl";
import { useGameQueryStore } from "../store";
import GenreItemSkeleton from "./GenreItemSkeleton";

export default function GenreList() {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const skletons = Array.from(new Array(10), (_, i) => i);

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skletons.map((skleton) => (
            <ListItem key={skleton} paddingY="5px">
              <GenreItemSkeleton />
            </ListItem>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImagrUrl(genre.image_background)}
                borderRadius={8}
                objectFit="cover"
                boxSize="32px"
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
