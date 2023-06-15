import React from "react";

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
  Tooltip,
  Container,
  useStatStyles,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

import Navbar from "../components/Navbar";

import campoIcon from "../assets/icons/campoIcon.svg";
import cultivoIcon from "../assets/icons/cultivoIcon.svg";
import fechaIcon from "../assets/icons/fechaIcon.svg";
import eliminarIcon from "../assets/icons/eliminarIcon.svg";
import compartirIcon from "../assets/icons/compartirIcon.svg";

import axios from "axios";

const dataExample = [
  {
    nombre: "lote 1",
    id: 1,
    campo: "Campo de Pepe",
    cultivo: "Maíz Grano",
    fecha: "05/07/2023",
  },
  {
    nombre: "lote 2",
    id: 2,
    campo: "Campo de Pepe",
    cultivo: "Maíz Grano",
    fecha: "05/07/2023",
  },
  {
    nombre: "lote 3",
    id: 3,
    campo: "Campo de Pepe",
    cultivo: "Maíz Grano",
    fecha: "05/07/2023",
  },
  {
    nombre: "lote 4",
    id: 4,
    campo: "Campo de Pepe",
    cultivo: "Maíz Grano",
    fecha: "05/07/2023",
  },
  {
    nombre: "lote 5",
    id: 5,
    campo: "Campo de Pepe",
    cultivo: "Maíz Grano",
    fecha: "05/07/2023",
  },
];

const HomePage = () => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmMiOiJ3IiwidWlkIjoiVUlELWM0MjhmMzQ4MTY3MDQ3MGM0ZmVhN2IxZDdlZTQ0ZGQ5IiwibG9jYWxlIjoiZXNfQVIiLCJkZXYiOjIwNCwiZXhwIjoxNjg4ODQ3NzY0LCJ2IjoxNjI1LCJpYXQiOjE2ODYyNTU3NjR9.7e2urCvutlyQ061F2skj19F7xu76Vm85bYNXSZQXgCk`;

  const URL_API = `https://api.auravant.com/api`;

  const authAxios = axios.create({
    baseURL: URL_API,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await authAxios.get(`/getfields`).then((res) => {
      console.log(
        Object.values(Object.values(res?.data?.user?.farms)[0]?.fields)[0]
      );
    });
  };

  return (
    <>
      <Navbar />

      <Stack
        bgColor="white"
        h={dataExample > 15 ? "auto" : "full"}
        alignItems="center"
        justifyContent="flex-start"
        py={10}
        px={5}
      >
        <Container
          maxW="container.sm"
          paddingTop="20"
          w="full"
          h="full "
          display="flex"
          flexDirection="column"
          gap={10}
        >
          <Heading fontSize="30">Mis Recomendaciones</Heading>

          <Stack
            pos="fixed"
            bottom="10"
            left="0"
            alignItems="center"
            justifyContent="center"
            w="full"
            zIndex={2}
          >
            <Button as={ReactLink} to="/suelo" colorScheme="primary" w="80%">
              Añadir Recomendaciones
            </Button>
          </Stack>

          <Accordion allowMultiple>
            {dataExample?.map((dato) => (
              <>
                <AccordionItem
                  key={dato.id}
                  bgColor="white"
                  borderRadius="md"
                  mb="3"
                  mt="3"
                >
                  <AccordionButton>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      w="full"
                    >
                      <Stack direction="row">
                        <Text fontWeight="bolder" color="primary.500">
                          Nombre:
                        </Text>{" "}
                        <Text>{dato.nombre}</Text>
                      </Stack>

                      <AccordionIcon />
                    </Stack>
                  </AccordionButton>

                  <AccordionPanel py={6}>
                    <Stack spacing={5} px={2}>
                      <Stack
                        direction="row"
                        alignItems="start"
                        justifyContent="space-between"
                      >
                        <Stack alignItems="flex-start">
                          <Stack direction="row" alignItems="center">
                            <Image src={campoIcon} w={25} h={25} />
                            <Stack spacing={0}>
                              <Text
                                fontSize={10}
                                fontWeight="bolder"
                                color="primary.500"
                              >
                                Campo
                              </Text>
                              <Text fontSize={16} lineHeight={4}>
                                {dato.campo}
                              </Text>
                            </Stack>
                          </Stack>

                          <Stack direction="row" alignItems="center">
                            <Image src={cultivoIcon} w={25} h={25} />
                            <Stack spacing={0}>
                              <Text
                                fontSize={10}
                                fontWeight="bolder"
                                color="primary.500"
                              >
                                Cultivo
                              </Text>
                              <Text fontSize={16} lineHeight={4}>
                                {dato.cultivo}
                              </Text>
                            </Stack>
                          </Stack>

                          <Stack direction="row" alignItems="center">
                            <Image src={fechaIcon} w={25} h={25} />
                            <Stack spacing={0}>
                              <Text
                                fontSize={10}
                                fontWeight="bolder"
                                color="primary.500"
                              >
                                Fecha
                              </Text>
                              <Text fontSize={16} lineHeight={4}>
                                {dato.fecha}
                              </Text>
                            </Stack>
                          </Stack>
                        </Stack>

                        <Stack direction="row" alignItems="center">
                          <Tooltip label="Eliminar">
                            <Stack
                              bgColor="red.500"
                              cursor="pointer"
                              _hover={{ bgColor: "red.600" }}
                              w={9}
                              h={9}
                              p={2}
                              alignItems="center"
                              justifyContent="center"
                              borderRadius="full"
                            >
                              <Image src={eliminarIcon} w={18} h={18} />
                            </Stack>
                          </Tooltip>

                          <Tooltip label="Compartir">
                            <Stack
                              bgColor="primary.500"
                              _hover={{ bgColor: "primary.600" }}
                              cursor="pointer"
                              w={9}
                              h={9}
                              p={2}
                              alignItems="center"
                              justifyContent="center"
                              borderRadius="full"
                            >
                              <Image src={compartirIcon} w={18} h={18} />
                            </Stack>
                          </Tooltip>
                        </Stack>
                      </Stack>

                      <ButtonGroup
                        w="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        pt={5}
                      >
                        <Button colorScheme="primary" variant="outline">
                          Ver Reco
                        </Button>
                        <Button colorScheme="primary">Editar Reco</Button>
                      </ButtonGroup>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </Container>
      </Stack>
    </>
  );
};

export default HomePage;
