import React from "react";
import { nanoid } from "nanoid";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import ChakraNextLink from "./ChakraLink";

const DrawerList = ({ onClose }) => {
  const listItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Categories",
      link: "/categories",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      {listItems.map((item) => (
        <ChakraNextLink
          key={nanoid()}
          href={item.link}
          sx={{ display: "block", mt: 5, fontSize: "lg" }}
          chakraLinkProps={{
            _focus: {
              outline: 0,
            },
          }}
          onClick={onClose}
        >
          {item.name}
        </ChakraNextLink>
      ))}
    </>
  );
};

const AppDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer size="md" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader py={8}>
            <Heading>My Blog</Heading>
          </DrawerHeader>
          <DrawerBody>
            <DrawerList onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppDrawer;
