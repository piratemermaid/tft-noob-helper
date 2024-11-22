import { SimpleGrid, Text } from '@chakra-ui/react';

import Image from './Image';
import ItemImage from './ItemImage';
import CURRENT_ITEMS from '../../data/tft/set12/set12Items';
import { useStore } from '../../store';

export default function ChampionBestItems({ items }) {
  const selectedComponents = useStore((state) => state.selectedComponents);

  if (!items) return null;

  const ComponentImage = ({ name }) => {
    return (
      <ItemImage
        name={name}
        type="component"
        sx={{ opacity: selectedComponents.includes(name) ? 1 : 0.3 }}
      />
    );
  };

  return (
    <SimpleGrid columns={3} spacing={1}>
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
          <>
            {recipe.length ? (
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
                <ComponentImage name={recipe[0]} />
                <MathText>+</MathText>
                <ComponentImage name={recipe[1]} />
                <MathText>=</MathText>
                <ItemImage
                  name={item}
                  type="item"
                  sx={{
                    opacity:
                      selectedComponents.includes(recipe[0]) &&
                      selectedComponents.includes(recipe[1])
                        ? 1
                        : 0.5,
                  }}
                />
              </SimpleGrid>
            ) : (
              <Image type="item" name={item} />
            )}
          </>
        );
      })}
    </SimpleGrid>
  );
}

const MathText = ({ children }) => {
  return <Text sx={{ fontSize: 22 }}>{children}</Text>;
};
