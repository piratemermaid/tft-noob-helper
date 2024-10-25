import { Box, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { SubHeader } from './Headers';

export default function CheatsheetCardUL({ title, items }) {
  return (
    <VStack sx={{ border: '1px solid gray', borderRadius: 15, p: 3, pt: 1 }}>
      <SubHeader>{title}</SubHeader>
      <UnorderedList sx={{ textAlign: 'left' }}>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
}
