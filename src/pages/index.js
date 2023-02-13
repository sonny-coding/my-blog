import React from "react";
import Head from "next/head";
import { Text, Heading } from "@chakra-ui/react";
import BlogPreviewList from "@/components/Blog/BlogPreviewList";
import dbConnect from "@/mongoose/connectDb";
import getFileNames from "@/utils/getFileNames";
import readBlogFiles from "@/utils/readBlogFiles";
import matter from "gray-matter";

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

export const getStaticProps = async () => {
  await dbConnect();

  const fileNames = getFileNames();
  fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const parsedFile = readBlogFiles(fileName);
    const { data, content } = matter(parsedFile);
    console.log(data);
    // console.log(content);
  });

  return {
    props: {},
  };
};
export default Home;
