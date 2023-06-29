import { cookies } from 'next/headers';
import React from 'react';
import { getUserBySessionToken } from '../../database/users';
import { LogoutButton } from './LogoutButton';
import styles from './Navigation.module.scss';

export const Navbar = async () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <div>
      <ul className={styles.ul}>
        <li>
          <a href="/">Overview</a>
        </li>
        <li>
          <a href="/matches"> Matches</a>
        </li>
        <li>
          <a href="/ranked"> Ranks</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
