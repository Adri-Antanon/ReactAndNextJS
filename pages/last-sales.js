import { useEffect, useState } from "react";
import useSWR from "swr";

const BASE_URL = "https://nextjsexample-e9557-default-rtdb.firebaseio.com/";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // Esta hook creado por Vercel sustituye al custom hook que he creado abajo
  const { data, error } = useSWR(BASE_URL + "/sales.json");
  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  // ESTE CUSTOM HOOK
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(BASE_URL + "/sales.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load...</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}kg
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
