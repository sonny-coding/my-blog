import React from "react";
import Head from "next/head";
import { Text, Heading } from "@chakra-ui/react";
import BlogPreviewList from "@/components/Blog/BlogPreviewList";

const Home = () => {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <BlogPreviewList />
    </>
  );
};

export default Home;
