import { ListItem, UnorderedList } from '@chakra-ui/react';

export default function CheatsheetUL({ items }) {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
}
