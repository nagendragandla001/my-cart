import { useRef, useState } from "react";
import Modal from "../components/Modal";

const Contact = () => {
  const modalRef = useRef<any>(null);
  return (
    <section className="pt-12">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mt-4">
        If you have any questions, feel free to reach out to us!
      </p>

      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => modalRef.current.openModal()}
      >
        Open Modal
      </button>

      <Modal ref={modalRef} />
    </section>
  );
};

export default Contact;
