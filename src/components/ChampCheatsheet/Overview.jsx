import { SimpleGrid } from '@chakra-ui/react';
import CheatsheetCardUL from './CheatsheetCardUL';

export default function Overview({ cheatsheet }) {
  return (
    <SimpleGrid columns={2} spacing={2}>
      <CheatsheetCardUL title="Strengths" items={cheatsheet.strengths} />
      <CheatsheetCardUL title="Weaknesses" items={cheatsheet.weaknesses} />
    </SimpleGrid>
  );
}
