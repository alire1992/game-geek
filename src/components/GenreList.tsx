import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGeneres";
import getCroppedImagrUrl from "../services/imageUrl";

export default function GenreList() {
  const { data: genres } = useGenres();

  return (
    <List>
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
