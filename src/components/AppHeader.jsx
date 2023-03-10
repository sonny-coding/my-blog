import React from "react";
import { Flex, Spacer, Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import AppDrawer from "./AppDrawer";
import ChakraNextLink from "./ChakraLink";

const CustomIconButton = ({ Icon, ...props }) => {
  return <IconButton icon={<Icon />} {...props} size="lg" ml="1rem" />;
};

const HamburgerNav = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <CustomIconButton Icon={HamburgerIcon} onClick={onOpen} />
      {isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

const Logo = () => {
  const dimension = 70;
  return (
    <ChakraNextLink href="/">
      <Image
        src="/profile.jpg"
        height={dimension}
        width={dimension}
        alt="my profile picture"
      />
    </ChakraNextLink>
  );
};

function AppHeader() {
  return (
    <Box px="2rem" pt="5rem">
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <CustomIconButton Icon={SearchIcon} />
        <HamburgerNav />
      </Flex>
    </Box>
  );
}

export default AppHeader;
