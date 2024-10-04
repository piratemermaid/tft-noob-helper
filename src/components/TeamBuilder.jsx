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
import ComponentsHave from './ComponentsHave';
import TraitSummary from './TraitSummmary';
import { useStore } from '../store';
import { useActiveTraits } from '../hooks/useActiveTraits';

export default function TeamBuilder({ championList, type }) {
  const [checkedTraits, setCheckedTraits] = React.useState([]);
  const [nameFilterInput, setNameFilterInput] = React.useState('');

  const selectedChampions = useStore((state) => state.selectedChampions);

  const activeTraits = useActiveTraits(championList);

  const selectedChampionData = championList.filter((champion) =>
    selectedChampions?.find(
      (selectedChamp) => selectedChamp.name === champion.name
    )
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
          <ComponentsHave />
          <ChampionList
            champions={selectedChampionData}
            type={type}
            checkedTraits={checkedTraits}
            includeItems
            sortBy="name"
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
            type={type}
            checkedTraits={checkedTraits}
          />
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
}
