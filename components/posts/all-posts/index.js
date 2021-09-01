import { PostsGrid } from "..";
import classes from "./all-posts.module.css";

export const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};
