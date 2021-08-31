import ReactMarkdown from "react-markdown";
import { PostHeader } from "..";

import classes from "./post-content.module.css";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting Started with NextJS",
//   image: "getting-started-nextjs.png",
//   date: "2021-08-26",
//   content: "# This is a first post",
// };

export const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
      {/* Esto solo funciona con la versión 6.0.0*/}
      {/* <ReactMarkdown children={post.content} /> Esto debería de funcionar con la versión 7.0.1 pero no me va, debido a que no es estable todavía */}
    </article>
  );
};
