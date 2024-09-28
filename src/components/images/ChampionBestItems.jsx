import { HStack, SimpleGrid, Text } from '@chakra-ui/react';

import ITEMS from '../../data/items';
import ItemImage from './ItemImage';

export default function ChampionBestItems({ items }) {
  return (
    <HStack>
      {items.map((item) => {
        const itemData = ITEMS.find((itemb) => itemb.combinesInto === item);
        if (!itemData) {
          console.warn('Missing item data for', item);
          return 'n/a';
        }

        const { recipe } = itemData;

        return (
          <SimpleGrid key={item} columns={5} alignItems={'center'} mx={2}>
            <ItemImage name={item} />
            <MathText>=</MathText>
            <ItemImage name={recipe[0]} />
            <MathText>+</MathText>
            <ItemImage name={recipe[1]} />
          </SimpleGrid>
        );
      })}
    </HStack>
  );
}

const MathText = ({ children }) => {
  return <Text sx={{ fontSize: 22 }}>{children}</Text>;
};
