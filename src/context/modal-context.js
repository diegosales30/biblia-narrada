"use client";
import { createContext,  useEffect,  useRef,  useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const modalRef = useRef(null);
  
  const toggleModal = () => {
    setOpen(!open);
  };

  //use efect ao clicar fora do modal, a janela se fecha
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(true);
      }
    };

    if (!open) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  return (
    <ModalContext.Provider value={{ open, setOpen, toggleModal, modalRef }}>
      {children}
    </ModalContext.Provider>
  );
};