import Head from "next/head";

import { AllPosts } from "../../components/posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
