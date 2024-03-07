import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color;
  if (score > 80) color = "green";
  else if (score > 65) color = "yellow";
  else color = "red";

  return (
    <Badge colorScheme={color} borderRadius="5px" fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
}
