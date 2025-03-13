"use client";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onSubmit={() => {
          alert("Submited");
          setTimeout(() => {
            setIsOpen(false);
          }, 1000);
        }}
        title="Modal Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Modal>
    </>
  );
}
