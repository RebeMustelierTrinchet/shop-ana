import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCarrito } from "../../redux/cartSlice";
import { removeFromFavorites } from '../../redux/favSlice';
import { selectFavoritesMemoized } from "../../redux/selectors";
import styles from './favorites.module.css';

import { FaCartShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

export default function Fav() {
  const dispatch = useDispatch();
  const myFavorites = useSelector(selectFavoritesMemoized);

  useEffect(() => {
    console.log("Favoritos actualizados:", myFavorites);
  }, [myFavorites]);

  const handleAddToCart = (product) => {
    dispatch(addToCarrito(product));
  };

  const handleRemoveFavorite = (product) => {
    dispatch(removeFromFavorites(product));
  };

  if (myFavorites.length === 0) {
    return (
      <div className={styles.cart}>
        <h2>Mis Favoritos</h2>
        <p>No tienes productos en favoritos.</p>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h2>Mis Favoritos</h2>
      <div className={styles.cartItems}>
        {myFavorites.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartItemImage} />
            <div className={styles.cartItemInfo}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className={styles.buttons}>
                <button className={styles.cartButton} onClick={() => handleAddToCart(item)}>
                  <FaCartShopping className={styles.icon} /> Añadir al carrito
                </button>
                <button className={styles.favButton} onClick={() => handleRemoveFavorite(item)}>
                  <GoHeartFill className={styles.heartIcon} /> Quitar de favoritos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
