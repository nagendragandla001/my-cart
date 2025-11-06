import { useCallback, useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<Array<any>>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};

export default useProducts;
