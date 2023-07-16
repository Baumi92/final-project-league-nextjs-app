import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getUserBySessionToken } from '../../database/users';
import { LogoutButton } from './LogoutButton';
import styles from './Navibar.module.scss';

const Navibar: React.FC = async () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <Image src="/LoL_icon.svg.png" alt="Favicon" width={50} height={50} />
      </a>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link className={styles.menuItem} href="/contact" />
          <a className={styles.contact}>Contact</a>
        </li>
      </ul>

      <div className={styles.buttons}>
        {user ? (
          <>
            <div className={styles.name}>{user.username}</div>
            <LogoutButton />
          </>
        ) : (
          <>
            <div className={styles.authButtons}>
              <a className={styles.registerButton} href="/register">
                Register
              </a>
              <a className={styles.loginButton} href="/login">
                Login
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navibar;
