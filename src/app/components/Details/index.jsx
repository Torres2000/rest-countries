/** @format */
"use client";

import { useContext } from "react";
import { DataContext } from "@/app/context";
import Navbar from "../Navbar";
import Atras from "../atras";

export default function Details() {
  const { darkMode } = useContext(DataContext);
  return (
    <>
      <main
        className={` min-h-screen ${
          darkMode
            ? "bg-Very-Dark-Blue-bg"
            : "bg-Very-Light-Gray"
        }`}>
        <Navbar />
        <Atras />
      </main>
    </>
  );
}
