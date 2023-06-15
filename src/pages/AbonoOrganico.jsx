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

const AbonoOrganico = () => {
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
          <Heading fontSize="30">Abono Orgánico</Heading>

          <Stack
            w="full"
            h="full"
            alignItems="center"
            justifyContent="flex-start"
            spacing={10}
          >
            <Stack spacing={0} w="full">
              <FormLabel>Abono Orgánico</FormLabel>
              <Select placeholder="Seleccionar un Arrancador">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </Stack>

            <Stack spacing={0} w="full">
              <FormLabel>Cantidad (Kg/ha)</FormLabel>
              <Input type="number" />
            </Stack>

            <Stack spacing={0} w="full">
              <FormLabel>Precio (USD/tn)</FormLabel>
              <Input type="number" />
            </Stack>

            <Stack
              w="full"
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Button
                as={ReactLink}
                to="/fertilizantes"
                colorScheme="red"
                variant="outline"
              >
                Cancelar
              </Button>

              <Button as={ReactLink} to="/rendimiento" colorScheme="primary">
                Guardar
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default AbonoOrganico;
