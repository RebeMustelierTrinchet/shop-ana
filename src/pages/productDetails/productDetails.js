import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsMemoized } from '../../redux/selectors';

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector(selectProductsMemoized);

  // Comparar como strings porque id de params es string
  const product = products.find(p => String(p.id) === id);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Descripción:</strong> {product.description || "Descripción no disponible"}</p>
    </div>
  );
}
