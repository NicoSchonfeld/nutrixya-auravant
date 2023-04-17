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

const EditsResults = () => {
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
          gap={40}
          flexDirection="column"
        >
          <Heading fontSize="30">Editables</Heading>

          <Stack
            w="full"
            h="full"
            alignItems="center"
            justifyContent="flex-start"
            spacing={10}
          >
            <Button colorScheme="primary" w="full">
              Fertilizantes
            </Button>

            <Stack spacing={0} w="full">
              <FormLabel>Disponibilidad de agua</FormLabel>
              <Select placeholder="Seleccionar una disponibilidad de agua">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </Stack>

            <Stack spacing={0} w="full">
              <FormLabel>Fecha de siembra</FormLabel>
              <Input type="date" />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default EditsResults;
