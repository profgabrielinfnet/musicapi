import { Flex, Heading, Input } from "native-base";
import { Alert } from "react-native";
import { useContext } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";

export default function Login() {
  const userData = useContext(UserContext);
  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center">
      <Heading>Tela de login</Heading>
      <Input mt={2} />
      <Input mt={2} />
      <Flex width="100%">
        <Button
          content="Sign in"
          handleClick={() =>
            userData.setUser({
              name: "Gabriel",
              email: "gabrielgs1408@gmail.com",
            })
          }
        />
      </Flex>
    </Flex>
  );
}
