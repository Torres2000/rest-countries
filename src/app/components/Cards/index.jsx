/** @format */

"use client";
import { useContext } from "react";
import { DataContext } from "@/app/context";
import Image from "next/image";
export default function Cards() {
  const { datosFiltrados, darkMode } =
    useContext(DataContext);
  return (
    <>
      <section className="mt-12 ">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-5 px-5 xl:w-[90%] xl:p-0 ">
          {datosFiltrados.map((datos, index) => (
            <div
              key={index}
              className={`max-w-[250px] w-2/3 xl:w-full mx-auto rounded-lg overflow-hidden xl:m-0 ${
                darkMode
                  ? "bg-Dark-Blue text-white"
                  : "bg-white"
              }`}>
              <div className="h-[150px]">
                <Image
                  src={datos.flag}
                  width={1000}
                  height={1000}
                  alt="fsdg"
                  className="w-full h-full"
                />
              </div>
              <div className="my-5 ml-5 ">
                <h3 className="font-bold text-lg mb-4">
                  {datos.name}
                </h3>
                <ul className="space-y-1">
                  <li className="text-sm font-light">
                    <span className="font-medium text-sm">
                      Population:
                    </span>{" "}
                    {datos.population}
                  </li>
                  <li className="text-sm font-light">
                    <span className="font-medium text-sm">
                      Region:
                    </span>{" "}
                    {datos.region}
                  </li>
                  <li className="text-sm font-light">
                    <span className="font-medium text-sm">
                      Capital:
                    </span>{" "}
                    {datos.capital}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
