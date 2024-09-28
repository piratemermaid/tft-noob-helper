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

export default function CurrentSetTeamBuilder() {
  const selectedChampions = useStore((state) => state.selectedChampions);

  const selectedChampionData = CURRENT_CHAMPIONS.filter((champion) =>
    selectedChampions?.includes(champion.name)
  );

  return (
    <PageLayout title="Current Set Team Builder">
      <SimpleGrid columns={2}>
        <GridItem>
          <SimpleGrid spacing={4}>
            <Text sx={{ fontSize: 18, color: 'blue.300' }}>My Team</Text>
            <TraitSummary champions={selectedChampionData} />
            <ChampionList champions={selectedChampionData} />
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <VStack>
            <SimpleGrid columns={2} sx={{ mb: 4 }}>
              <Box>
                <Text sx={{ mb: 1.5 }}>Search Champs</Text>
                <Input placeholder="Champion name (no worky yet)" />
              </Box>
              <Box>
                <Text sx={{ mb: 1.5 }}>Filter by Current Traits</Text>
                <CheckboxGroup>
                  <Checkbox checked={false}>Traits go here</Checkbox>
                </CheckboxGroup>
              </Box>
            </SimpleGrid>
            <ChampionList champions={CURRENT_CHAMPIONS} />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </PageLayout>
  );
}
