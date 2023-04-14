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
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import campoIcon from "../assets/icons/campoIcon.svg";
import cultivoIcon from "../assets/icons/cultivoIcon.svg";
import fechaIcon from "../assets/icons/fechaIcon.svg";
import eliminarIcon from "../assets/icons/eliminarIcon.svg";
import compartirIcon from "../assets/icons/compartirIcon.svg";

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
  return (
    <>
      <Navbar />

      <Stack
        bgColor="white"
        h={dataExample > 15 ? "auto" : "full"}
        alignItems="center"
        justifyContent="flex-start"
        padding={10}
      >
        <Stack paddingTop="20" w="full" h="full" pos="relative">
          <Heading fontSize="20">Mis Recomendaciones</Heading>

          <Button
            colorScheme="primary"
            pos="absolute"
            bottom="0"
            left="0"
            w="full"
          >
            Añadir Recomendaciones
          </Button>

          <Accordion allowMultiple>
            {/* defaultIndex={[0]} */}

            {dataExample?.map((dato) => (
              <>
                <AccordionItem
                  key={dato.id}
                  bgColor="white"
                  borderRadius="md"
                  mb="3"
                  mt="3"
                  /* shadow="md" */
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
        </Stack>
      </Stack>
    </>
  );
};

export default HomePage;
