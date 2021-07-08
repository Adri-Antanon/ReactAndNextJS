import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
