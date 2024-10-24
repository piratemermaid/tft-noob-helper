// TODO: ability order in table with levels
// TODO: table for situational items for quick viewing, item images
// TODO: make it look nice

import { Box, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import CHAMP_CHEETSHEATS from '../data/champCheatsheets';
import abilityColors from '../styles/abilityColors';

export default function ChampCheatsheet({ champName }) {
  const cheatsheet = CHAMP_CHEETSHEATS[champName];

  if (!cheatsheet) {
    return (
      <Box>
        <Text sx={{ fontSize: 24, color: 'purple.300' }}>
          {champName}: no cheatsheet yet
        </Text>
      </Box>
    );
  }

  return (
    <VStack>
      <Text sx={{ fontSize: 24, color: 'purple.300' }}>
        {champName} Cheatsheet
      </Text>

      <Box>
        <Header>Ability Order</Header>
        {cheatsheet.abilityOrder.map((ability, index) => (
          <>
            <Text
              key={index}
              sx={{
                fontSize: 18,
                fontWeight: 600,
                color: abilityColors[ability],
                display: 'inline-block',
              }}
            >
              {ability}
            </Text>

            {index < cheatsheet.abilityOrder.length - 1 && (
              <Text
                sx={{
                  fontSize: 18,
                  display: 'inline-block',
                  mx: 0.5,
                }}
              >
                <ArrowForwardIcon sx={{ position: 'relative', bottom: 0.5 }} />
              </Text>
            )}
          </>
        ))}
      </Box>

      <Box>
        <Header>Situational Items</Header>
        {cheatsheet.situationalItems.map((item) => (
          <Text key={item.name}>
            {item.name}: {item.description} ({item.alternativeFor} alternative)
          </Text>
        ))}
      </Box>

      <Box>
        <Header>Strengths</Header>
        <UnorderedList>
          {cheatsheet.strengths.map((strength, index) => (
            <ListItem>{strength}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box>
        <Header>Weaknesses</Header>
        <UnorderedList>
          {cheatsheet.weaknesses.map((weakness, index) => (
            <ListItem key={index}>{weakness}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box>
        <Header>Game Plan</Header>
        <SubHeader>Early Game</SubHeader>
        <UnorderedList>
          {cheatsheet.gamePlan.earlyGame.map((step, index) => (
            <ListItem key={index}>{step}</ListItem>
          ))}
        </UnorderedList>
        <SubHeader>Mid Game</SubHeader>
        <UnorderedList>
          {cheatsheet.gamePlan.midGame.map((step, index) => (
            <ListItem key={index}>{step}</ListItem>
          ))}
        </UnorderedList>
        <SubHeader>Late Game</SubHeader>
        <UnorderedList>
          {cheatsheet.gamePlan.lateGame.map((step, index) => (
            <ListItem key={index}>{step}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );
}

const Header = ({ children }) => (
  <Text sx={{ fontSize: 18, color: 'blue.200', mt: 2 }}>{children}</Text>
);

const SubHeader = ({ children }) => (
  <Text sx={{ fontSize: 16.5, color: 'teal.200', mt: 2 }}>{children}</Text>
);
