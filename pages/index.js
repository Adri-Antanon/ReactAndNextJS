import { Hero, FeaturedPosts } from "../components/home-page";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  const { posts } = props;
  return (
    <>
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
