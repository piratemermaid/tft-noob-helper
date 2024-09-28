import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      selectedChampions: [],
      handleSelectChampion: (champion) => {
        const selectedChampions = get().selectedChampions;

        if (selectedChampions.includes(champion)) {
          const newSelectedChampions = selectedChampions.filter(
            (selectedChamp) => selectedChamp !== champion
          );
          return set({ selectedChampions: newSelectedChampions });
        }

        return set({ selectedChampions: [...selectedChampions, champion] });
      },
    }),
    {
      name: 'persistedState',
    }
  )
);
