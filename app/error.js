'use client';
import styles from './error.module.scss';

export default function RootError() {
  return (
    <div>
      <h1 className={styles.h1}>Ups, something went wrong</h1>
    </div>
  );
}
