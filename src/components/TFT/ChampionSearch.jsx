import { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
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
  const [checkedTraits, setCheckedTraits] = useState([]);
  const [nameFilterInput, setNameFilterInput] = useState('');

  const selectedChampions = useStore((state) => state.selectedChampions);
  const handleSelectChampion = useStore((state) => state.handleSelectChampion);

  const activeTraits = useActiveTraits(champs);

  const filterByTraits = (champion) => {
    return champion.traits.some((trait) => checkedTraits.includes(trait));
  };

  const filterByName = (champion) => {
    return champion.name.toLowerCase().includes(nameFilterInput.toLowerCase());
  };

  const filteredChamps = champs.filter((champion) => {
    if (!checkedTraits.length && !nameFilterInput) {
      return true;
    }

    if (nameFilterInput) {
      return filterByName(champion);
    }

    if (checkedTraits.length) {
      return filterByTraits(champion);
    }

    return filterByTraits(champion);
  });

  const handleCheck = (e, trait) => {
    if (e.target.checked) {
      setCheckedTraits([...checkedTraits, trait]);
    } else {
      const newFilterTraits = checkedTraits.filter(
        (filterTrait) => filterTrait !== trait
      );
      setCheckedTraits(newFilterTraits);
    }
  };

  const traitsSorted = TRAITS.sort((a, b) => {
    const isActiveA = activeTraits?.includes(a.name);
    const isActiveB = activeTraits?.includes(b.name);

    if (isActiveA && !isActiveB) {
      return -1;
    }

    if (isActiveB && !isActiveA) {
      return 1;
    }

    return a.name - b.name;
  });

  useEffect(() => {
    setCheckedTraits([]);
  }, []);

  useEffect(() => {
    setNameFilterInput('');
  }, [selectedChampions]);

  return (
    <>
      <SimpleGrid columns={5} sx={{ width: '68vw', float: 'left' }}>
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
                border: `3px solid ${costColors[champion.cost]}`,
                borderRadius: 5,
                '&:hover': { cursor: 'pointer' },
                backgroundColor: isSelected ? 'gray.500' : 'gray.700',
              }}
            >
              <Center>
                <Box>
                  <Center>
                    <ChampionImage name={champion.name} />
                  </Center>
                  <Text sx={{ fontSize: 13 }}>{champion.name}</Text>
                </Box>
              </Center>
            </VStack>
          );
        })}
      </SimpleGrid>

      <VStack sx={{ width: '20vw', float: 'right', textAlign: 'left' }}>
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
          <CheckboxGroup sx={{}}>
            <VStack>
              {traitsSorted.map((trait) => {
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
                    checked={checkedTraits.includes(trait.name)}
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
          </CheckboxGroup>
        </Box>
      </VStack>
    </>
  );
}
