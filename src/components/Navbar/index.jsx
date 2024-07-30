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
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <section
        className={`  ${
          darkMode
            ? "text-white  "
            : "bg-Very-Dark-Blue-bg "
        }`}>
        <nav className="flex justify-between items-center py-6 px-4">
          <div>
            <h3
              className={` font-bold text-sm ${
                darkMode
                  ? " text-Very-Dark-Blue-text"
                  : " text-white  "
              }`}>
              Where in the world?
            </h3>
          </div>
          <button
            className="flex gap-2 "
            onClick={toggleDarkMode}>
            {darkMode ? (
              <>
                <Image
                  src={iconLunaDark}
                  alt="Icono"
                  width={16}
                  height={16}
                />

                <span className="text-sm text-Very-Dark-Blue-text">
                  Dard Mode
                </span>
              </>
            ) : (
              <>
                <Image
                  src={iconLuna}
                  alt="Icono"
                  width={16}
                  height={16}
                />
                <span className="text-sm text-white">
                  Light Mode
                </span>
              </>
            )}
          </button>
        </nav>
      </section>
    </>
  );
}
