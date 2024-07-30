/** @format */

"use client";
import React, {
  createContext,
  useState,
  useEffect,
} from "react";

const DataContext = createContext();
import datos from "@/components/datos/data.json";
const DataProvider = ({ children }) => {
  const datosJson = datos;
  const [data, setData] = useState(datosJson);
  const [buscar, setBuscar] = useState("all");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        buscar,
        setBuscar,
        darkMode,
        setDarkMode,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
