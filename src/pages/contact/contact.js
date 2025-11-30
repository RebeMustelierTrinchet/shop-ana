import React from 'react';
import styles from './contact.module.css';
import I1 from "./../../images/I1.webp"
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>

    <img src={I1} className={styles.img}/>
      <h1 className={styles.title}>Contáctanos</h1>

      <div className={styles.content}>
        <div className={styles.infoSection}>
          <h2>Lovely Fantasy</h2>
          <p><FaMapMarkerAlt className={styles.icon} /> La Habana, Cuba</p>
          <p><FaPhone className={styles.icon} /> +53 123 456 789</p>
          <p><FaEnvelope className={styles.icon} /> lovelyfantasy@flores.cu</p>

          <div className={styles.socials}>
            <a href="https://wa.me/5355555555" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
