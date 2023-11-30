import { Button as NativeButton } from "native-base";

interface Props {
  content: string;
  variation?: string;
  handleClick: () => void;
}

export default function Button({
  content,
  variation = "primary",
  handleClick,
}: Props) {
  return (
    <NativeButton bg={`${variation}.100`} mt={3} onPress={handleClick}>
      {content}
    </NativeButton>
  );
}
