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

const SoilPage = () => {
  /* Validacion de input */
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  /* input analisisDeSuelo */
  const [anialisisDeSuelo, setAnalisisDeSuelo] = useState([]);

  const handleChangeAnalisis = (e) => {
    const { value, selectedIndex, childNodes } = e.target;

    let index = selectedIndex;
    let optionElement = childNodes[index];
    let option = optionElement.getAttribute("name");

    setAnalisisDeSuelo((anialisisDeSuelo) =>
      anialisisDeSuelo.concat({
        id: Number(value),
        name: option,
        selectId: +new Date(),
        disabled: true,
      })
    );
  };

  const handleDeleteOptionAnalisis = (selectId) => {
    setAnalisisDeSuelo(
      anialisisDeSuelo.filter((df) => df.selectId !== selectId)
    );
  };

  const [disabledState, setDisabledState] = useState(false);

  useEffect(() => {
    const isDisabled = anialisisDeSuelo?.find((af) => af);

    setDisabledState(isDisabled?.disabled);
  }, [anialisisDeSuelo]);

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
          <Heading fontSize="20">Añadir Suelo</Heading>

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

            <Box bgColor="gray.300" w={10} h={1}></Box>

            <Tooltip label="Paso 2">
              <Stack
                bgColor="gray.300"
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

          <FormControl display="flex" flexDirection="column" gap={7}>
            <Stack spacing={0}>
              <FormLabel>Nivel de compactación</FormLabel>
              <Select placeholder="Seleccionar un nivel">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Limitación por anegamiento</FormLabel>
              <Select placeholder="Seleccionar una limitación">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Profundidar enraizable (cm)</FormLabel>
              <Input type="text" />
            </Stack>

            <Text fontWeight="bold">Estrato 1</Text>

            <Stack spacing={0}>
              <FormLabel>Análisis de suelo</FormLabel>
              <Stack>
                <Select
                  placeholder="Seleccionar sus análisis"
                  onChange={handleChangeAnalisis}
                >
                  <option value={1} name="Option 1">
                    Option 1
                  </option>
                  <option value={2} name="Option 2">
                    Option 2
                  </option>
                  <option value={3} name="Option 3">
                    Option 3
                  </option>
                  <option value={4} name="Option 4">
                    Option 4
                  </option>
                  <option value={5} name="Option 5">
                    Option 5
                  </option>
                </Select>
                <Stack
                  gap={2}
                  flexWrap="wrap"
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  {anialisisDeSuelo?.map((dato) => (
                    <Stack
                      bgColor="primary.500"
                      color="white"
                      direction="row"
                      w="auto"
                      px={3}
                      py={2}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      _hover={{ bgColor: "primary.600" }}
                    >
                      <Text
                        key={dato.selectId}
                        display="flex"
                        flexDirection="row"
                        spacing={2}
                      >
                        {dato.name}
                      </Text>
                      <Tooltip label="Eliminar">
                        <Image
                          src={cerrarIcon}
                          w={18}
                          h={18}
                          cursor="pointer"
                          onClick={() =>
                            handleDeleteOptionAnalisis(dato.selectId)
                          }
                        />
                      </Tooltip>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Densidad de suelo</FormLabel>
              <Input type="text" />
            </Stack>

            <Stack spacing={0}>
              <FormLabel>S-SO4</FormLabel>
              <Input type="text" />
            </Stack>

            <Stack spacing={0}>
              <FormLabel>CIC</FormLabel>
              <Input type="text" />
            </Stack>

            <Stack spacing={0}>
              <FormLabel>Nai</FormLabel>
              <Input type="text" />
            </Stack>

            <ButtonGroup
              w="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={20}
              mt={10}
            >
              <Button as={ReactLink} to="/" variant="outline" colorScheme="red">
                Volver
              </Button>
              <Button as={ReactLink} to="/cultivo" colorScheme="primary">
                Siguiente
              </Button>
            </ButtonGroup>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
};

export default SoilPage;
