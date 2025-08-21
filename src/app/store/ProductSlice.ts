import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ProductService } from "../../services/product-service";


export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{
    rate:number
    count:number
  }
}

 export interface ProductState {
  products: Product[];
  inProgress: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  inProgress: false,
  error: null,
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchNewProducts",
  async () => {
    const products = await ProductService.getProducts();
    return products; 
  }
);


export const productSlice = createSlice({
  name: "productlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.inProgress = true;
        state.products = [];
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.inProgress = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.inProgress = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});



// Selectors (good practice)
export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.inProgress;
export const selectError = (state: RootState) => state.products.error;

export default productSlice.reducer;
