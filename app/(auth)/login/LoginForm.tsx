'use client';
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';
import styles from './LoginForm.module.scss';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function login() {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);
      console.log(data.error);
      return;
    }

    router.push(
      getSafeReturnToPath(props.returnTo) ||
        (`/profile/${data.user.username}` as Route),
    );
    // we may have in the future revalidatePath()
    router.refresh();
  }

  return (
    <div className={styles.card}>
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <label className={styles.label}>
          Username:
          <input
            className={styles.input}
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            value={password}
            type="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <button className={styles.button} onClick={async () => await login()}>
          Log in
        </button>
        {error !== '' && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
}
