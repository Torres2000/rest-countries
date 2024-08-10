/** @format */
"use client";

import { useContext } from "react";
import { DataContext } from "@/app/context";
export default function Datos() {
  const { darkMode } = useContext(DataContext);

  return (
    <>
      <section
        className={` mx-auto mt-16 pb-6 flex flex-col gap-10 2xl:w-auto lg:flex-row lg:items-center xl:gap-20`}>
        <div>
          <img
            src="https://flagcdn.com/ax.svg"
            alt="Escudo"
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
            Belgium
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
                <span className="font-light ">Belgie</span>
              </li>
              <li className="text-sm font-medium md:text-lg">
                Population:{" "}
                <span className="font-light ">Belgie</span>
              </li>
              <li className="text-sm font-medium md:text-lg">
                Region:{" "}
                <span className="font-light ">Belgie</span>
              </li>
              <li className="text-sm font-medium md:text-lg">
                Sub Region:{" "}
                <span className="font-light ">Belgie</span>
              </li>
              <li className="text-sm font-medium md:text-lg">
                Capital:{" "}
                <span className="font-light ">Belgie</span>
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
                <span className="font-light ">.be</span>
              </li>
              <li className="text-sm font-medium md:text-lg">
                Currencies:{" "}
                <span className="font-light ">.be</span>
              </li>
              <li className="text-sm font-medium md:text-lg">
                Languajes:{" "}
                <span className="font-light ">.be</span>
              </li>
            </ul>
          </div>

          <div className="md:flex gap-4 items-center 2xl:items-start">
            <p>Border Countries: </p>
            <div className="flex flex-wrap gap-2 mt-4 xl:m-0">
              <a
                href=""
                className="border rounded px-2 py-1">
                France
              </a>
              <a
                href="#"
                className="border rounded px-2 py-1">
                France
              </a>
              <a
                href="#"
                className="border rounded px-2 py-1">
                France
              </a>
              <a
                href="#"
                className="border rounded px-2 py-1">
                France
              </a>
              <a
                href="#"
                className="border rounded px-2 py-1">
                France
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
