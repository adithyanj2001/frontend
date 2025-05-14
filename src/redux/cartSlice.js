import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
  const item = action.payload;
  const existingItem = state.items.find(i => i.title === item.title);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ ...item, quantity: 1 });
  }
},
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.title !== action.payload.title);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
