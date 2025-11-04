import { useState } from "react";

const Product = ({
  id,
  name,
  price,
  image,
}: {
  id: number;
  name: string;
  price: number;
  image: string;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  if (id === selectedProduct) {
    throw new Error("Crashed Product Component!");
  }

  const handleAddToCart = (id: number) => {
    setSelectedProduct(id);
  };
  return (
    <div className="border rounded-lg border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
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

export default Product;
