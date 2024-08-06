/** @format */

"use client";
import { useContext } from "react";
import { DataContext } from "@/context";
import Image from "next/image";
export default function Cards() {
  const { data, darkMode } = useContext(DataContext);
  console.log(data);
  return (
    <>
      <section className="mt-12 flex flex-col gap-5">
        {data.map((datos, index) => (
          <div
            key={index}
            className={`max-w-[250px] w-full mx-auto rounded-lg overflow-hidden ${
              darkMode
                ? "bg-Dark-Blue text-white"
                : "bg-white"
            }`}>
            <div className="h-[150px]">
              <Image
                src={datos.flag}
                width={100}
                height={1000}
                alt="fsdg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="my-5 ml-5 ">
              <h3 className="font-bold text-lg mb-4">
                {datos.name}
              </h3>
              <ul className="space-y-1">
                <li>
                  <span className="font-medium text-sm">
                    Population:
                  </span>{" "}
                  {datos.population}
                </li>
                <li>
                  <span className="font-medium text-sm">
                    Region:
                  </span>{" "}
                  {datos.region}
                </li>
                <li>
                  <span className="font-medium text-sm">
                    Capital:
                  </span>{" "}
                  {datos.capital}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
