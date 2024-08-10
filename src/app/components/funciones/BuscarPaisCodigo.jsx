/** @format */

import { DataContext } from "@/app/context";
import { useContext } from "react";

export default function BuscarPaisCodigo({ code }) {
  console.log(code);
  const { data } = useContext(DataContext);

  const country = data.find(
    (country) =>
      country.alpha2Code === code ||
      country.alpha3Code === code
  );
  console.log(country);

  return country ? country.name : "Country not found";
}
