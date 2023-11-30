import { Container, Image } from "native-base";
import { TouchableOpacity } from "react-native";

interface Props {
  album: string;
  img: string;
  setSelectedAlbum: (album: string) => void;
}

export default function Card({ img, album, setSelectedAlbum }: Props) {
  return (
    <TouchableOpacity onPress={() => setSelectedAlbum(album)}>
      <Image
        m={2}
        source={{
          uri: img,
        }}
        alt="Alternate Text"
        size="xl"
      />
    </TouchableOpacity>
  );
}
