/** @format */
"use client";
import Navbar from "@/components/Navbar";
import Buscar from "@/components/Buscar";
import { DataContext } from "@/context";
import { useContext } from "react";

export default function Home() {
  const { darkMode, setDarkMode } = useContext(DataContext);
  console.log(darkMode);
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
      </main>
    </>
  );
}
