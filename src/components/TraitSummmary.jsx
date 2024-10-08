import { SimpleGrid } from '@chakra-ui/react';

export default function TraitSummary({ champions }) {
  const traits = champions.reduce((acc, champion) => {
    champion.traits.forEach((trait) => {
      if (acc[trait]) {
        acc[trait] += 1;
      } else {
        acc[trait] = 1;
      }
    });
    return acc;
  }, {});

  const sortedTraits = Object.entries(traits).sort((a, b) => b[1] - a[1]);

  return (
    <SimpleGrid columns={3}>
      {traits &&
        sortedTraits?.map(([trait, count]) => (
          <div key={trait}>
            {trait}: {count}
          </div>
        ))}
    </SimpleGrid>
  );
}
