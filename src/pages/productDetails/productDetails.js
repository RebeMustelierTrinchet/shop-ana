import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from "./productDetails.module.css"
import { selectProductsMemoized } from '../../redux/selectors';

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector(selectProductsMemoized);

  // Comparar como strings porque id de params es string
  const product = products.find(p => String(p.id) === id);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className={styles.main_cont}>
      <h2 className={styles.title}>{product.name}</h2>
      <div className={styles.image_cont}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.text_cont}>
        <p className={styles.text}><strong>Precio:</strong> ${product.price}</p>
        <p className={styles.text}><strong>Descripción:</strong> {product.description || "Descripción no disponible"}</p>
      </div>
    </div>
  );
}
