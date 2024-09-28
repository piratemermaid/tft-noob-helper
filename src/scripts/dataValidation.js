export const validateTraits = (champions, traits) => {
  const traitsByName = traits.map((trait) => trait.name);

  const invalidChampions = champions.filter((champion) =>
    champion.traits.some((trait) => !traitsByName.includes(trait))
  );

  if (invalidChampions.length > 0) {
    console.error('INVALID TRAITS FOUND:');

    for (const champ of invalidChampions) {
      console.log(champ.name, `- https://tftactics.gg/champions/${champ.name}`);
    }
  } else {
    console.log('All champions have valid traits.');
  }
};
