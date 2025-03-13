"use client";
import React, { useState, createContext, useContext } from "react";

interface ModalContextProps {
  isOpenModalLogin: boolean;
  openModalLogin: () => void;
  closeModalLogin: () => void;
}
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const openModalLogin = () => setIsOpenModalLogin(true);
  const closeModalLogin = () => setIsOpenModalLogin(false);
  return (
    <ModalContext.Provider
      value={{ isOpenModalLogin, openModalLogin, closeModalLogin }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
