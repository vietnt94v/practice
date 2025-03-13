import React from "react";
import { Modal } from "../Modal";
import { useModal } from "../../contexts/ModalContext";
import { Button } from "../Button";

const ModalLogin: React.FC = () => {
  const { isOpenModalLogin, closeModalLogin } = useModal();

  const handleSubmit = () => {
    alert("Login Submitted");
    closeModalLogin();
  };

  return (
    <Modal
      title="Login"
      isOpen={isOpenModalLogin}
      onClose={closeModalLogin}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <Button onClick={handleSubmit} className="w-full">
          Login
        </Button>
      </div>
    </Modal>
  );
};

export default ModalLogin;
