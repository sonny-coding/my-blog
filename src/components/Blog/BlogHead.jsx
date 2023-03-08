import React, { useEffect } from "react";
import Image from "next/image";
import { Box, HStack, VStack, Text, Heading, LinkBox } from "@chakra-ui/react";
import useGetViews from "@/hooks/useGetViews";
import axios from "axios";

const BlogHead = ({
  banner,
  title,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) => {
  const { data: views, mutate } = useGetViews(customID, totalViews);
  useEffect(() => {
    const url = `/api/views/${customID}`;

    (async () => {
      try {
        await axios.post(url);
        mutate();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <VStack as={LinkBox} spacing="1rem" align="center" m="2rem 0">
        <Box>{title}</Box>
        <Box>{readingTime}</Box>
        {/* <Box w="100%">
          <Image
            src={banner}
            alt={altText}
            style={{ aspectRatio: 16 / 9 }}
            fill
          />
        </Box> */}
        <Heading
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          align="center"
        >
          {title}
        </Heading>

        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <Text>{createdAt}</Text>
          <Text>{views} views</Text>
          <Text>{readingTime}</Text>
        </HStack>
      </VStack>
    </>
  );
};

export default BlogHead;
