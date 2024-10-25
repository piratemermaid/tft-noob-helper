import { SimpleGrid } from '@chakra-ui/react';
import CheatsheetCardUL from './CheatsheetCardUL';

export default function Overview({ cheatsheet }) {
  return (
    <SimpleGrid columns={2} spacing={2}>
      {cheatsheet.strengths && (
        <CheatsheetCardUL title="Strengths" items={cheatsheet.strengths} />
      )}
      {cheatsheet.weaknesses && (
        <CheatsheetCardUL title="Weaknesses" items={cheatsheet.weaknesses} />
      )}
    </SimpleGrid>
  );
}
