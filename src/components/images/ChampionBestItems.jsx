import { HStack, SimpleGrid, Text } from '@chakra-ui/react';

import ItemImage from './ItemImage';
import CURRENT_ITEMS from '../../data/currentItems';
import { useStore } from '../../store';

export default function ChampionBestItems({ items }) {
  const selectedComponents = useStore((state) => state.selectedComponents);

  if (!items) return null;

  const ComponentImage = ({ name, sx }) => {
    return (
      <ItemImage
        name={name}
        sx={{ opacity: selectedComponents.includes(name) ? 1 : 0.5 }}
      />
    );
  };

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
            {recipe.length ? (
              <>
                <ComponentImage name={recipe[0]} />
                <MathText>+</MathText>
                <ComponentImage name={recipe[1]} />
                <MathText>=</MathText>
                <ItemImage
                  name={item}
                  sx={{
                    opacity:
                      selectedComponents.includes(recipe[0]) &&
                      selectedComponents.includes(recipe[1])
                        ? 1
                        : 0.5,
                  }}
                />
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
