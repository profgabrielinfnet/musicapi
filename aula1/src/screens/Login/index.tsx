import { Button, Flex, Heading, Input } from "native-base";

export default function Login() {
    return (
        <Flex p={5} flex={1} justifyContent='center' alignItems='center'>
            <Heading>Tela de login</Heading>
            <Input mt={2} />
            <Input mt={2}/>
            <Flex width='100%'>
                <Button bg='secondary.900' mt={3}>Sign in</Button>
            </Flex>
        </Flex>
    )
}