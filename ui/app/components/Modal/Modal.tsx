import React, { useEffect } from "react";
import { Button } from "../Button";
import IconClose from "../icons/IconClose";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
}) => {
  useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    });
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed top-0 start-0 w-full h-screen bg-black opacity-[.36] z-40"></div>
      <div
        className="fixed top-0 start-0 w-full h-screen flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="relative max-w-lg shadow-lg bg-white rounded"
          onClick={e => e.stopPropagation()}
        >
          <Button size="sm" onClick={onClose} className="absolute top-3 end-3">
            <IconClose w={16} h={16} />
          </Button>
          <div className="modal-header flex py-4 ps-3 pe-16">
            <h2 className="text-2xl">{title}</h2>
          </div>
          <div className="modal-body pt-1 pb-4 px-3">
            <div>{children}</div>
          </div>
          <div className="modal-footer pt-1 pb-4 px-3">
            <div className="flex justify-end space-x-3">
              <Button onClick={onClose}>Close</Button>
              <Button onClick={() => onSubmit && onSubmit()}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
