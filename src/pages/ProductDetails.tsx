import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const ProductDetails = () => {
  const selectedProduct = useAppSelector(
    (state) => state.products.selectedProduct
  );

  return (
    <div>
      {selectedProduct ? (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{selectedProduct.title}</h1>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-64 h-64 object-cover mb-4"
          />
          <p className="text-gray-600 mb-2">
            Category: {selectedProduct.category}
          </p>
          <p className="text-gray-800 mb-4">{selectedProduct.description}</p>
          <p className="text-xl font-semibold">
            ${selectedProduct.price.toFixed(2)}
          </p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
