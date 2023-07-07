import link from 'next/link';
import React from 'react';
import styles from '../page.module.scss';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <a href={link} className={styles.card}>
      <h3 className={styles.h3}>{title}</h3>
      <p className={styles.p}>{description}</p>
    </a>
  );
};

export default Card;
