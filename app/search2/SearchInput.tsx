import React from 'react';

interface SummonerDataProps {
  data: any;
}

const SummonerData: React.FC<SummonerDataProps> = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <div>No data available</div>;
  }

  const renderData = () => {
    return Object.entries(data).map(([key, value]) => (
      <div key={key}>
        <strong>{key}: </strong>
        {typeof value === 'object' ? JSON.stringify(value) : value}
      </div>
    ));
  };

  return (
    <div>
      <h2>Summoner Data</h2>
      {renderData()}
    </div>
  );
};

export default SummonerData;
