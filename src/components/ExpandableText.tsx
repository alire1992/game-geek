import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  limit: number;
}

export default function ExpandableText({ limit, children }: Props) {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const text = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {text}
      <Button
        size="xs"
        colorScheme={expanded ? "yellow" : "green"}
        fontWeight="bold"
        marginX={1}
        onClick={() => setExpanded((s) => !s)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
}
