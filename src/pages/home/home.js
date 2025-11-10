import React, { useEffect } from "react";
import styles from "./home.module.css";

import { PiHouseLineFill } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";
import { IoFlower } from "react-icons/io5";

import I1 from "./../../images/photo_2025-02-28_16-03-02.jpg"

export default function Home() {



  return (
    <div className={styles.homeContainer}>
       <img src={I1} alt="banner of fantasy lover" className={styles.img}/>
       <div className={styles.text_div}>
        <h1 className={styles.homeTitle}>Bienvenido a nuestra tienda de arreglos florales</h1>
        <p  className={styles.homeText}>No es solo un regalo.
            Es un “pensé en ti” envuelto en flores.
            Hechos con calma, con alma, y con ganas de dejar huella.
            Porque a veces, lo que más se recuerda… florece<IoFlower  className={styles.icon}/>.</p>
        </div>
        <div  className={styles.icon_div}>
          <p className={styles.homeText}><PiHouseLineFill  className={styles.icon} />En el local</p>
          <p className={styles.homeText}><FaMotorcycle className={styles.icon}/>A domicilio</p>
        </div>
        <div  className={styles.btn_div}>
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
