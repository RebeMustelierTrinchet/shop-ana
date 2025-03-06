import React from 'react';
import styles from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.main__container}>
            <div   className={styles.layout}>
                {/* <NavBar /> */}

                <div className={styles.body}>
                    {children}
                </div>
                <div className={styles.footer}>
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    )
}