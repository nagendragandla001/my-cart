import { Fragment, useRef, useState } from "react";
import Modal from "../components/Modal";
import { useAppSelector } from "../store/hooks";

const Contact = () => {
  const modalRef = useRef<any>(null);
  const products = useAppSelector((state) => state.products.products);

  console.log("Products in Contact page:", products);
  return (
    <>
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
      </section>
      <div>Test data</div>
    </>
  );
};

export default Contact;
