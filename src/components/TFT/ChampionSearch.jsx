import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Center,
  Checkbox,
  Flex,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import ChampionImage from '../images/ChampionImage';
import { useStore } from '../../store';
import { useActiveTraits } from '../../hooks/useActiveTraits';
import TRAITS from '../../data/tft/set13/set13Traits';
import CHAMPS from '../../data/tft/set13/set13Champions';
import costColors from '../../styles/costColors';

export default function ChampSearch({ champs }) {
  const [nameFilterInput, setNameFilterInput] = useState('');
  const [sortedTraits, setSortedTraits] = useState(TRAITS);

  const selectedChampions = useStore((state) => state.selectedChampions);
  const handleSelectChampion = useStore((state) => state.handleSelectChampion);
  const selectedTraits = useStore((state) => state.selectedTraits);
  const setSelectedTraits = useStore((state) => state.setSelectedTraits);

  const activeTraits = useCallback(useActiveTraits(champs), [
    selectedChampions,
  ]);

  const filterByTraits = (champion) => {
    return champion.traits.some((trait) => selectedTraits.includes(trait));
  };

  const filterByName = (champion) => {
    return champion.name.toLowerCase().includes(nameFilterInput.toLowerCase());
  };

  const filteredChamps = champs.filter((champion) => {
    if (!selectedTraits.length && !nameFilterInput) {
      return true;
    }

    if (nameFilterInput) {
      return filterByName(champion);
    }

    if (selectedTraits.length) {
      return filterByTraits(champion);
    }

    return filterByTraits(champion);
  });

  const handleCheck = (e, trait) => {
    if (e.target.checked) {
      setSelectedTraits([...selectedTraits, trait]);
    } else {
      const newFilterTraits = selectedTraits.filter(
        (filterTrait) => filterTrait !== trait
      );
      setSelectedTraits(newFilterTraits);
    }
  };

  useEffect(() => {
    setNameFilterInput('');
  }, [selectedChampions]);

  useEffect(() => {
    const activeSorted = TRAITS.filter((trait) =>
      activeTraits.includes(trait.name)
    ).sort();
    const inactiveSorted = TRAITS.filter(
      (trait) => !activeTraits.includes(trait.name)
    ).sort();

    setSortedTraits([...activeSorted, ...inactiveSorted]);
  }, [activeTraits]);

  return (
    <Flex gap={4}>
      <Box flex={1}>
        <SimpleGrid columns={5}>
          {filteredChamps.map((champion) => {
            const isSelected = selectedChampions.some(
              (champ) => champ.name === champion.name
            );

            return (
              <VStack
                key={champion.name}
                onClick={() => handleSelectChampion(champion.name)}
                sx={{
                  m: 1,
                  py: 1,
                  border: `3px solid ${costColors[champion.cost]}`,
                  borderRadius: 5,
                  '&:hover': { cursor: 'pointer' },
                  bg: isSelected ? 'gray.500' : 'gray.700',
                }}
              >
                <Center>
                  <Box>
                    <Text
                      sx={{
                        textAlign: 'center',
                        fontSize: 13,
                        color: 'gray.200',
                      }}
                    >
                      {champion.name}
                    </Text>
                    <Center>
                      <ChampionImage name={champion.name} />
                    </Center>
                    {champion.traits.map((trait) => (
                      <Text
                        key={trait}
                        sx={{
                          textAlign: 'left',
                          fontSize: 14,
                          color: activeTraits.includes(trait) ? 'teal.400' : '',
                          fontWeight: activeTraits.includes(trait) ? 600 : 400,
                        }}
                      >
                        {trait}
                      </Text>
                    ))}
                  </Box>
                </Center>
              </VStack>
            );
          })}
        </SimpleGrid>
      </Box>

      <VStack>
        <Box>
          <Text
            sx={{
              mb: 1.5,
              fontSize: 20,
              color: selectedChampions?.length === 10 ? 'red.500' : 'blue.300',
            }}
          >
            Team Size: <b>{selectedChampions?.length ?? 0}</b>
          </Text>
        </Box>

        <Box>
          <Text sx={{ mb: 1.5, color: 'purple.300' }}>Search by Name</Text>
          <Input
            placeholder="Champion name"
            value={nameFilterInput}
            onChange={(e) => setNameFilterInput(e.target.value)}
          />
        </Box>

        <Box sx={{ width: '100%' }}>
          <Text sx={{ mb: 1.5, color: 'purple.300' }}>Search by Trait</Text>
          <VStack>
            {sortedTraits.map((trait) => {
              const isActive = activeTraits?.includes(trait.name);
              const numActive = selectedChampions?.filter((champ) => {
                const champData = CHAMPS.find(
                  (champion) => champion.name === champ.name
                );

                return champData.traits.includes(trait.name);
              }).length;

              return (
                <Checkbox
                  key={trait.name}
                  defaultChecked={selectedTraits.includes(trait.name)}
                  value={selectedTraits.includes(trait.name)}
                  onChange={(e) => handleCheck(e, trait.name, e)}
                  sx={{
                    width: '100%',
                    color: isActive ? 'teal.400' : '',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {trait.name} {numActive > 0 && `(${numActive})`}
                </Checkbox>
              );
            })}
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
}
