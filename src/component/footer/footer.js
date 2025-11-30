import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { CgMail } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from "./footer.module.css";
import Capture1 from "./../../images/Untitled design (3).png";


export default function Footer() {

  return(
    <footer className={styles.footer}>
  <div className={styles.footer__content}>
    <div className={styles.footer__brand}>
      <h2>Lovely Fantasy</h2>
      <p>Regalos con flores que enamoran. Detalles únicos para cada ocasión especial.</p>
    </div>

    <div className={styles.footer__links}>
      <h3>Enlaces</h3>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/catalogo">Catalogo</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </div>

    <div className={styles.footer__contact}>
      <h3>Contáctanos</h3>
     <p>
  <FaPhone className={styles.icon} style={{ marginRight: '8px' }} /> 
  +53 58-978-430
</p>



<div className={styles.footer__socials}>
  <a 
    href="https://wa.me/58978430" 
    target="_blank" 
    rel="noreferrer" 
    aria-label="Contactar por WhatsApp"
  >
    <FaWhatsapp className={styles.icon} />
  </a>

  <a 
    href="https://www.facebook.com/analucia.jimeneztrull" 
    aria-label="Visitar página de Facebook"
  >
    <FaFacebook className={styles.icon} />
  </a>

  <a 
    href="https://www.instagram.com/ann_rebel625?igsh=MXJrcHVoeDlleXVqdw==" 
    aria-label="Visitar perfil de Instagram"
  >
    <FaInstagram className={styles.icon} />
  </a>
      </div>
    </div>
  </div>
  <hr/>
  <div className={styles.footer__bottom}>
    <p>© 2025 Lovely Fantasy. Todos los derechos reservados.</p>
  </div>
</footer>

  )



}