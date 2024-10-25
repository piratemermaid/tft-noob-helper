// TODO: table for situational items for quick viewing, item images
// TODO: make it look nice
// TODO: add descriptions of abilities

import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

import AbilityOrderTable from './AbilityOrderTable';
import SituationalItems from './SituationalItems';
import GamePlan from './GamePlan';
import Overview from './Overview';
import TipsAndTricks from './TipsAndTricks';
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
    <>
      <Text sx={{ fontSize: 24, color: 'purple.300' }}>
        {champName} Cheatsheet
      </Text>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2,1fr)"
        gap={5}
      >
        <GridItem sx={10}>
          <Box>
            <Header>Ability Order</Header>
            <AbilityOrderTable cheatsheet={cheatsheet} />
          </Box>
          <Box>
            <Header>Game Plan</Header>
            <GamePlan cheatsheet={cheatsheet} />
          </Box>
        </GridItem>
        <GridItem sx={2}>
          <Box>
            <Header>Overview</Header>
            <Overview cheatsheet={cheatsheet} />
          </Box>
          <Box>
            <Box>
              <Header>Situational Items</Header>
              <SituationalItems cheatsheet={cheatsheet} />
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Header>Tips And Tricks</Header>
            <TipsAndTricks cheatsheet={cheatsheet} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
