'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`search?q=${encodedSearchQuery}`);

    console.log('current query', searchQuery);
  };

  return (
    <form className="flex justify-center-2/3" onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search Summoner?"
      />
    </form>
  );
};

export default SearchInput;
