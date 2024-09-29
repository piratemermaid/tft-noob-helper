import React from 'react';
import {
  Box,
  Checkbox,
  CheckboxGroup,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import ChampionList from './ChampionList';
import TraitSummary from './TraitSummmary';
import { useStore } from '../store';
import { useActiveTraits } from '../hooks/useActiveTraits';

export default function TeamBuilder({ championList }) {
  const [checkedTraits, setCheckedTraits] = React.useState([]);
  const [nameFilterInput, setNameFilterInput] = React.useState('');

  const selectedChampions = useStore((state) => state.selectedChampions);

  const activeTraits = useActiveTraits(championList);

  const selectedChampionData = championList.filter((champion) =>
    selectedChampions?.includes(champion.name)
  );

  const filterByTraits = (champion) => {
    return champion.traits.some((trait) => checkedTraits.includes(trait));
  };

  const filterByName = (champion) => {
    return champion.name.toLowerCase().includes(nameFilterInput.toLowerCase());
  };

  const filteredChampionsList = championList.filter((champion) => {
    if (!checkedTraits.length && !nameFilterInput) {
      return true;
    }

    if (checkedTraits.length && !nameFilterInput) {
      return filterByTraits(champion);
    }

    if (!checkedTraits.length && nameFilterInput) {
      return filterByName(champion);
    }

    return filterByTraits(champion) && filterByName(champion);
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

  React.useEffect(() => {
    setCheckedTraits([]);
  }, []);

  React.useEffect(() => {
    setNameFilterInput('');
  }, [selectedChampions]);

  return (
    <SimpleGrid columns={2}>
      <GridItem>
        <SimpleGrid spacing={4}>
          <Text sx={{ fontSize: 18, color: 'blue.300' }}>My Team</Text>
          <TraitSummary champions={selectedChampionData} />
          <ChampionList
            champions={selectedChampionData}
            checkedTraits={checkedTraits}
            includeItems
          />
        </SimpleGrid>
      </GridItem>
      <GridItem>
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
          <ChampionList
            champions={filteredChampionsList}
            checkedTraits={checkedTraits}
          />
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
}
