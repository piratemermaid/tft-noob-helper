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
import costColors from '../../styles/costColors';

export default function ChampSearch({ champs }) {
  const [checkedTraits, setCheckedTraits] = useState([]);
  const [nameFilterInput, setNameFilterInput] = useState('');

  const selectedChampions = useStore((state) => state.selectedChampions);

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

  useEffect(() => {
    setCheckedTraits([]);
  }, []);

  useEffect(() => {
    setNameFilterInput('');
  }, [selectedChampions]);

  return (
    <VStack>
      <SimpleGrid columns={2} sx={{ mb: 4 }} spacing={4}>
        <Box>
          <Text sx={{ mb: 1.5 }}>Search Champs</Text>
          <Input
            placeholder="Champion name"
            value={nameFilterInput}
            onChange={(e) => setNameFilterInput(e.target.value)}
          />
        </Box>
        <Box>
          <Text sx={{ mb: 1.5 }}>Filter by Current Traits</Text>
          <CheckboxGroup>
            <SimpleGrid sx={{ float: 'left' }}>
              {activeTraits?.length ? (
                activeTraits.map((trait) => {
                  return (
                    <Checkbox
                      key={trait}
                      checked={checkedTraits.includes(trait)}
                      onChange={(e) => handleCheck(e, trait)}
                    >
                      {trait}
                    </Checkbox>
                  );
                })
              ) : (
                <></>
              )}
            </SimpleGrid>
          </CheckboxGroup>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={10}>
        {filteredChamps.map((champion) => {
          return (
            <VStack
              key={champion.name}
              sx={{
                m: 1,
                border: `3px solid ${costColors[champion.cost]}`,
                borderRadius: 5,
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
    </VStack>
  );
}
