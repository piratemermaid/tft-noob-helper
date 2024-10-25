import { Center, Table, Td, Text, Tr } from '@chakra-ui/react';

import abilityColors from '../../styles/abilityColors';

export default function AbilityOrderTable({ cheatsheet }) {
  const levels = Array.from({ length: 18 }, (_, i) => i + 1);

  if (!cheatsheet.abilityOrder) return <Text>- -</Text>;

  return (
    <Table size="small" sx={{ mt: 2, width: '560px' }}>
      <Tr sx={{ width: '20px' }}>
        {levels.map((level) => (
          <Td sx={{ border: '1px solid gray' }} key={level}>
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
        {cheatsheet.abilityOrder?.map((ability, index) => (
          <Td sx={{ border: '1px solid gray', width: '20px' }} key={index}>
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
  );
}
