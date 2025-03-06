
import { createSelector } from 'reselect';

const selectCart = (state) => state.cart.miCarrito || []; // Asegúrate de que nunca sea undefined

export const selectCartMemoized = createSelector(
  [selectCart],
  (miCarrito) => miCarrito
);