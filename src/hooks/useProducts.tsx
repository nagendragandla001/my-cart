import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductsInfo } from "../store/reducers/productsReducer";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const loading = useAppSelector((state) => state.products.loading);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsInfo());
    }
  }, [products.length, dispatch]);

  return { products, loading };
};

export default useProducts;
