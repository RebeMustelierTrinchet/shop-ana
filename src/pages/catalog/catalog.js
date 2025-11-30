import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import styles from "./catalog.module.css";
import Card from "../../component/card/card";

import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebase";
import { setProducts } from "../../redux/productSlice";

export default function Catalog() {
  const dispatch = useDispatch();
  const [productsData, setProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("todos");

  // Cargar productos desde Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setProductsData(items);
        dispatch(setProducts(items));
      } catch (err) {
        console.error("Error cargando productos:", err);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "todos" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = ["todos", ...new Set(productsData.map(p => p.category))];

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Bienvenido a nuestra tienda de arreglos florales</h1>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className={styles.selectInput}
        >
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat[0].toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.homeGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.noResults}>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}
