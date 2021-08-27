import { PostsGrid } from "../../posts";
import classes from "./featured-posts.module.css";

export const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};
