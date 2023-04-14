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
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

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
        bgColor="gray.100"
        h={dataExample > 15 ? "auto" : "full"}
        alignItems="center"
        justifyContent="flex-start"
        padding={10}
      >
        <Stack paddingTop="20" w="full" h="full">
          <Heading fontSize="20">Mis Lotes</Heading>

          <Accordion allowMultiple>
            {/* defaultIndex={[0]} */}

            {dataExample?.map((dato) => (
              <>
                <AccordionItem
                  key={dato.id}
                  bgColor="white"
                  borderRadius="md"
                  mb="3"
                  shadow="md"
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
                          Nobre:
                        </Text>{" "}
                        <Text>{dato.nombre}</Text>
                      </Stack>

                      <AccordionIcon />
                    </Stack>
                  </AccordionButton>

                  <AccordionPanel py={6}>
                    <Stack spacing={5} px={2}>
                      <Stack direction="row" alignItems="center">
                        <Text>Icon</Text>
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
                        <Text>Icon</Text>
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
                        <Text>Icon</Text>
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
