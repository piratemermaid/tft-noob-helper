import React from 'react';

import { useStore } from '../store';
import CURRENT_CHAMPIONS from '../data/currentChampions';

export const useActiveTraits = () => {
  const selectedChampions = useStore((state) => state.selectedChampions);
  const selectedChampionData = CURRENT_CHAMPIONS.filter((champion) =>
    selectedChampions?.includes(champion.name)
  );

  return React.useMemo(() => {
    if (!selectedChampionData?.length) return [];

    const allActiveTraits = selectedChampionData.reduce((acc, champion) => {
      return [...acc, ...champion.traits];
    }, []);

    return [...new Set(allActiveTraits)];
  }, [selectedChampions]);
};
