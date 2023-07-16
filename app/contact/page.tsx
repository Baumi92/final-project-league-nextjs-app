import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.card}>
      <form className={styles.form}>
        <h1 className={styles.h1}>Contact Page</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>E-mail</li>
          <p className={styles.p}>manu.baumi@outlook.com</p>
          <li className={styles.li}>Github</li>
          <p className={styles.p}>https://github.com/Baumi92</p>
          <li className={styles.li}>LinkedIn</li>
          <p className={styles.p}>
            https://www.linkedin.com/in/baumgartnermanuel/
          </p>
        </ul>
      </form>
    </div>
  );
};

export default ContactPage;
