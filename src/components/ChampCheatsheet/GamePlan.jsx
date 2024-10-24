import CheatsheetUL from './CheatsheetUL';
import { SubHeader } from './Headers';

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
