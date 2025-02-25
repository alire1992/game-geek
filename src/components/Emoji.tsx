import thumbUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exeptional", boxSize: "35px" },
};

export default function Emoji({ rating }: Props) {
  if (rating < 3) return;

  return <Image {...emojiMap[rating]} marginTop={1} />;
}
