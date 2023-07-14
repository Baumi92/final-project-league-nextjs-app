import { cookies } from 'next/headers';
import React from 'react';
import { getUserBySessionToken } from '../../database/users';
import styles from './navigation.module.scss';

export const Navbar = async () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);
  console.log(user);
  return (
    <div>
      <ul className={styles.ul}>
        <li>
          <a href="/">
            <img
              src="/LoL_icon.svg.png"
              alt="League of Legends"
              width={20}
              height={20}
            />
            Overview
          </a>
        </li>
        <li>
          <a href="/matches">Match History</a>
        </li>
        <li>
          <a href="/ranked">Rank History</a>
        </li>
        <li>
          <a href="/search"> Search SummonerName</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
