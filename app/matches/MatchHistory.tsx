const MatchHistoryById = ({ matchData }) => {
  return (
    <div>
      {matchData ? (
        <pre>{JSON.stringify(matchData, null, 2)}</pre>
      ) : (
        <p>Loading match history...</p>
      )}
    </div>
  );
};

export default MatchHistoryById;
