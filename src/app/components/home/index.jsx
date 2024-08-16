/** @format */
"use client";
import { DataContext } from "@/app/context";
import { useContext } from "react";
import Navbar from "@/app/components/Navbar";
import Buscar from "@/app/components/buscar";
import Cards from "@/app/components/Cards";

export default function Home() {
  const { darkMode } = useContext(DataContext);
  return (
    <>
      <main
        className={`min-h-screen ${
          darkMode === "light"
            ? "bg-Very-Dark-Blue-bg"
            : "bg-Very-Light-Gray"
        }`}>
        <Navbar />
        <Buscar />
        <Cards />
      </main>
    </>
  );
}
