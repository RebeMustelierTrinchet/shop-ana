import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { deleteProduct } from "./delete"; // lo creamos aparte
import styles from "./admin.module.css";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Panel de Administración</h1>
        <p className={styles.subtitle}>Administra tus productos ✨</p>

        <button
          className={styles.addBtn}
          onClick={() => navigate("/admin/add-product")}
        >
          ➕ Agregar producto
        </button>

        <button className={styles.logoutBtn} onClick={() => signOut(auth)}>
          Cerrar sesión
        </button>

        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.alt}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <div className={styles.btnGroup}>
                  <button
                    className={styles.editBtn}
                    onClick={() => navigate(`/admin/edit-product/${product.id}`)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteProduct(product.id).then(fetchProducts)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
