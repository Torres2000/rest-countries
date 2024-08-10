/** @format */
"use client";

import { useContext } from "react";
import { DataContext } from "@/app/context";
import Navbar from "../Navbar";
import Atras from "../atras";
import DatosDetalles from "./data";

export default function Details() {
  const { darkMode } = useContext(DataContext);
  return (
    <>
      <main
        className={` min-h-screen ${
          darkMode === "light"
            ? "bg-Very-Dark-Blue-bg"
            : "bg-Very-Light-Gray"
        }`}>
        <Navbar />
        <section className="max-w-7xl xl:mx-auto">
          <Atras />
          <DatosDetalles />
        </section>
      </main>
    </>
  );
}
