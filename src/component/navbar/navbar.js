 import React from "react";
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
import styles from "./navbar.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

 export default function NavBar(){
    return(
        <div>
             <Navbar variant="dark" collapseOnSelect expand="lg"  className={styles.main__container}>
      <Container>
        <Navbar.Brand href="/" >
                <div>
                  logo
                    {/* <img className={styles.image} src={Capture1}></img> */}
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.btn__displacement} href="/mi-carrito">Mi carrito</Nav.Link>
            {/* <Nav.Link className={styles.btn__displacement} href="/bookOnline">Book Online</Nav.Link> */}
    
          </Nav>
          <Nav className={styles.btn__social__media__container}>
            <Nav.Link className={styles.btn__social__media} href="/"><FaFacebookF className={styles.icon}/></Nav.Link>
            <Nav.Link className={styles.btn__social__media} href="/"><FaInstagram className={styles.icon}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
 }