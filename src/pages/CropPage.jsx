import { useEffect, useState } from "react";
import {
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Accordion,
  AccordionItem,
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
} from "@chakra-ui/react";

import cerrarIcon from "../assets/icons/cerrar.svg";

import { Link as ReactLink } from "react-router-dom";

import Navbar from "../components/Navbar";

const CropPage = () => {
  /* Validacion de input */
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

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
        <Stack paddingTop="20" w="full" h="full" pos="relative" spacing={10}>
          <Heading fontSize="20">Añadir Cultivo</Heading>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={0}
          >
            <Tooltip label="Paso 1">
              <Stack
                bgColor="primary.500"
                w={8}
                h={8}
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" font>
                  1
                </Text>
              </Stack>
            </Tooltip>

            <Box maxW={10} overflow="hidden">
              <Box bgColor="primary.500" w={10} h={1}></Box>
            </Box>

            <Tooltip label="Paso 2">
              <Stack
                bgColor="primary.500"
                w={8}
                h={8}
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" font>
                  2
                </Text>
              </Stack>
            </Tooltip>
          </Stack>

          <ButtonGroup
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={20}
            mt={10}
          >
            <Button
              as={ReactLink}
              to="/suelo"
              variant="outline"
              colorScheme="red"
            >
              Volver
            </Button>
            <Button as={ReactLink} to="/rendimiento" colorScheme="primary">
              Guardar
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default CropPage;
