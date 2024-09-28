import React from 'react';

import { useStore } from '../store';

export const useActiveTraits = (championList) => {
  const selectedChampions = useStore((state) => state.selectedChampions);
  const selectedChampionData = championList.filter((champion) =>
    selectedChampions?.includes(champion.name)
  );

  return React.useMemo(() => {
    if (!selectedChampionData?.length) return [];

    const allActiveTraits = selectedChampionData.reduce((acc, champion) => {
      return [...acc, ...champion.traits];
    }, []);

    return [...new Set(allActiveTraits)];
  }, [selectedChampionData]);
};
