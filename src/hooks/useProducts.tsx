import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setProducts, setLoading } from "../store/reducers/productsReducer";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const loading = useAppSelector((state) => state.products.loading);

  const fetchProducts = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(setLoading(false));
    }
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  return { products, loading };
};

export default useProducts;
