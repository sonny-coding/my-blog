import React from "react";
import Image from "next/image";
import { Box, HStack, VStack, Text, Heading, LinkBox } from "@chakra-ui/react";

const BlogHead = ({
  banner,
  title,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) => {
  return (
    <>
      <VStack as={LinkBox} spacing="1rem" align="center" m="2rem 0">
        <Box>{title}</Box>
        <Box>{readingTime}</Box>
        <Box w="100%">
          <Image
            src={banner}
            alt={altText}
            style={{ aspectRatio: 16 / 9 }}
            fill
          />
        </Box>
      </VStack>
    </>
  );
};

export default BlogHead;
