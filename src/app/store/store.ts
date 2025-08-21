 import { configureStore } from "@reduxjs/toolkit";
 import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productreducer from './ProductSlice'
import cartReducer from '../store/CartSlice'

export const store = configureStore({
  reducer: {
   products: productreducer,
   cart:cartReducer,
  
  },
});


// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for typed usage
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;