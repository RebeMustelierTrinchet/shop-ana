import React, { useEffect } from "react";
import products from "./../../var/var_elemnts";
import styles from "./home.module.css";
import Card from "../../component/card/card";

import { useDispatch } from "react-redux";
import productsData from "./../../var/var_elemnts"
import { setProducts } from "../../redux/productSlice";

export default function Home() {

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(productsData)); // Cargar al store al iniciar
  }, [dispatch]);


  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Bienvenido a nuestra tienda de arreglos florales</h1>
      <div className={styles.homeGrid}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
