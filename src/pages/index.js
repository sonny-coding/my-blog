import React from "react";
import Head from "next/head";
import { Text, Heading } from "@chakra-ui/react";
import AppHeader from "@/components/AppHeader";
import BlogPreviewList from "@/components/Blog/BlogPreviewList";
// import BlogPreviewCard from "@/components/Blog/BlogPreviewCard";

const Home = () => {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <AppHeader />
      <BlogPreviewList />
      {/* <BlogPreviewCard /> */}
    </>
  );
};

export default Home;
