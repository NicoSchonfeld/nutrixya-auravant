import React from "react";
import LogoNutrixya from "./LogoNutrixya";
import {
  Stack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Stack
      bgColor="white"
      w="full"
      py={2}
      alignItems="center"
      justifyContent="space-around"
      shadow="md"
      pos="fixed"
      top="0"
      left="0"
      direction="row"
    >
      <Text> </Text>
      <LogoNutrixya />

      <Text ref={btnRef} onClick={onOpen}>
        Menu
      </Text>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Text>Esto es un menu</Text>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}
