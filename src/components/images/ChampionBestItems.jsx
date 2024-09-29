import { HStack, SimpleGrid, Text } from '@chakra-ui/react';

import CURRENT_ITEMS from '../../data/currentItems';
import ItemImage from './ItemImage';

export default function ChampionBestItems({ items }) {
  if (!items) return null;

  return (
    <HStack>
      {items.map((item) => {
        const itemData = CURRENT_ITEMS.find(
          (itemb) => itemb.combinesInto === item
        );
        if (!itemData) {
          console.warn('Missing item data for', item);
          return <span key={item}>missing item data</span>;
        }

        const { recipe } = itemData ?? null;

        return (
          <SimpleGrid
            key={item}
            columns={5}
            alignItems={'center'}
            mx={2}
            sx={{
              outline: '1px solid gray',
              borderRadius: '5px',
            }}
          >
            {recipe ? (
              <>
                <ItemImage name={recipe[0]} />
                <MathText>+</MathText>
                <ItemImage name={recipe[1]} />
                <MathText>=</MathText>
                <ItemImage name={item} />
              </>
            ) : (
              <ItemImage name={item} />
            )}
          </SimpleGrid>
        );
      })}
    </HStack>
  );
}

const MathText = ({ children }) => {
  return <Text sx={{ fontSize: 22 }}>{children}</Text>;
};
