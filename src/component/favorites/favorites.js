import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCarrito } from "../../redux/cartSlice";
import { removeFromFavorites } from '../../redux/favSlice';
import { selectFavoritesMemoized } from "../../redux/selectors";
import styles from './favorites.module.css';

import { FaCartShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import Card from '../card/card';


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './favorites.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Fav() {
  const dispatch = useDispatch();
  const myFavorites = useSelector(selectFavoritesMemoized);

  useEffect(() => {
    console.log("Favoritos actualizados:", myFavorites);
  }, [myFavorites]);

  const handleAddToCart = (product) => {
    dispatch(addToCarrito(product));
  };

  const handleRemoveFavorite = (product) => {
    dispatch(removeFromFavorites(product));
  };

  if (myFavorites.length === 0) {
    return (
      <div className={styles.cart}>
        <h2>Mis Favoritos</h2>
        <p>No tienes productos en favoritos.</p>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Mis Favoritos</h2>
      <div className={styles.cartItems}>
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
          centerInsufficientSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
       
          
          {myFavorites.map((item) => (
          <SwiperSlide className={styles.mySwiperSlice}>

          <Card key={item.id} product={item} />
           </SwiperSlide>
        ))}
       
      </Swiper>
      </div>
    </div>
  );
}
