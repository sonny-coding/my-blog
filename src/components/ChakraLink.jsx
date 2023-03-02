import React from "react";
import Link from "next/link";
import {
  Link as ChakraLink,
  Text,
  Button,
  Box,
  LinkOverlay,
  useColorMode,
} from "@chakra-ui/react";

const ChakraNextLink = ({
  href,
  ChakraComponent = Box,
  children,
  chakraLinkProps = {},
  noUnderline,
  overlay,
  color,
  ...props
}) => {
  const LinkComponent = overlay ? LinkOverlay : ChakraLink;
  if (noUnderline) {
    chakraLinkProps._hover = chakraLinkProps._hover || {};
    chakraLinkProps._hover.textDecoration = "none";
  }
  return (
    <LinkComponent as={Link} href={href} {...chakraLinkProps}>
      <ChakraComponent {...props}>{children}</ChakraComponent>
    </LinkComponent>
  );
};

const ChakraButtonLink = (props) => (
  <ChakraNextLink ChakraComponent={Button} noUnderline {...props} />
);
const ChakraTextLink = (props) => {
  const { colorMode } = useColorMode();
  return (
    <ChakraLink
      ChakraComponent={Text}
      {...props}
      color={`teal.${colorMode === "light" ? 500 : 200}`}
    />
  );
};

export { ChakraButtonLink, ChakraTextLink };
export default ChakraNextLink;
