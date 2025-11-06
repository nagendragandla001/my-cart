import { useState, useTransition } from "react";
import {
  setSelectedProduct,
  type Product,
} from "../store/reducers/productsReducer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";

const ProductComponent = ({ product }: { product: Product }) => {
  const { id, title, price, image } = product;

  const [isPending, startTransition] = useTransition();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleAddToCart = (id: number) => {
    dispatch(setSelectedProduct(product));
    startTransition(() => {
      navigate(`/products/${id}`);
    });
  };
  return (
    <div className="border rounded-lg border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
      <div className="flex justify-end p-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-400 cursor-pointer"
          onClick={() => handleAddToCart(id)}
        >
          Select Product
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
