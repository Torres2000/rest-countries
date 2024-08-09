/** @format */

"use client";
import React, {
  createContext,
  useState,
  useEffect,
} from "react";

const DataContext = createContext();
import datos from "@/app/components/datos/data.json";
const DataProvider = ({ children }) => {
  const datosJson = datos;
  const [data, setData] = useState(datosJson);
  const [buscar, setBuscar] = useState("all");
  const [datosFiltrados, setDatosFiltrados] =
    useState(data);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme);
    }
  }, []);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        buscar,
        setBuscar,
        darkMode,
        setDarkMode,
        datosFiltrados,
        setDatosFiltrados,
        darkMode,
        toggleTheme,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
