/** @format */
"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { DataContext } from "@/app/context";

export default function Desplegable() {
  const { data, setDatosFiltrados, darkMode } =
    useContext(DataContext);

  const regions = [
    ...new Set(data.map((country) => country.region)),
  ];

  const handleRegionChange = (event) => {
    const region = event;
    setDatosFiltrados(
      data.filter((country) => country.region === region)
    );
  };

  return (
    <>
      <Menu
        as="div"
        className="relative inline-block text-left mt-8 md:m-0">
        <MenuButton
          className={`inline-flex w-full  justify-center gap-x-1.5 rounded-md  px-3 py-4 text-sm  text-gray-900 shadow-sm  xl:w-[200px] xl:justify-between xl:px-5
            ${
              darkMode === "light"
                ? "bg-Dark-Blue text-white"
                : "bg-white"
            }`}>
          Filter by Region
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>

        <MenuItems
          transition
          className={`absolute  z-10 mt-2 py-3 w-full origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in ${
            darkMode === "light"
              ? "bg-Dark-Blue text-white"
              : "bg-white"
          }`}>
          {regions.map((dato, index) => (
            <div className="px-1" key={index}>
              <MenuItem>
                <span
                  onClick={() => handleRegionChange(dato)}
                  className="block px-3 py-2 text-sm  data-[focus]:bg-Dark-Gray data-[focus]:text-gray-900  cursor-pointer rounded-md">
                  {dato}
                </span>
              </MenuItem>
            </div>
          ))}
        </MenuItems>
      </Menu>
    </>
  );
}
