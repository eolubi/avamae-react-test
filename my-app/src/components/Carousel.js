import React, { useState, useEffect, useRef } from 'react';
import { fetchBannerDetails } from '../api'; // Adjust the path based on your project structure
// Rest of the code...
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from '../styles/Carousel.module.css';
import "swiper/swiper.css";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';



function Carousel() {
    const [carouselData, setCarouselData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchBannerDetails();
            setCarouselData(data);
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
      
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        clickable: true
      }
    };
  
    return (
      <div className={styles['fix-in-place']}>
        <Swiper {...params} pagination={true} modules={[Pagination, Navigation]} navigation={true}>
          {carouselData.map((item) => (
            <SwiperSlide key={item.Title}>
              <div className={styles['swiper-slide']}>
                <img src={item.ImageUrl} alt={item.Title} />
              </div>
              <div className={styles['content-container']}>
                <div className={styles['text-container']}>
                  <h2 className={styles['section-title']}>{item.Title}</h2>
                  <p className={styles['section-text']}>{item.Subtitle}</p>
                  <Link to="/contact-us" className={styles['contact-button-link']}>
                    <button className={styles['contact-button']}>Contact Us</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
    
  }
  
  export default Carousel;