import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      selectedChampions: [],
      handleSelectChampion: (championName) => {
        const selectedChampions = get().selectedChampions;

        if (!selectedChampions?.length) {
          return set({
            selectedChampions: [{ name: championName, pinned: false }],
          });
        }

        if (selectedChampions.find((champ) => champ.name === championName)) {
          const newSelectedChampions = selectedChampions.filter(
            (selectedChamp) => selectedChamp.name !== championName
          );
          return set({ selectedChampions: newSelectedChampions });
        }

        return set({
          selectedChampions: [
            ...selectedChampions,
            { name: championName, pinned: false },
          ],
        });
      },
      setSelectedChampions: (selectedChampions) => set({ selectedChampions }),
      togglePinChampion: (championName) =>
        set({
          selectedChampions: get().selectedChampions.map((champion) =>
            champion.name === championName
              ? { ...champion, pinned: !champion.pinned }
              : champion
          ),
        }),
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
      selectedTraits: [],
      selectTrait: (trait) => {
        const selectedTraits = get().selectedTraits;

        const newSelectedTraits = selectedTraits.includes(trait)
          ? selectedTraits.filter((selectedTrait) => selectedTrait !== trait)
          : [...selectedTraits, trait];

        set({ selectedTraits: newSelectedTraits });
      },
      setSelectedTraits: (selectedTraits) => set({ selectedTraits }),
    }),
    {
      name: 'persistedState',
    }
  )
);
