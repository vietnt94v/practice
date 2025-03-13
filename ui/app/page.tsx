"use client";
import { Button } from "./components/Button";
import ModalLogin from "@/app/components/ModalLogin/ModalLogin";
import { useModal } from "./contexts/ModalContext";

export default function App() {
  const { openModalLogin } = useModal();

  return (
    <>
      <Button onClick={openModalLogin}>Open Modal Login</Button>
      <ModalLogin />
    </>
  );
}
