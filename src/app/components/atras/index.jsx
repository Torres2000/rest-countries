/** @format */
"use client";
import { DataContext } from "@/app/context";
import { useContext } from "react";
import backNegro from "@/app/img/backNegro.svg";
import backBlanco from "@/app/img/backBlanco.svg";
import Image from "next/image";
import Link from "next/link";
export default function Atras() {
  const { darkMode } = useContext(DataContext);

  return (
    <>
      <Link
        href={"/"}
        className={`ml-[5%] mt-6 xl:mt-20 flex items-center w-32 justify-center gap-2 rounded py-1 shadow-sm shadow-black xl:py-3 font-light cursor-pointer xl:ml-0 ${
          darkMode === "light"
            ? "text-white bg-Dark-Blue"
            : "text-black"
        }`}>
        <Image
          src={
            darkMode === "light" ? backBlanco : backNegro
          }
          width={24}
          alt="Icon Atras"
        />
        Back
      </Link>
    </>
  );
}
