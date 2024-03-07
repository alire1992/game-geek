import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGeneres";
import getCroppedImagrUrl from "../services/imageUrl";
import GenreItemSkeleton from "./GenreItemSkeleton";

export default function GenreList() {
  const { data: genres, isLoading, error } = useGenres();

  const skletons = Array.from(new Array(10), (_, i) => i);

  if (error.length) return null;

  return (
    <List>
      {isLoading &&
        skletons.map((skleton) => (
          <ListItem key={skleton} paddingY="5px">
            <GenreItemSkeleton />
          </ListItem>
        ))}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImagrUrl(genre.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
