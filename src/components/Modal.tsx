import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";

const Modal = forwardRef((props: any, ref: any) => {
  const [isOpen, setisOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setisOpen(true);
    },
    closeModal: () => {
      setisOpen(false);
    },
  }));

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">{props?.title}</h2>
        <p>This is a modal content area.</p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          onClick={() => setisOpen(false)}
        >
          Close Modal
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
