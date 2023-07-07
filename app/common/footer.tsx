import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Footer Section</h2>
      <div className={styles.div}>
        <ul className={styles.div}>
          <li>available soon</li>
          <li>available soon</li>
          <li>available soon</li>
          <li>available soon</li>
          <li>available soon</li>
          <li>available soon</li>
        </ul>
      </div>
    </footer>
  );
}
