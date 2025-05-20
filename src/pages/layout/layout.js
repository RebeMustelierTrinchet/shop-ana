import React from 'react';
import styles from "./layout.module.css";
import NavBar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';

export default function Layout({ children }) {
    return (
        <div className={styles.main__container}>
            <div   className={styles.layout}>
                <NavBar />

                <div className={styles.body}>
                    {children}
                </div>
                
                <Footer />
            </div>
        </div>
    )
}