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

const Fertilizer = () => {
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
          <Heading fontSize="30">Fertilizantes</Heading>

          <Stack
            w="full"
            h="full"
            alignItems="center"
            justifyContent="flex-start"
            spacing={10}
          >
            <Button
              as={ReactLink}
              to={"/arrancadores"}
              colorScheme="primary"
              w="full"
            >
              Arrancadores
            </Button>

            <Button
              as={ReactLink}
              to={"/abono-organico"}
              colorScheme="primary"
              w="full"
            >
              Abonos Orgánicos
            </Button>

            <Button
              as={ReactLink}
              to={"/fertilizante"}
              colorScheme="primary"
              w="full"
            >
              Fertilizantes
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Fertilizer;
