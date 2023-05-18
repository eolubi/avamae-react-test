import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ContentSectionFour.module.css';

function ContentSectionFour() {
  return (
    <section className={styles['content-section-four']}>
      <h2 className={styles['section-title']}>Sed libero justo, lobortis sit amet suscipit non</h2>
      <p className={styles['section-text']}>taria duo ut vis semper abhorreant</p>
      <div className={styles['columns-container']}>
        <div className={styles.column}>
          <p><strong>Pellentesque ac condimentum felis. Suspendisse vel suscipit dolor, nec laoreet nulla. Nam
             auctor ultricies dapibus. Donec ac interdum dui, quis finibus lectus. Cras in ultrices neque.
              Curabitur eget turpis iaculis diam congue sagittis a vel ligula. Mauris ut arcu ex. Nullam
               quis orci ante. Nunc felis massa, posuere non gravida in, commodo in arcu. In feugiat magna
                non volutpat faucibus. Nam aliquam justo nec aliquam iaculis. Integer laoreet pulvinar
                 elit pulvinar fermentum. Morbi vehicula sodales nunc ac varius. Proin porttitor porttitor
                  libero vel pharetra.
            Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes,
             nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula.
              Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum
               malesuada turpis, molestie mattis velit maximus ac. Quisque iaculis hendrerit ex et tincidu
               </strong></p>
        </div>
        <div className={styles.column}>
          <p>magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis 
            lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut
            lorem. Vestibulum rutrum malesuada turpis, molestie mattis velit maximus ac. Quisque iaculis
            hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam.
            Suspendisse tristique vel dui nec imperdiet. Cras mattis ligula quis fermentum suscipit.
            et elementum arcu, sit amet porttitor diam. Curabitur euismod, erat vitae tristique
            volutpat, augue lectus dignissim justo, at faucibus orci est a elit.
            Sed sed sapien pretium, maximus felis vel, mollis elit. Sed libero justo, lobortis sit amet 
            suscipit non, auctor non libero. Maecenas quis nisl eget enim porta blandit a nec sapien. 
            Mauris porttitor lorem ut egestas euismod. Donec molestie tempor nibh, nec venenatis arcu 
            ullamcorper sit amet. Nulla facilisi. Proin cursus neque ut tortor scelerisque, at iaculis 
            nunc ornare. Pellentesque non nunc nulla. Interdum et malesuada fames ac ante ipsum primis in
             faucibus. Aenean et sodales diam.</p>
        </div>
        <div className={styles.column}>
          <p> quis nisl eget enim porta blandit a nec sapien. Mauris porttitor lorem ut egestas euismod.
             Donec molestie tempor nibh, nec venenatis arcu ullamcorper sit amet. Nulla facilisi. Proin 
             cursus neque ut tortor scelerisque, at iaculis nunc ornare. Pellentesque non nunc nulla. 
             Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et sodales diam. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor magna augue, non auctor
               quam placerat nec. Nulla sem urna, dictum sed nisi in, viverra rutrum neque. Aliquam ipsum 
               nunc, porta a augue nec, fringilla mollis arcu. In a vehicula odio. Praesent vulputate 
               turpis eleifend egestas ultrices. Proin nec sagittis nibh. Curabitur fringilla felis a 
               porttitor maximus. Vestibulum aliquet ante nec leo malesuada porttitor sit amet et magna.</p>
        </div>
      </div>
      <Link to="/contact-us" className={styles['contact-button-link']}>
        <button className={styles['contact-button']}>Contact Us</button>
      </Link>
    </section>
  );
}

export default ContentSectionFour;
