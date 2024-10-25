import React from 'react';
import { Box, Center, SimpleGrid, Table, Td, Text, Tr } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import AbilityLetter from './AbilityLetter';
import { SubHeader } from './Headers';

export default function AbilityOrderTable({ cheatsheet }) {
  const levels = Array.from({ length: 18 }, (_, i) => i + 1);

  if (!cheatsheet.abilityOrder) return <Text>- -</Text>;

  return (
    <>
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
              <AbilityLetter ability={ability} />
            </Td>
          ))}
        </Tr>
      </Table>

      <SimpleGrid columns={2}>
        <Box>
          <SubHeader>Starting Abilities</SubHeader>

          {cheatsheet.abilityStart ? (
            cheatsheet.abilityStart.map((ability, index) => (
              <React.Fragment key={index}>
                <AbilityLetter
                  ability={ability}
                  centerProps={{ sx: { display: 'inline-block' } }}
                />
                {index < cheatsheet.abilityPriorities.length - 1 && (
                  <ArrowForwardIcon sx={{ position: 'relative', top: -0.5 }} />
                )}
              </React.Fragment>
            ))
          ) : (
            <Text>- -</Text>
          )}
        </Box>
        <Box>
          <SubHeader>Ability Priorities</SubHeader>
          {cheatsheet.abilityPriorities ? (
            cheatsheet.abilityPriorities.map((ability, index) => (
              <React.Fragment key={index}>
                <AbilityLetter
                  ability={ability}
                  centerProps={{ sx: { display: 'inline-block' } }}
                />
                {index < cheatsheet.abilityPriorities.length - 1 && (
                  <ArrowForwardIcon
                    sx={{ position: 'relative', top: -0.5, mx: 0.5 }}
                  />
                )}
              </React.Fragment>
            ))
          ) : (
            <Text>- -</Text>
          )}
        </Box>
      </SimpleGrid>
    </>
  );
}
