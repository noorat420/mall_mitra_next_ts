import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product } from "./ProductSlice";


// export interface CartItem extends Product {
 
// }

// cart state
export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
        state.cart.push(action.payload); 
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, clearCart } = CartSlice.actions;

// Selector
export const selectCart = (state: RootState) => state.cart.cart;

// Export reducer
export default CartSlice.reducer;
