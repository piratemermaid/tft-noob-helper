import React from 'react';

import { useStore } from '../store';
import CURRENT_CHAMPIONS from '../data/currentChampions';

export const useSelectedTraits = () => {
  const selectedChampions = useStore((state) => state.selectedChampions);
  const selectedChampionData = CURRENT_CHAMPIONS.filter((champion) =>
    selectedChampions?.includes(champion.name)
  );

  return React.useMemo(() => {
    if (!selectedChampionData?.length) return [];

    const allTraits = selectedChampionData.reduce((acc, champion) => {
      return [...acc, ...champion.traits];
    }, []);

    return [...new Set(allTraits)];
  }, [selectedChampions]);
};
