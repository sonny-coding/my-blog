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

const BlogPreviewCard = ({
  banner,
  title,
  description,
  slug,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) => {
  const obj = {
    isExternal: true,
  };
  const link = `/blog/${slug}`;
  return (
    <>
      <VStack as={LinkBox} align={"start"} spacing="1rem" mb="2rem">
        <Box>
          <Image
            src={banner}
            fill
            style={{ objectFit: "contain" }}
            alt={altText}
          />
        </Box>
        <Heading>{title}</Heading>
        {/* <LinkOverlay href="#"></LinkOverlay> */}
        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <ChakraNextLink
            href={link}
            overlay
            chakraLinkProps={
              {
                // isExternal: true,
              }
            }
          ></ChakraNextLink>
          <Text>{createdAt}</Text>
          <Text>{totalViews} views</Text>
          <Text>{readingTime}</Text>
        </HStack>
        <Text noOfLines={3}>{description}</Text>
        {/* <Button textTransform={"uppecase"}>Read more</Button> */}
        <ChakraButtonLink textTransform="uppercase" href={link}>
          Read more
        </ChakraButtonLink>
      </VStack>
    </>
  );
};

export default BlogPreviewCard;
