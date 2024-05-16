"use client";
import { createContext, useState } from "react";

export const NightContext = createContext();

export const NightProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <NightContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </NightContext.Provider>
  );
};