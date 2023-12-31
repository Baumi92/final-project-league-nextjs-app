'use client';

import { useRouter } from 'next/navigation';
import { logout } from '../(auth)/logout/actions';
import styles from './LogoutButton.module.scss';

export function LogoutButton() {
  const router = useRouter();
  return (
    <form>
      <button
        className={styles.card}
        formAction={async () => {
          await logout();
          router.refresh();
        }}
      >
        Logout
      </button>
    </form>
  );
}
