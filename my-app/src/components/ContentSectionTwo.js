import React from 'react';

import styles from '../styles/ContentSectionTwo.module.css';

import SectionTwoImage from '../assets/shutterstock_696636415.jpg';
import { Link } from 'react-router-dom';

function ContentSectionTwo() {
  return (
    <section className={styles['content-section-two']}>
  <div className={styles['content-container']}>
    <div className={styles['text-container']}>
      <h2 className={styles['section-title']}>Justo petentium te vix, scripta regione urbanitas</h2>
      <div className={styles['text-content']}>
        <p className={styles['section-paragraph']}>Populo facilisi nam no, dolor deleniti deseruisse ne cum, 
        nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix. Ad vix 
        legere impetus, nam consequat reformidans ut. No sit consul integre voluptatibus, omnium 
        lucilius ne mel. Et ancillae recteque deterruisset sed, ea nec odio option, ferri assum 
        eum et.</p>
        <p className={styles['bullet-point']}>• Te pri efficiendi assueverit, id molestie suavitate per</p>
        <p className={styles['bullet-point']}>• Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur</p>
        <p className={styles['bullet-point']}>• Ut qui dicant copiosae interpretaris</p>
        <p className={styles['bullet-point']}>• Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant</p>
      </div>
      <Link to="/about-us" className={styles['contact-button-link']}>
        <button className={styles['learn-more-button']}>About Us</button>
      </Link>
    </div>
    <div className={styles['image-container']}>
      <img className={styles['chairs-image']} src={SectionTwoImage} alt="Image-section-two" />
    </div>
  </div>
</section>

  );
}

export default ContentSectionTwo;

