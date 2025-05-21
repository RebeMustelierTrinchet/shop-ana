import React, { useEffect, useState } from "react";
import productsData from "./../../var/var_elemnts";
import styles from "./catalog.module.css";
import Card from "../../component/card/card";

import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/productSlice";

export default function Catalog() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("todos");

  useEffect(() => {
    dispatch(setProducts(productsData));
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
