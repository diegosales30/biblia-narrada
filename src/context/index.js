"use client";
import { ModalProvider } from "./modal-context";
import { NightProvider } from "./night-mode";

const Provider = ({ children }) => {
  return (
    <ModalProvider>
      <NightProvider>{children}</NightProvider>
    </ModalProvider>
  );
};
export default Provider;
