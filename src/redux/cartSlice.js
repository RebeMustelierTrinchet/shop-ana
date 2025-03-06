import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    miCarrito: [],
  },
  reducers: {
    addToCarrito(state, action) {
      const productId = action.payload.id;
      const existingProduct = state.miCarrito.find((item) => item.id === productId);
    
      if (existingProduct) {
        existingProduct.num += 1;
      } else {
        const product = action.payload;
        state.miCarrito.push({ ...product, num: 1, inCart: true });
      }
    },
    decrementFromCarrito(state, action) {
      const productId = action.payload.id;
      const existingProduct = state.miCarrito.find((item) => item.id === productId);

      if (existingProduct && existingProduct.num > 1) {
        existingProduct.num -= 1;
      } else {
        state.miCarrito = state.miCarrito.filter((item) => item.id !== productId);
      }
    },
    removeFromCarrito(state, action) {
      const removedProduct = action.payload;
      state.miCarrito = state.miCarrito.filter((item) => item.id !== removedProduct.id);
    },
    clearCarrito(state) {
      state.miCarrito = [];
    },
  },
});

export const { addToCarrito, decrementFromCarrito, removeFromCarrito, clearCarrito } = cartSlice.actions;
export default cartSlice.reducer;
