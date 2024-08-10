/** @format */

import { DataContext } from "@/app/context";
import { useContext } from "react";

export default function BuscarPais({ code }) {
  console.log(code);

  const { data } = useContext(DataContext);

  const country = data.find(
    (country) =>
      country.alpha2Code === code ||
      country.alpha3Code === code
  );

  /*
  console.log(
    country
      ? JSON.stringify(country, null, 2)
      : "Country not found"
  );
  */
}
