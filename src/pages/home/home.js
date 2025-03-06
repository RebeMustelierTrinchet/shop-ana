import React from "react";
import products from "./../../var/var_elemnts";
import styles from "./home.module.css";
import Card from "../../component/card/card";

export default function Home() {
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
