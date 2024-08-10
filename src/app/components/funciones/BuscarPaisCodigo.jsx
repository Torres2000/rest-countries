/** @format */

import { DataContext } from "@/app/context";
import { useContext } from "react";

export default function BuscarPaisCodigo({ code }) {
  const { data } = useContext(DataContext);

  const country = data.find(
    (country) =>
      country.alpha2Code === code ||
      country.alpha3Code === code
  );

  return country ? country.name : "Country not found";
}
