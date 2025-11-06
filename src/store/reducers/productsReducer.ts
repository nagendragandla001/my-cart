import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductsState {
  products: Product[];
  loading?: boolean;
  query?: string;
  selectedProduct?: Product | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  query: "",
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      //   state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setLoading, setQuery, setSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
