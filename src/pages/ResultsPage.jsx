import React from "react";
import Navbar from "../components/Navbar";
import {
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Accordion,
  AccordionItem,
  Switch,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Box,
  Tooltip,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Select,
  Container,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

const ResultsPage = () => {
  return (
    <>
      <Navbar />

      <Stack
        bgColor="white"
        h="full"
        alignItems="center"
        justifyContent="flex-start"
        padding={10}
      >
        <Container
          maxW="container.sm"
          paddingTop="20"
          w="full"
          h="full"
          pos="relative"
          display="flex"
          gap={10}
          flexDirection="column"
        >
          <Heading fontSize="30">Resultados</Heading>

          <Stack>
            <Text fontWeight="bold" fontSize={20} color="primary.500">
              Rendimiento objetivo: 9000 kg/ha
            </Text>
            <Text fontWeight="bold" fontSize={20} color="primary.500">
              Rendimiento sin fertilizar: 3630 kg/ha
            </Text>
          </Stack>

          <Stack direction="row" alignItems="center" fontSize={20}>
            <Text fontWeight="bold">Recomendación nutricional:</Text>
            <Text>Nombre lote</Text>
          </Stack>

          <Stack>
            <Stack direction="row" alignItems="center">
              <Text fontWeight="bold" fontSize={30} color="primary.500">
                N
              </Text>
              <Text fontSize={20}>Urea: </Text>
              <Text fontSize={20} fontWeight="bold">
                365 kg/ha
              </Text>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Text fontWeight="bold" fontSize={30} color="primary.500">
                P
              </Text>
              <Text fontSize={20}>Superfosfato triple Calcio: </Text>
              <Text fontSize={20} fontWeight="bold">
                145 kg/ha
              </Text>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Text fontWeight="bold" fontSize={30} color="primary.500">
                K
              </Text>
              <Text fontSize={20}>Cloruro de Potasio: </Text>
              <Text fontSize={20} fontWeight="bold">
                0 kg/ha
              </Text>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Text fontWeight="bold" fontSize={30} color="primary.500">
                S
              </Text>
              <Text fontSize={20}>Yeso: </Text>
              <Text fontSize={20} fontWeight="bold">
                0 kg/ha
              </Text>
            </Stack>

            <Box py={20}>
              <Button
                as={ReactLink}
                to="/editables"
                colorScheme="primary"
                w="full"
              >
                Editables
              </Button>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default ResultsPage;
