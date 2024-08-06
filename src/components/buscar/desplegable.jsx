/** @format */
"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { DataContext } from "@/context";

export default function Desplegable() {
  const { data, darkMode } = useContext(DataContext);

  const navigation = [
    {
      name: "Africa",
      href: "#inicio",
      current: true,
      region: "region/africa",
    },
    {
      name: "America",
      href: "#sobreMi",
      current: false,
      region: "region/america",
    },
    {
      name: "Asia",
      href: "#habilidades",
      current: false,
      region: "region/asia",
    },
    {
      name: "Europe",
      href: "#curriculum",
      current: false,
      region: "region/europe",
    },
    {
      name: "Oceania",
      href: "#portfolio",
      current: false,
      region: "region/oceania",
    },
  ];
  return (
    <Menu
      as="div"
      className="relative inline-block text-left mt-8 md:m-0">
      <div>
        <MenuButton
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm 
            ${
              darkMode
                ? "bg-Dark-Blue text-white"
                : "bg-white"
            }`}>
          Filter by Region
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={`absolute  z-10 mt-2 w-full origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in ${
          darkMode ? "bg-Dark-Blue text-white" : "bg-white"
        }`}>
        {navigation.map((dato, index) => (
          <div className="py-1" key={index}>
            <MenuItem>
              <a
                href="#"
                className="block px-4 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                {dato.name}
              </a>
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
