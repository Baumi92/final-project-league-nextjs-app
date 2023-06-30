import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch(
    'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Wilde%20H%C3%AClde',
  );
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return repo.stargazers_count;
}
