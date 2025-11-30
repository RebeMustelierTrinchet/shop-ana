import { useParams } from 'react-router-dom';
import styles from "./productDetails.module.css";
import { selectProductsMemoized } from '../../redux/selectors';
import { addToCarrito } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector(selectProductsMemoized);
  const product = products.find(p => String(p.id) === id);
    const dispatch = useDispatch();

  if (!product) return <p className={styles.notFound}>Producto no encontrado</p>;

  const handleBuy = () => {
    dispatch(addToCarrito(product));
    alert(`Has comprado: ${product.name} por $${product.price}`);
  };

  return (
    <div className={styles.main_cont}>
      <h2 className={styles.title}>{product.name}</h2>
      <div className={styles.image_cont}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.text_cont}>
        <p className={styles.text}><strong>Precio:</strong> ${product.price}</p>
        <p className={styles.text}><strong>Descripción:</strong> {product.description || "Descripción no disponible"}</p>
        <button className={styles.buy_btn} onClick={handleBuy}>Comprar ahora</button>
      </div>
    </div>
  );
}
