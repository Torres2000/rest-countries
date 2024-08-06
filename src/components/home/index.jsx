/** @format */
"use client";
import { DataContext } from "@/context";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import Buscar from "@/components/Buscar";
import Cards from "@/components/Cards";

export default function Home() {
  const { darkMode } = useContext(DataContext);
  return (
    <>
      <main
        className={`min-h-screen ${
          darkMode
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
