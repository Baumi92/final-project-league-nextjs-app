import React from 'react';
import styles from './Navibar.module.scss';

const Navibar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navibar;
