/** @format */
"use client";

import { useContext } from "react";
import { DataContext } from "@/app/context";
import { useEffect } from "react";
import Image from "next/image";
import BuscarPaisCodigo from "../funciones/BuscarPaisCodigo";
export default function Datos() {
  const { darkMode, selectedCountry, setSelectedCountry } =
    useContext(DataContext);
  console.log(selectedCountry);

  useEffect(() => {
    const savedCountry = localStorage.getItem(
      "selectedCountry"
    );
    if (savedCountry) {
      setSelectedCountry(JSON.parse(savedCountry));
    }
  }, []);

  function selecLenguaje(pais) {
    return Object.entries(selectedCountry.languages)
      .map(([key, value]) => `${value.name}`)
      .join(", ");
  }

  return (
    <>
      <section
        className={` mx-auto mt-16 pb-6 flex flex-col gap-10 2xl:w-auto lg:flex-row lg:items-center xl:gap-20`}>
        {selectedCountry && (
          <>
            <div>
              <Image
                src={selectedCountry.flag}
                alt="Escudo"
                width={1000}
                height={1000}
                className="mx-auto"
              />
            </div>
            <div
              className={`  md:mx-auto xl:w-auto xl:m-0  ${
                darkMode === "light"
                  ? "text-white"
                  : "text-Very-Dark-Blue-text"
              }`}>
              <h3
                className={`text-2xl font-bold mb-4 md:text-4xl md:mb-8`}>
                {selectedCountry.name}
              </h3>
              <div className="flex flex-col gap-10 mb-10 md:flex-row xl:justify-between">
                <ul
                  className={`flex flex-col gap-2 ${
                    darkMode === "light"
                      ? "text-white"
                      : "text-Very-Dark-Blue-text"
                  }`}>
                  <li className="text-sm font-medium md:text-lg">
                    Native Name:{" "}
                    <span className="font-light ">
                      {selectedCountry.nativeName}
                    </span>
                  </li>
                  <li className="text-sm font-medium md:text-lg">
                    Population:{" "}
                    <span className="font-light ">
                      {selectedCountry.population}
                    </span>
                  </li>
                  <li className="text-sm font-medium md:text-lg">
                    Region:{" "}
                    <span className="font-light ">
                      {selectedCountry.region}
                    </span>
                  </li>
                  <li className="text-sm font-medium md:text-lg">
                    Sub Region:{" "}
                    <span className="font-light ">
                      {selectedCountry.subRegion}
                    </span>
                  </li>
                  <li className="text-sm font-medium md:text-lg">
                    Capital:{" "}
                    <span className="font-light ">
                      {selectedCountry.capital}
                    </span>
                  </li>
                </ul>

                <ul
                  className={`flex flex-col gap-2 ${
                    darkMode === "light"
                      ? "text-white"
                      : "text-Very-Dark-Blue-text"
                  }`}>
                  <li className="text-sm font-medium md:text-lg">
                    Top Level Domain:{" "}
                    <span className="font-light ">
                      {selectedCountry.topLevelDomain}
                    </span>
                  </li>
                  <li className="text-sm font-medium md:text-lg">
                    Currencies:{" "}
                    {selectedCountry.currencies.map(
                      (currency, index) => (
                        <span
                          className="font-light "
                          key={index}>
                          {currency.name}
                        </span>
                      )
                    )}
                  </li>
                  <li className="text-sm font-medium md:text-lg">
                    Languajes:{" "}
                    <span className="font-light">
                      {selecLenguaje(
                        selectedCountry.languages
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="md:flex gap-4 items-center 2xl:items-start">
                <p>Border Countries: </p>

                <div className="flex flex-wrap gap-2 mt-4 xl:m-0">
                  {selectedCountry.borders &&
                  selectedCountry.borders.map ? (
                    (border, index) => (
                      <span
                        className="border rounded px-2 py-1 cursor-pointer "
                        key={index}>
                        <BuscarPaisCodigo code={border} />
                      </span>
                    )
                  ) : (
                    <span>No Posee Borders</span>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
