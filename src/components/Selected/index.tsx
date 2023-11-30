import { Text } from "native-base";

interface Props {
  text: string;
}

export default function Selected({ text }: Props) {
  return <Text color="secondary.100">{text}</Text>;
}
