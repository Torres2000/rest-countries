/** @format */
"use client";
import iconLuna from "@/app/img/iconLuna.svg";
import iconLunaDark from "@/app/img/iconLunaDark.svg";
import Image from "next/image";
import { DataContext } from "@/app/context";
import { useContext } from "react";
export default function Navbar() {
  const { darkMode, setDarkMode, toggleTheme } =
    useContext(DataContext);
  function toggleDarkMode(params) {
    setDarkMode(() => !darkMode);
  }
  return (
    <>
      <section
        className={`${
          darkMode === "light"
            ? "  bg-Dark-Blue"
            : " bg-white"
        }`}>
        <nav className="max-w-7xl w-[90%] flex justify-between items-center mx-auto py-6  xl:mx-auto 2xl:px-0 xl:py-6">
          <div>
            <h3
              className={` font-bold text-sm sm:text-base md:text-2xl ${
                darkMode === "light"
                  ? "text-white"
                  : "text-Very-Dark-Blue-text"
              }`}>
              Where in the world?
            </h3>
          </div>
          <button
            className="flex gap-2 items-center"
            onClick={toggleTheme}>
            <Image
              src={
                darkMode === "light"
                  ? iconLunaDark
                  : iconLuna
              }
              alt="Icono"
              width={16}
              height={16}
            />
            <span
              className={`font-medium text-sm  md:text-base ${
                darkMode === "light"
                  ? "text-white"
                  : "text-Very-Dark-Blue-text"
              }`}>
              {darkMode === "light"
                ? "Light Mode"
                : "Dark Mode"}
            </span>
          </button>
        </nav>
      </section>
    </>
  );
}
