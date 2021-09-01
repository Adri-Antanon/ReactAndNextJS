import Head from "next/head";

import { Hero, FeaturedPosts } from "../components/home-page";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Adri Blog</title>
        <meta
          name="description"
          content="I post about programming and web development "
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
