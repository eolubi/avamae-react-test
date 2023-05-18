import React from 'react';
import styles from '../styles/ContentSectionThree.module.css';
import SectionThreeImage from "../assets/shutterstock_1302552622.jpg";

function ContentSectionThree() {
  return (
    <section className={styles['content-section-three']}>
      <div className={styles['background-image']}>
        <img className={styles['image']} src={SectionThreeImage} alt="Image-section-three" />
      </div>
      <div className={styles['content-container']}>
        <div className={styles['box-container']}>
          <h2 className={styles['box-title']}>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h2>
          <p className={styles['box-paragraph']}>Cras sit amet dapibus magna. Orci varius natoque penatibus
           et magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis 
           lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut 
           lorem. Vestibulum rutrum malesuada turpis, molestie mattis velit maximus ac. Quisque iaculis 
           hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam.</p>
          <button className={styles['login-button']}>Log In</button>
        </div>
      </div>
    </section>
  );
}

export default ContentSectionThree;

