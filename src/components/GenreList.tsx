import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGeneres";
import getCroppedImagrUrl from "../services/imageUrl";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export default function GenreList({ onSelectGenre }: Props) {
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
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
