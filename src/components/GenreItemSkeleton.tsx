import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function GenreItemSkeleton() {
  return (
    <HStack>
      <SkeletonCircle height="32px" />
      <SkeletonText noOfLines={1} minW="60px" />
    </HStack>
  );
}
