import { SimpleGrid } from '@chakra-ui/react';

import Image from '../images/Image';
import ITEM_COMPONENTS from '../../data/tft/components';
import { useStore } from '../../store';

export default function ComponentsHave() {
  const selectedComponents = useStore((state) => state.selectedComponents);
  const toggleSelectedComponent = useStore(
    (state) => state.toggleSelectedComponent
  );

  return (
    <SimpleGrid columns={10}>
      {ITEM_COMPONENTS.map((component) => (
        <Image
          name={component.name}
          key={component.name}
          type="component"
          sx={{
            opacity: selectedComponents.includes(component.name) ? 1 : 0.6,
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => toggleSelectedComponent(component.name)}
        />
      ))}
    </SimpleGrid>
  );
}
