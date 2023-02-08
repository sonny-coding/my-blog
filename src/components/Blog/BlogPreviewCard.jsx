import React, { Fragment } from "react";
import Image from "next/image";
import { nanoid } from "nanoid";
import ChakraNextLink, { ChakraButtonLink } from "../ChakraLink";
import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
  Button,
} from "@chakra-ui/react";

const BlogPreviewCard = () => {
  const obj = {
    isExternal: true,
  };
  return (
    <>
      <VStack as={LinkBox} align={"start"} spacing="1rem" mb="2rem">
        <Box>
          <Image
            src="/sleepingcat.jpg"
            width={16}
            height={9}
            // fill="responsive"
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </Box>
        <Heading>
          Veniam minim deserunt officia nostrud consequat proident ad sit sit
          est ex velit.
        </Heading>
        {/* <LinkOverlay href="#"></LinkOverlay> */}
        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <ChakraNextLink
            href="#"
            overlay
            chakraLinkProps={{
              isExternal: true,
            }}
          ></ChakraNextLink>
          <Text>Jan 20 1994</Text>
          <Text>100 views</Text>
          <Text>4 mins read</Text>
        </HStack>
        <Text noOfLines={3}>
          Exercitation ea tempor officia et eiusmod fugiat do culpa elit duis
          adipisicing ea ad. Nostrud ad excepteur do et. Mollit exercitation
          nostrud do quis sit ex eu aute proident ea et commodo. Reprehenderit
          eiusmod incididunt proident ut sit mollit duis deserunt eiusmod
          laborum.
        </Text>
        {/* <Button textTransform={"uppecase"}>Read more</Button> */}
        <ChakraButtonLink textTransform="uppercase" href="/blog">
          Read more
        </ChakraButtonLink>
      </VStack>
    </>
  );
};

export default BlogPreviewCard;
