import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';
import styles from '../page.module.scss';

type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <>
      <form className={styles.redirect}>
        <div>Username: {user.username}</div>
      </form>
    </>
  );
}
