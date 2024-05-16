"use client";
import { createContext, useEffect, useState } from "react";

export const NightContext = createContext();

export const NightProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };
  //use effect para add class no body com dom para lterar modo dia e noite
  useEffect(() => {
    if (nightMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [nightMode]);

  return (
    <NightContext.Provider value={{ nightMode, setNightMode, toggleNightMode }}>
      {children}
    </NightContext.Provider>
  );
};