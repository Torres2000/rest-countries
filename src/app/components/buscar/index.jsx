/** @format */
"use client";
import { DataContext } from "@/app/context";
import Desplegable from "./desplegable";
import iconLupa from "@/app/img/iconLupa.svg";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
export default function Buscar() {
  const { data, setDatosFiltrados, darkMode } =
    useContext(DataContext);

  const [buscar, setBuscar] = useState("");

  const handleSearchChange = (event) => {
    setBuscar(event.target.value);
  };

  useEffect(() => {
    setDatosFiltrados(
      data.filter((country) =>
        country.name
          .toLowerCase()
          .includes(buscar.toLowerCase())
      )
    );
  }, [buscar]);

  return (
    <>
      <section className="mt-12">
        <div className="max-w-7xl w-[90%] mx-auto md:flex justify-between">
          <div
            className={`flex py-3 rounded-lg md:w-[480px] md:p-1 ${
              darkMode === "light"
                ? "bg-Dark-Blue"
                : "bg-white"
            }`}>
            <Image
              src={iconLupa}
              alt="Icon Lupa"
              width={20}
              height={20}
              className="mx-6 cursor-pointer "
            />
            <input
              value={buscar}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search for a country..."
              className={` w-full focus-visible:outline-none text-sm ${
                darkMode === "light"
                  ? "bg-Dark-Blue text-white"
                  : "bg-white"
              }`}
            />
          </div>
          <Desplegable />
        </div>
      </section>
    </>
  );
}
