import React from 'react';
import Card from '../app/components/Card';
import styles from './page.module.scss';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className={styles.h1}>Welcome to My League of Legends App</h1>
      <div className={styles.textContainer}>
        <p className={styles.introText}>
          In this app, you can explore various features related to League of
          Legends. Whether you're looking to view your match history, track your
          rank stats, or search for summoner profiles, my app provides you with
          the tools and information to enhance your Gameplay experience.
        </p>
        <p className={styles.introText}>
          Get ready to dive deeper into the world of League of Legends with My
          League of Legends App. Start exploring now!
        </p>
        <p className={styles.introText}>
          {' '}
          Please Sign Up or Log In, before you can start enjoying the App
        </p>
      </div>
      <div className={styles.cardContainer}>
        <Card
          title="Matches Site"
          description="Search for your Matchhistory."
          link="/matches"
        />
        <Card
          title="Ranks Site"
          description="Search for your Rank Stats."
          link="/ranked"
        />
        <Card
          title="Search Summoner"
          description="Search for your Summoner Name."
          link="/search"
        />
      </div>
    </div>
  );
};

export default HomePage;
