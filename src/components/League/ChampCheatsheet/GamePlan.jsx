import { SimpleGrid, Text } from '@chakra-ui/react';

import CheatsheetCardUL from './CheatsheetCardUL';

export default function GamePlan({ cheatsheet }) {
  if (!cheatsheet.gamePlan) return <Text>- -</Text>;

  return (
    <SimpleGrid columns={3} spacing={2}>
      <CheatsheetCardUL
        title="Early Game"
        items={cheatsheet.gamePlan.earlyGame}
      />
      <CheatsheetCardUL title="Mid Game" items={cheatsheet.gamePlan.midGame} />
      <CheatsheetCardUL
        title="Late Game"
        items={cheatsheet.gamePlan.lateGame}
      />
    </SimpleGrid>
  );
}
