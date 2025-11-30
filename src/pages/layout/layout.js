import React from 'react';
import styles from "./layout.module.css";
import NavBar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';

import { db } from "../../firebase/firebase";


export default function Layout({ children }) {
     console.log("Firestore listo:", db);
    return (
       
        <div className={styles.main__container}>
            <div   className={styles.layout}>
                <NavBar />

                
                <main className={styles.body}>
                    {children}
                </main>
                
                <Footer />
            </div>
        </div>
    )
}