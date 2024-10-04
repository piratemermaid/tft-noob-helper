import ChampionCard from './ChampionCard';

export default function ChampionList({
  champions,
  type,
  checkedTraits,
  includeItems = false,
  sortBy = 'cost',
}) {
  const sortedChampions = [...champions].sort((a, b) => a[sortBy] - b[sortBy]);

  return (
    <>
      {sortedChampions?.map((champion) => (
        <ChampionCard
          key={champion.name}
          champion={champion}
          checkedTraits={checkedTraits}
          type={type}
          includeItems={includeItems}
        />
      ))}
    </>
  );
}
