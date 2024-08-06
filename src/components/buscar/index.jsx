/** @format */
"use client";
import { DataContext } from "@/context";
import Desplegable from "./desplegable";
import iconLupa from "@/img/iconLupa.svg";
import Image from "next/image";
import { useContext } from "react";
export default function Buscar() {
  const { darkMode } = useContext(DataContext);
  return (
    <>
      <section className="mt-6">
        <div className="max-w-7xl w-[90%] mx-auto md:flex justify-between">
          <div
            className={`flex py-3 rounded-lg md:w-2/4 md:p-1 ${
              darkMode ? "bg-Dark-Blue" : "bg-white"
            }`}>
            <Image
              src={iconLupa}
              alt="Icon Lupa"
              width={16}
              height={16}
              className="mx-6 cursor-pointer "
            />
            <input
              type="text"
              placeholder="Search for a country..."
              className={` w-full focus-visible:outline-none ${
                darkMode
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
