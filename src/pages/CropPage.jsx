import { useEffect, useState } from "react";
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
        name="page2"
      >
        <Container
          maxW="container.sm"
          paddingTop="20"
          w="full"
          h="full"
          pos="relative"
          display="flex"
          flexDirection="column"
          gap={10}
        >
          <Heading fontSize="30">Añadir Cultivo</Heading>

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

          <FormControl display="flex" flexDirection="column" gap={10}>
            <Stack spacing={0}>
              <FormLabel>Cultivo a fertilizar</FormLabel>
              <Select placeholder="Seleccionar un Cultivo">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Fecha de siembra</FormLabel>
              <Input type="date" placeholder="Seleccionar una fecha" />
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Rendimiento objetivo (qq/ha)</FormLabel>
              <Input placeholder="Añadir un rendimiento objetivo" />
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Precio del producto U$S/tn</FormLabel>
              <Input placeholder="Añadir un precio del producto" />
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Cultivo antecesor</FormLabel>
              <Select placeholder="Seleccionar un Cultivo">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Tiempo transcurrido entre cosecha y siembra</FormLabel>
              <Select placeholder="Seleccionar un tiempo entre cosecha y siembra">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Rendimiento del cultivo antecesor (Kg/ha)</FormLabel>
              <Input placeholder="Añadir un Rendimiento del cultivo" />
            </Stack>

            <Stack spacing={0}>
              <FormLabel>
                Costo de aplicación del fertilizante y del análisis de suelo
                (u$s/ha)
              </FormLabel>
              <Input placeholder="Añadir un Rendimiento del cultivo" />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <FormLabel htmlFor="renderiza-siembra-directa" mb="0">
                Realiza siembra directa
              </FormLabel>
              <Switch
                id="renderiza-siembra-directa"
                /* isChecked={true} */
                colorScheme="primary"
              />
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
          </FormControl>
        </Container>
      </Stack>
    </>
  );
};

export default CropPage;
