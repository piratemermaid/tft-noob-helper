import { Card, ListItem, UnorderedList, VStack } from '@chakra-ui/react';

import { SubHeader } from './Headers';

export default function CheatsheetCardUL({ title, items }) {
  if (!items) return '- -';

  return (
    <Card sx={{ border: '1px solid gray', borderRadius: 15, p: 3, pt: 1 }}>
      <VStack>
        <SubHeader>{title}</SubHeader>
        <UnorderedList sx={{ textAlign: 'left' }}>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </Card>
  );
}
