/** @format */
"use client";
import iconLuna from "@/img/iconLuna.svg";
import iconLunaDark from "@/img/iconLunaDark.svg";
import Image from "next/image";
import { DataContext } from "@/context";
import { useContext } from "react";
export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DataContext);
  console.log(darkMode);
  function toggleDarkMode(params) {
    setDarkMode(() => !darkMode);
  }
  return (
    <>
      <section
        className={`${
          darkMode ? "  bg-Very-Dark-Blue-bg" : " bg-white"
        }`}>
        <nav className="max-w-7xl w-[90%] flex justify-between items-center mx-auto py-6  xl:mx-auto 2xl:px-0 xl:py-8">
          <div>
            <h3
              className={` font-bold text-sm sm:text-base md:text-2xl ${
                darkMode
                  ? "text-white"
                  : "text-Very-Dark-Blue-text"
              }`}>
              Where in the world?
            </h3>
          </div>
          <button
            className="flex gap-2 items-center"
            onClick={toggleDarkMode}>
            <Image
              src={darkMode ? iconLuna : iconLunaDark}
              alt="Icono"
              width={16}
              height={16}
            />
            <span
              className={` text-sm  md:text-base ${
                darkMode
                  ? "text-white"
                  : "text-Very-Dark-Blue-text"
              }`}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </nav>
      </section>
    </>
  );
}
