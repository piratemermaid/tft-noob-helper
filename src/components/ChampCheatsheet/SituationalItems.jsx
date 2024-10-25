import { Text } from '@chakra-ui/react';

export default function SituationalItems({ cheatsheet }) {
  if (!cheatsheet.situationalItems) return <Text>- -</Text>;

  return (
    <>
      {cheatsheet.situationalItems.map((item) => (
        <Text key={item.name}>
          {item.name}: {item.description} ({item.alternativeFor} alternative)
        </Text>
      ))}
    </>
  );
}
