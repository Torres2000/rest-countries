/** @format */

"use client";
import { useContext } from "react";
import { DataContext } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
export default function Cards() {
  const { datosFiltrados, darkMode, setSelectedCountry } =
    useContext(DataContext);

  const handleCardClick = (country) => {
    setSelectedCountry(country);
    localStorage.setItem(
      "selectedCountry",
      JSON.stringify(country)
    );
  };
  return (
    <>
      <section className="mt-12 ">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-5 w-[90%] xl:p-0 md:gap-y-20 ">
          {datosFiltrados.map((datos, index) => (
            <Link
              key={index}
              href={"/detalles"}
              onClick={() => handleCardClick(datos)}
              className={`max-w-[264px] w-2/3 xl:w-full  rounded-lg overflow-hidden xl:m-0 ${
                darkMode === "light"
                  ? "bg-Dark-Blue text-white"
                  : "bg-white"
              }`}>
              <div className="h-[164px]">
                <Image
                  src={datos.flag}
                  width={1000}
                  height={1000}
                  alt="fsdg"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-5 mb-10 ml-6 ">
                <h3 className="font-bold text-lg mb-4">
                  {datos.name}
                </h3>
                <ul className="space-y-1">
                  <li className="text-sm font-light">
                    <span className="font-medium text-sm">
                      Population:
                    </span>{" "}
                    {datos.population}
                  </li>
                  <li className="text-sm font-light">
                    <span className="font-medium text-sm">
                      Region:
                    </span>{" "}
                    {datos.region}
                  </li>
                  <li className="text-sm font-light">
                    <span className="font-medium text-sm">
                      Capital:
                    </span>{" "}
                    {datos.capital}
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
