import { Flex, Heading } from "native-base";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/user";
import { FlatList, Alert } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
export default function Home() {
  const userData = useContext(UserContext);
  const [selectedAlbum, setSelectedAlbum] = useState("");

  const DATA = [
    {
      id: "1",
      album: "Angra",
      img: "https://m.media-amazon.com/images/I/51Yee8dkecL._UF1000,1000_QL80_.jpg",
    },
    {
      id: "2",
      album: "Legiao",
      img: "https://www.vagalume.com.br/legiao-urbana/discografia/legiao-urbana.jpg",
    },
    {
      id: "3",
      album: "Iron maden",
      img: "https://pbs.twimg.com/media/F9c7D_vX0AAkl7C?format=jpg&name=large",
    },
    {
      id: "4",
      album: "Guns",
      img: "https://www12.senado.leg.br/radio/1/capitulo-rock/2020/01/31/guns-n2019-roses/guns_n_roses.jpg/@@images/24c8f793-0823-4756-b0e7-3c1f1b71fb1e.jpeg",
    },
  ];

  useEffect(() => {
    if (selectedAlbum == "Iron maden") {
      Alert.alert("Parabéns!", "Voce selecionou um ótimo album!");
    }
  }, [selectedAlbum]);

  useEffect(() => {
    console.log("chamou o useEffect com array vazio");
  }, []);

  return (
    <Flex
      flex={1}
      p={5}
      justifyContent="center"
      alignItems="center"
      bg="primary.100"
    >
      <Heading color="secondary.100" fontSize="4xl">
        Helcome back {userData.user.name}
      </Heading>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            img={item.img}
            album={item.album}
            setSelectedAlbum={setSelectedAlbum}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Selected text={selectedAlbum} />
    </Flex>
  );
}
