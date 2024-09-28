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
            {CURRENT_CHAMPIONS.map((champion) => (
              <SimpleGrid
                key={champion.name}
                columns={4}
                spacing={1}
                sx={{
                  height: '80px',
                  '&:hover': {
                    cursor: 'pointer',
                    outline: '1px solid teal',
                    borderRadius: '5px',
                  },
                }}
              >
                <Text sx={{ mr: 1.5 }}>{champion.name}</Text>
                <UnorderedList sx={{ width: '90px' }}>
                  {champion.traits.map((trait) => (
                    <ListItem key={trait} sx={{ textAlign: 'left' }}>
                      <Text>{trait}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>
                <Text sx={{ fontSize: 18, fontWeight: 600 }}>
                  {champion.cost}
                </Text>
                <ChampionImage name={champion.name} />
              </SimpleGrid>
            ))}
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
