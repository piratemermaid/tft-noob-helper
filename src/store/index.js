import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      selectedChampions: [],
      handleSelectChampion: (champion) => {
        const selectedChampions = get().selectedChampions;

        if (!selectedChampions?.length) {
          return set({ selectedChampions: [champion] });
        }

        if (selectedChampions.includes(champion)) {
          const newSelectedChampions = selectedChampions.filter(
            (selectedChamp) => selectedChamp !== champion
          );
          return set({ selectedChampions: newSelectedChampions });
        }

        // TODO: clean up after data is validated
        console.log(
          champion,
          `- https://tftactics.gg/champions/${champion.replaceAll(' ', '_')}`
        );

        return set({ selectedChampions: [...selectedChampions, champion] });
      },
      setSelectedChampions: (selectedChampions) => set({ selectedChampions }),
    }),
    {
      name: 'persistedState',
    }
  )
);
