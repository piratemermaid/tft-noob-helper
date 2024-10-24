// TODO: table for situational items for quick viewing, item images
// TODO: make it look nice

import {
  Box,
  Center,
  ListItem,
  Table,
  Td,
  Text,
  Th,
  Tr,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import CHAMP_CHEETSHEATS from '../data/champCheatsheets';
import abilityColors from '../styles/abilityColors';

export default function ChampCheatsheet({ champName }) {
  const cheatsheet = CHAMP_CHEETSHEATS[champName];

  const levels = Array.from({ length: 18 }, (_, i) => i + 1);

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
        <Table size="small" sx={{ mt: 2, width: '560px' }}>
          <Tr sx={{ width: '20px' }}>
            {levels.map((level) => (
              <Td sx={{ border: '1px solid gray' }}>
                <Center>
                  <Text
                    key={level}
                    sx={{
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    {level}
                  </Text>
                </Center>
              </Td>
            ))}
          </Tr>
          <Tr>
            {cheatsheet.abilityOrder.map((ability, index) => (
              <Td sx={{ border: '1px solid gray', width: '20px' }}>
                <Center>
                  <Text
                    key={index}
                    sx={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: abilityColors[ability],
                    }}
                  >
                    {ability}
                  </Text>
                </Center>
              </Td>
            ))}
          </Tr>
        </Table>
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
