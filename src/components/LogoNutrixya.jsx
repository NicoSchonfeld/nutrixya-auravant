import { Image, Stack, Text } from "@chakra-ui/react";
import logoNutrixyaSVG from "../assets/icons/logoNutrixya.svg";

export default function LogoNutrixya() {
  return (
    <>
      <Stack direction="row" alignItems="center" p={2}>
        <Image src={logoNutrixyaSVG} width={8} height={8} />
        <Text fontFamily="Nixie One" fontWeight="700" fontSize={20}>
          Nutrixya
        </Text>
      </Stack>
    </>
  );
}
