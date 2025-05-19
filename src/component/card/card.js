import { useDispatch, useSelector } from 'react-redux';
import { addToCarrito } from '../../redux/cartSlice';
import { addToFavorites, removeFromFavorites } from '../../redux/favSlice';
import styles from './card.module.css';
import { FaCartShopping } from "react-icons/fa6";
import { GoHeart, GoHeartFill } from "react-icons/go"; // Usamos también el corazón lleno
import { selectFavoritesMemoized, selectProductsMemoized } from '../../redux/selectors'; // Asegúrate de tener este selector

import { PiShoppingCartBold } from "react-icons/pi";

import { useNavigate } from "react-router-dom";


export default function Card({ product }) {

   //navegation 
    const navigate = useNavigate();
  
    
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };
  
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesMemoized);

  const isFavorite = favorites.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCarrito(product));
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div className={styles.card}>
       <img 
              src={product.image} 
              alt={product.name} 
              className={styles.card_image} 
              onClick={() => handleViewDetails(product.id)} 
              style={{ cursor: 'pointer' }} 
            />
      <h3 className={styles.card_title}>{product.name}</h3>
      {/* <p className={styles.card_description}>{product.description}</p> */}
      

      <div className={styles.card__btn}>
        <p className={styles.card_price}>${product.price}</p>
        <button className={styles.card_button} onClick={handleAddToCart}>
          <PiShoppingCartBold className={styles.icon} />
        </button>
        <button className={styles.card_button} onClick={handleToggleFavorite}>
          {isFavorite ? (
            <GoHeartFill className={styles.heart_icon_filled} />
          ) : (
            <GoHeart className={styles.heart_icon} />
          )}
        </button>
      </div>
    </div>
  );
}
