import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // Load data
    router.push("/clients/adri/A");
  };
  return (
    <div>
      <h1>The projects of given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjectPage;
