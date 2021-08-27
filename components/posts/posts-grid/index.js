import { PostItem } from "../";
import classes from "./posts-grid.module.css";

export const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};
