import React from 'react';
import styles from './baner.module.css'
import banere from '../../images/open2.jpg'


const baner = () => {
  return ( 
      <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1>Welcome to</h1>
            <p>
               Responsive Store
            </p>
          </div>
      </div>
   );
}
 
export default baner;