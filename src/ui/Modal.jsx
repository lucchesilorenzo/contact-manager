import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-stone-900/50 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg rounded-lg bg-stone-100 p-6"
        ref={ref}
      >
        <button
          className="absolute right-3 top-3 rounded-lg border border-stone-100 transition-all duration-300 hover:bg-stone-200"
          onClick={close}
        >
          <IoCloseOutline className="h-8 w-8 text-stone-700" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
