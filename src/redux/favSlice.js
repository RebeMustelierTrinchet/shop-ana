import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    myFavorites: [],
  },
  reducers: {
    addToFavorites(state, action) {
      const productId = action.payload.id;
      const exists = state.myFavorites.some((item) => item.id === productId);

      if (!exists) {
        state.myFavorites.push(action.payload);
      }
    },

    removeFromFavorites(state, action) {
      const productId = action.payload.id;
      state.myFavorites = state.myFavorites.filter((item) => item.id !== productId);
    },

    clearFavorites(state) {
      state.myFavorites = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
