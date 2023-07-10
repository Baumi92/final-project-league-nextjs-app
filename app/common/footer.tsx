import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© Manuel Baumgartner since 2023</div>
    </footer>
  );
}
