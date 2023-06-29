import './globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { getUserBySessionToken } from '../database/users';
import Footer from './common/footer';
import { LogoutButton } from './components/LogoutButton';
import Navbar from './components/Navigation';
import styles from './layout.module.scss';
import HomePage from './page';
import SearchInput from './search2/SearchInput';

const myFont = localFont({
  src: [
    {
      path: './../../../Downloads/Spiegel-Regular.otf',
    },
  ],
});

export const metadata = {
  title: 'League App',
  description: 'Generated by create next app',
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <html lang="en">
      <body className={myFont.className}>
        <div>
          <div className={styles.buttons}>
            {user ? (
              <>
                <div className={styles.name}>{user.username}</div>
                <LogoutButton />
              </>
            ) : (
              <>
                <button className={styles.buttons}>
                  <a className={styles.buttons} href="/register">
                    register
                  </a>
                </button>
                <button className={styles.buttons}>
                  <a className={styles.buttons} href="/login">
                    login
                  </a>
                </button>
              </>
            )}
          </div>
          <Navbar />
          <div className="flex flex-lol gap.10 items-center p-6">
            <div className={styles.searchinput}>
              <SearchInput />
            </div>
            {children}

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
