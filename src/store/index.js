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

        const name = champion.replaceAll(' ', '_');

        const currentUrl = `https://tftactics.gg/champions/${name}
        )}`;
        const revivalUrl = `https://leagueoflegends.fandom.com/wiki/${name}/TFT#Set_5.5`;

        // Change this for set
        const url = currentUrl;
        // const url = revivalUrl;

        console.log(champion, '-', url);

        return set({ selectedChampions: [...selectedChampions, champion] });
      },
      setSelectedChampions: (selectedChampions) => set({ selectedChampions }),
    }),
    {
      name: 'persistedState',
    }
  )
);
