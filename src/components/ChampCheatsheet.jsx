import { Box, Text } from '@chakra-ui/react';

export default function ChampCheatsheet({ champName }) {
  const cheatsheet = {};

  return (
    <Box>
      <Text sx={{ fontSize: 24, color: 'purple.300' }}>
        {champName} Cheatsheet
      </Text>

      {!cheatsheet[champName] ? 'no cheatsheet yet' : 'display cheatsheet!!!!'}
    </Box>
  );
}
