import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
