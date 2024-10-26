import { Center, Text } from '@chakra-ui/react';

import abilityColors from '../../../styles/abilityColors';

export default function AbilityLetter({ ability, centerProps = {} }) {
  return (
    <Center {...centerProps}>
      <Text
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: abilityColors[ability],
        }}
      >
        {ability}
      </Text>
    </Center>
  );
}
