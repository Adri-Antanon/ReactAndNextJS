import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
