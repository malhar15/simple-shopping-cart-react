import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Item {
  quantity: number;
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartItem[], action: PayloadAction<Item>) => {
      state.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeFromCart: (state: CartItem[], action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    increaseQuantity: (state: CartItem[], action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].quantity += 1;
    },
    decreaseQuantity: (state: CartItem[], action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].quantity -= 1;
      if (state[index].quantity === 0) {
        state.splice(index, 1);
      }
    },
    clearCart: (state: CartItem[]) => {
      state.length = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
