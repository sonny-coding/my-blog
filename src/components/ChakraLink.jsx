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

export { ChakraButtonLink };
export default ChakraNextLink;
