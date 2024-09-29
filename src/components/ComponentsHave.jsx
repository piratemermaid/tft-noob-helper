import { Box, SimpleGrid } from '@chakra-ui/react';

import Image from './images/Image';
import ITEM_COMPONENTS from '../data/components';

export default function ComponentsHave({
  selectedComponents,
  setSelectedComponents,
}) {
  return (
    <SimpleGrid columns={10}>
      {ITEM_COMPONENTS.map((item) => (
        <Image
          name={item.name}
          key={item.name}
          sx={{
            opacity: selectedComponents.includes(item.name) ? 1 : 0.6,
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() =>
            setSelectedComponents((prev) => {
              if (prev.includes(item.name)) {
                return prev.filter((component) => component !== item.name);
              }
              return [...prev, item.name];
            })
          }
        />
      ))}
    </SimpleGrid>
  );
}
