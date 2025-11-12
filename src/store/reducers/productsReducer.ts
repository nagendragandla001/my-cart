import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchProductsInfo = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      return data as Product[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsInfo.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsInfo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setQuery, setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
