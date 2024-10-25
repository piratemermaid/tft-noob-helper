import { Card, SimpleGrid, Text } from '@chakra-ui/react';

export default function TipsAndTricks({ cheatsheet }) {
  if (!cheatsheet.tipsAndTricks?.length) {
    return <Text>No tips and tricks yet</Text>;
  }

  return (
    <SimpleGrid columns={4} spacing={4}>
      {cheatsheet.tipsAndTricks.map((tip, index) => (
        <Card
          key={index}
          sx={{ p: 5, minHeight: '50px', border: '1px solid gray' }}
        >
          <Text>{tip}</Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
