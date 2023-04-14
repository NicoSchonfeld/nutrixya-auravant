import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Stack spacing={5} h="full" alignItems="center" justifyContent="center">
      <Heading>Oooooops!</Heading>
      <Text>Page: {error.statusText || error.message}</Text>
      <Button colorScheme="primary" as={Link} to="/">
        Go Back
      </Button>
    </Stack>
  );
};

export default ErrorPage;
