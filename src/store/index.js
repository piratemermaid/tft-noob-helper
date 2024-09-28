import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      selectedChampions: [],
      handleSelectChampion: (champion) => {
        console.log('>>', champion);
        const selectedChampions = get().selectedChampions;

        if (selectedChampions.includes(champion)) {
          console.log('>> remove:', champion);
          const newSelectedChampions = selectedChampions.filter(
            (selectedChamp) => selectedChamp !== champion
          );
          return set({ selectedChampions: newSelectedChampions });
        }

        console.log('>> add:', champion);
        return set({ selectedChampions: [...selectedChampions, champion] });
      },
    }),
    {
      name: 'persistedState',
    }
  )
);
