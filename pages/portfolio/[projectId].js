import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <h1>Portfolio project id page</h1>
    </div>
  );
};

export default PortfolioProjectPage;
