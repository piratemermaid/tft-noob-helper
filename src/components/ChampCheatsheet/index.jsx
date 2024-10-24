// TODO: table for situational items for quick viewing, item images
// TODO: make it look nice
// TODO: add descriptions of abilities

import { Box, Text, VStack } from '@chakra-ui/react';

import AbilityOrderTable from './AbilityOrderTable';
import SituationalItems from './SituationalItems';
import CheatsheetUL from './CheatsheetUL';
import GamePlan from './GamePlan';
import CHAMP_CHEETSHEATS from '../../data/champCheatsheets';
import { Header } from './Headers';

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
        <AbilityOrderTable cheatsheet={cheatsheet} />
      </Box>

      <Box>
        <Header>Situational Items</Header>
        <SituationalItems cheatsheet={cheatsheet} />
      </Box>

      <Box>
        <Header>Strengths</Header>
        <CheatsheetUL items={cheatsheet.strengths} />
      </Box>

      <Box>
        <Header>Weaknesses</Header>
        <CheatsheetUL items={cheatsheet.weaknesses} />
      </Box>

      <Box>
        <Header>Game Plan</Header>
        <GamePlan cheatsheet={cheatsheet} />
      </Box>
    </VStack>
  );
}
