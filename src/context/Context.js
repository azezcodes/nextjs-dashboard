"use client";
import { createContext, useContext, useState, useEffect } from "react";
const AppProvider = createContext();

export const AppContextProvider = ({ children }) => {
  const [width, setWidth] = useState(undefined);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (window.innerWidth > 483) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [width]);

  return (
    <AppProvider.Provider value={{ clicked, setClicked }}>
      {children}
    </AppProvider.Provider>
  );
};
export const Store = () => useContext(AppProvider);
