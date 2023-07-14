import '../app/styles/globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { getUserBySessionToken } from '../database/users';
import Footer from './common/footer';
import { LogoutButton } from './components/LogoutButton';
import Navibar from './components/Navibar';
import Navbar from './components/Navigation';
import styles from './layout.module.scss';

const myFont = localFont({
  src: [
    {
      path: './../public/a-spiegel.otf',
    },
  ],
});
myFont.className = ''; // Set className to an empty string to remove the extra attributes

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
        <Navibar />
        <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>
            <div className={styles.buttons}>
              {user ? (
                <>
                  <div className={styles.name}>{user.username}</div>
                  <LogoutButton />
                </>
              ) : (
                <>
                  <a className={styles.buttons} href="/register">
                    Register
                  </a>
                  <a className={styles.buttons} href="/login">
                    Login
                  </a>
                </>
              )}
            </div>

            <main className="content">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
