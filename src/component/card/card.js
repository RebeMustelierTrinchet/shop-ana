import { useDispatch } from 'react-redux';
import { addToCarrito } from '../../redux/cartSlice';
import styles from './card.module.css';

export default function Card({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Producto agregado al carrito:", product); 
    dispatch(addToCarrito(product));
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.card_image} />
      <h3 className={styles.card_title}>{product.name}</h3>
      <p className={styles.card_description}>{product.description}</p>
      <p className={styles.card_price}>${product.price}</p>
      <button className={styles.card_button} onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}
