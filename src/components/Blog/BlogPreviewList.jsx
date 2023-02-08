import React from "react";
import BlogPreviewCard from "./BlogPreviewCard";
import { Box, Heading } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const BlogPreviewList = () => {
  return (
    <>
      <Box mt={8} mb={16}>
        <Heading sx={{ textTransform: "uppercase", mb: 8, fontSize: "5xl" }}>
          Top Blogs
        </Heading>
      </Box>
      {Array(3)
        .fill(0)
        .map(() => (
          <BlogPreviewCard key={nanoid()} />
        ))}
    </>
  );
};

export default BlogPreviewList;
