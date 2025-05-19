
import { createSelector } from 'reselect';

const selectCart = (state) => state.cart.miCarrito || []; // Asegúrate de que nunca sea undefined
const selectFavorites = (state) => state.favorites.myFavorites || [];
const selectProducts = (state) => state.products.allProducts || [];

export const selectCartMemoized = createSelector(
  [selectCart],
  (miCarrito) => miCarrito
);

export const selectFavoritesMemoized = createSelector(
  [selectFavorites],
  (myFavorites) => myFavorites
);

export const selectProductsMemoized = createSelector(
  [selectProducts],
  (allProducts) => allProducts
);