import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      selectedChampions: [],
      handleSelectChampion: (championName) => {
        const selectedChampions = get().selectedChampions;

        if (!selectedChampions?.length) {
          return set({ selectedChampions: [{ name: championName }] });
        }

        if (selectedChampions.find((champ) => champ.name === championName)) {
          const newSelectedChampions = selectedChampions.filter(
            (selectedChamp) => selectedChamp.name !== championName
          );
          return set({ selectedChampions: newSelectedChampions });
        }

        return set({
          selectedChampions: [...selectedChampions, { name: championName }],
        });
      },
      setSelectedChampions: (selectedChampions) => set({ selectedChampions }),
      selectedComponents: [],
      setSelectedComponents: (selectedComponents) =>
        set({ selectedComponents }),
      toggleSelectedComponent: (component) => {
        const selectedComponents = get().selectedComponents;

        if (selectedComponents.includes(component)) {
          return set({
            selectedComponents: selectedComponents.filter(
              (selectedComponent) => selectedComponent !== component
            ),
          });
        }

        return set({ selectedComponents: [...selectedComponents, component] });
      },
    }),
    {
      name: 'persistedState',
    }
  )
);
