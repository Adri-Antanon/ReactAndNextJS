import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found Bitch!</h1>
      <button>
        <Link href="/">Return to home</Link>
      </button>
    </div>
  );
};

export default NotFound;
