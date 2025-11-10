import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

import styles from "./navbar.module.css";
import Capture1 from "./../../images/Untitled design (3).png";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar variant="dark" expand="lg" className={styles.main__container}>
        <img className={styles.image} src={Capture1} alt="logo" />
        <Button variant="light" onClick={handleShow}  aria-label="Abrir menú de navegación" className={styles.menu_btn} >
          <IoMenu className={styles.menu_icon} />
        </Button>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={styles.menu_links}>
            <Nav.Link className={styles.btn__displacement} href="/">Inicio</Nav.Link>
            <Nav.Link className={styles.btn__displacement} href="/catalogo">Catalogo</Nav.Link>
            <Nav.Link className={styles.btn__displacement} href="/mi-carrito">Mi carrito</Nav.Link>
            <Nav.Link className={styles.btn__displacement} href="/contacto">Contacto</Nav.Link>
          </Nav>

          <div className={styles.btn__social__media__container}>
            <a className={styles.btn__social__media} href="https://facebook.com" target="_blank"><FaFacebookF className={styles.icon} /></a>
            <a className={styles.btn__social__media} href="https://instagram.com" target="_blank"><FaInstagram className={styles.icon} /></a>
            <a className={styles.btn__social__media} href="https://wa.me/5355555555" target="_blank"><FaWhatsapp className={styles.icon} /></a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
