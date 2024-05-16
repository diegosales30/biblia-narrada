"use client";
import { ModalProvider } from "./modal-context";

const Provider = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
export default Provider;
