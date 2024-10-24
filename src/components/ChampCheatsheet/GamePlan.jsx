import { Text } from '@chakra-ui/react';

import CheatsheetUL from './CheatsheetUL';

export default function GamePlan({ cheatsheet }) {
  return (
    <>
      <GamePlanTiming
        title="Early Game"
        items={cheatsheet.gamePlan.earlyGame}
      />
      <GamePlanTiming title="Mid Game" items={cheatsheet.gamePlan.midGame} />
      <GamePlanTiming title="Late Game" items={cheatsheet.gamePlan.lateGame} />
    </>
  );
}

const GamePlanTiming = ({ title, items }) => {
  return (
    <>
      <SubHeader>{title}</SubHeader>
      <CheatsheetUL items={items} />
    </>
  );
};

const SubHeader = ({ children }) => (
  <Text sx={{ fontSize: 16.5, color: 'teal.200', mt: 2 }}>{children}</Text>
);
