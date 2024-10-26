// TODO: table for situational items for quick viewing, item images
// TODO: make it look nice
// TODO: add descriptions of abilities

import React from 'react';
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Text,
} from '@chakra-ui/react';

import AbilityOrderTable from './AbilityOrderTable';
import SituationalItems from './SituationalItems';
import GamePlan from './GamePlan';
import Overview from './Overview';
import TipsAndTricks from './TipsAndTricks';
import CHAMP_CHEETSHEATS from '../../../data/league/champCheatsheets';
import { Header } from './Headers';

export default function ChampCheatsheet({ champName }) {
  const cheatsheet = CHAMP_CHEETSHEATS[champName];
  const champRoles = cheatsheet
    ? Object.keys(cheatsheet).map((index) => cheatsheet[index].role)
    : null;

  const [selectedRole, setSelectedRole] = React.useState(
    champRoles ? champRoles[0] : null
  );

  if (!cheatsheet) {
    return (
      <Box>
        <Text sx={{ fontSize: 24, color: 'purple.300' }}>
          {champName}: no cheatsheet yet
        </Text>
      </Box>
    );
  }

  const roleCheatsheet = selectedRole
    ? cheatsheet.find((cheatsheet) => cheatsheet.role === selectedRole)
    : null;

  return (
    <>
      <Text sx={{ fontSize: 24, color: 'purple.300' }}>
        {champName} Cheatsheet
      </Text>

      <Center sx={{ mt: 5 }}>
        <HStack>
          {champRoles.map((role) => (
            <Button
              key={role}
              onClick={() => setSelectedRole(role)}
              sx={{
                backgroundColor:
                  selectedRole === role ? 'teal.600' : 'gray.600',
              }}
            >
              {role}
            </Button>
          ))}
        </HStack>
      </Center>

      {selectedRole && (
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2,1fr)"
          gap={5}
        >
          <GridItem sx={10}>
            <Box>
              <Header>Ability Order</Header>
              <AbilityOrderTable cheatsheet={roleCheatsheet} />
            </Box>
            <Box>
              <Header>Game Plan</Header>
              <GamePlan cheatsheet={roleCheatsheet} />
            </Box>
          </GridItem>
          <GridItem sx={2}>
            <Box>
              <Header>Overview</Header>
              <Overview cheatsheet={roleCheatsheet} />
            </Box>
            <Box>
              <Box>
                <Header>Situational Items</Header>
                <SituationalItems cheatsheet={roleCheatsheet} />
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Header>Tips And Tricks</Header>
              <TipsAndTricks cheatsheet={roleCheatsheet} />
            </Box>
          </GridItem>
        </Grid>
      )}
    </>
  );
}
