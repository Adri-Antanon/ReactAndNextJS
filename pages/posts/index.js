import { AllPosts } from "../../components/posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
