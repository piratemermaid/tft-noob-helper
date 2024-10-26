import { useStore } from '../../store';
import ChampionCard from './ChampionCard';

export default function ChampionList({
  champions,
  type,
  checkedTraits,
  isSelectedList = false,
  sortBy = 'cost',
}) {
  const selectedChampions = useStore((state) => state.selectedChampions);

  const sortedChampions = champions?.sort((a, b) => {
    if (isSelectedList) {
      const aSelected = selectedChampions.find(
        (champ) => champ.name === a.name
      );
      const bSelected = selectedChampions.find(
        (champ) => champ.name === b.name
      );
      if (aSelected.pinned && !bSelected.pinned) {
        return -1;
      }

      if (bSelected.pinned && !aSelected.pinned) {
        return 1;
      }
    }

    return a[sortBy] - b[sortBy];
  });

  return (
    <>
      {sortedChampions?.map((champion) => (
        <ChampionCard
          key={champion.name}
          champion={champion}
          checkedTraits={checkedTraits}
          type={type}
          isSelectedList={isSelectedList}
        />
      ))}
    </>
  );
}
