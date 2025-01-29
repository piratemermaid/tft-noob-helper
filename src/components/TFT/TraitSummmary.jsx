import { Box, Text, VStack } from '@chakra-ui/react';
import TRAITS from '../../data/tft/set13/set13Traits';

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

  const getActivatedLevel = (traitData, count) => {
    if (!traitData?.activateOn) return null;

    let lowestActivateLevel = 0;

    Object.entries(traitData.activateOn).forEach(([level, requiredCount]) => {
      if (count >= requiredCount) {
        lowestActivateLevel = level;
      }
    });

    return lowestActivateLevel > 0 ? lowestActivateLevel : null;
  };

  return (
    <VStack align="start">
      {traits &&
        sortedTraits?.map(([trait, count]) => {
          const traitData = TRAITS.find((t) => t.name === trait);

          const activatedLevel = getActivatedLevel(traitData, count);

          return (
            <Box key={trait}>
              <Text key={trait}>
                {trait}: {count} {activatedLevel && `(${activatedLevel})`}
              </Text>
              {traitData?.bonuses && (
                <VStack>
                  {traitData.bonuses?.map((bonus) => (
                    <Text key={bonus} sx={{ fontSize: 14, color: 'gray.400' }}>
                      - {bonus}
                    </Text>
                  ))}
                </VStack>
              )}
            </Box>
          );
        })}
    </VStack>
  );
}
