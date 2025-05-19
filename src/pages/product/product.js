import React from "react";
import products from "./../../var/var_elemnts";
import styles from "./product.module.css";
import Card from "../../component/card/card";
import Cart from "../../component/my_cart/my_cart";
import Fav from "../../component/favorites/favorites";

export default function Product() {
  return (
    <div className={styles.main_Container}>
        <Cart/>
        <Fav/>
      
    </div>
  );
}
