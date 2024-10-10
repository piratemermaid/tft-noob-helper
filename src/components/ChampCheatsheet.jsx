import { Box, Text } from '@chakra-ui/react';

import CHAMP_CHEETSHEATS from '../data/champCheatsheets';

export default function ChampCheatsheet({ champName }) {
  return (
    <Box>
      <Text sx={{ fontSize: 24, color: 'purple.300' }}>
        {champName} Cheatsheet
      </Text>

      {!CHAMP_CHEETSHEATS[champName]
        ? 'no cheatsheet yet'
        : 'display cheatsheet!!!!'}
    </Box>
  );
}
