import { Button, Code, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Stack spacing={5} h="full" alignItems="center" justifyContent="center">
      <Heading>Oooooops!</Heading>
      <Stack alignItems="center" justifyContent="center">
        <Text color="red.500">Error code:</Text>{" "}
        <Code>{error.statusText || error.message}</Code>
        <Text>Reportar error a soporte.</Text>
      </Stack>
      <Button colorScheme="primary" as={Link} to="/">
        Volver
      </Button>
    </Stack>
  );
};

export default ErrorPage;
