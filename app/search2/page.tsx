import React from 'react';
import SummonerData from '../search2/SearchInput';

interface SearchPageProps {
  data: any;
}

const SearchPage: React.FC<SearchPageProps> = ({ data }) => {
  return (
    <div>
      <h1>Search Page</h1>
      <SummonerData data={data} />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch the data from the API endpoint
  const res = await fetch('http://localhost:3000/api/summoner');
  const { data } = await res.json();

  // Pass the data as props to the page component
  return { props: { data } };
}

export default SearchPage;
