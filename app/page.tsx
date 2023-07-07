import React from 'react';
import Card from '../app/components/Card';
import styles from './page.module.scss';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className={styles.h1}>Welcome to My League of Legends App</h1>
      <div className={styles.cardContainer}>
        <Card
          title="Matches Site"
          description="Information will be available soon."
          link="http://localhost:3000/matches"
        />
        <Card
          title="Ranks Site"
          description="Information will be available soon."
          link="http://localhost:3000/ranked"
        />
        <Card
          title="Search Summoner"
          description="Information will be available soon."
          link="http://localhost:3000/search"
        />
      </div>
    </div>
  );
};

export default HomePage;
