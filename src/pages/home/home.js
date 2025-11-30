import React from "react";
import styles from "./home.module.css";

import { PiHouseLineFill } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";
import { IoFlower } from "react-icons/io5";

// Banner convertido a WebP y optimizado al tamaño real de visualización
import I1 from "./../../images/I1.webp";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      
      {/* Banner optimizado */}
      <img
        src={I1}
        alt="banner of fantasy lover"
        className={styles.img}
        width={609}          // dimensiones exactas mostradas
        // height={344}
        fetchPriority="high" // importante para LCP
      />

      <div className={styles.text_div}>
        <h1 className={styles.homeTitle}>
          Bienvenido a nuestra tienda de arreglos florales
        </h1>
        <p className={styles.homeText}>
          No es solo un regalo. Es un “pensé en ti” envuelto en flores.
          Hechos con amor, con el alma, y con ganas de dejar huella.
          Porque a veces, lo que más se recuerda… florece
          <IoFlower className={styles.icon} />.
        </p>
      </div>

      <div className={styles.icon_div}>
        <p className={styles.homeText}>
          <PiHouseLineFill className={styles.icon} />En el local
        </p>
        <p className={styles.homeText}>
          <FaMotorcycle className={styles.icon}/>A domicilio
        </p>
      </div>

      <div className={styles.btn_div}>
        <div className={styles.footer__links}>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/catalogo">Catalogo</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}
