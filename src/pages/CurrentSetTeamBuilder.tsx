import {
  Box,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  Input,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

import ChampionImage from '../components/images/ChampionImage';
import ChampionList from '../components/ChampionList';
import PageLayout from '../components/PageLayout';
import CURRENT_CHAMPIONS from '../data/currentChampions';

export default function CurrentSetTeamBuilder() {
  return (
    <PageLayout title="Current Set Team Builder">
      <SimpleGrid columns={2}>
        <GridItem>TEAM BUILDER</GridItem>
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

  return (
    <PageLayout title="Current Set Team Builder">
      <Grid templateColumns={'repeat(3, 1fr)'}>
        <GridItem>TEAM BUILDER</GridItem>
        <Spacer />
        <GridItem>
          <VStack>
            {CURRENT_CHAMPIONS.map((champion) => (
              <SimpleGrid key={champion.name} columns={4} spacing={1}>
                <Text>{champion.name}</Text>
                <Text>{champion.cost}</Text>
                <ChampionImage name={champion.name} />
                <UnorderedList>
                  {champion.classes.map((trait) => (
                    <ListItem key={trait}>
                      <Text>{trait}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              </SimpleGrid>
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </PageLayout>
  );
}
