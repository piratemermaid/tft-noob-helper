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

import ChampionList from '../components/ChampionList';
import PageLayout from '../components/PageLayout';
import TraitSummary from '../components/TraitSummmary';
import CURRENT_CHAMPIONS from '../data/currentChampions';
import { useStore } from '../store';
import { useActiveTraits } from '../hooks/useActiveTraits';

export default function CurrentSetTeamBuilder() {
  const [checkedTraits, setCheckedTraits] = React.useState([]);

  const selectedChampions = useStore((state) => state.selectedChampions);

  const activeTraits = useActiveTraits();

  const selectedChampionData = CURRENT_CHAMPIONS.filter((champion) =>
    selectedChampions?.includes(champion.name)
  );

  const filteredChampionsList = checkedTraits?.length
    ? CURRENT_CHAMPIONS.filter((champion) => {
        return champion.traits.some((trait) => checkedTraits.includes(trait));
      })
    : CURRENT_CHAMPIONS;

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

  return (
    <PageLayout title="Current Set Team Builder">
      <SimpleGrid columns={2}>
        <GridItem>
          <SimpleGrid spacing={4}>
            <Text sx={{ fontSize: 18, color: 'blue.300' }}>My Team</Text>
            <TraitSummary champions={selectedChampionData} />
            <ChampionList champions={selectedChampionData} includeItems />
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <VStack>
            <SimpleGrid columns={2} sx={{ mb: 4 }} spacing={4}>
              <Box>
                <Text sx={{ mb: 1.5 }}>Search Champs</Text>
                <Input placeholder="Champion name (no worky yet)" />
              </Box>
              <Box>
                <Text sx={{ mb: 1.5 }}>Filter by Current Traits</Text>
                <CheckboxGroup VStack sx={{ float: 'left' }}>
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
            <ChampionList champions={filteredChampionsList} />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </PageLayout>
  );
}
