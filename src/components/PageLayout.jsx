import React from "react";
import { Container, Center, Text } from "@chakra-ui/react";
import AppHeader from "./AppHeader";
import ToggleColorModeButton from "./ToggleColorModeButton";

const PageLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Container px={4} maxW="5xl">
        {children}
      </Container>
      <Center m="2rem 0">
        <Text>Copyright My Blog 2023</Text>
      </Center>
      <ToggleColorModeButton />
    </>
  );
};

export default PageLayout;
