import { ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react';

import ChampionImage from './images/ChampionImage';
import { useStore } from '../store';

export default function ChampionList({ champions }) {
  const selectedChampions = useStore((state) => state.selectedChampions);
  const handleSelectChampion = useStore((state) => state.handleSelectChampion);
  const getIsSelected = (name) => selectedChampions.includes(name);

  return (
    <>
      {champions?.map((champion) => (
        <SimpleGrid
          key={champion.name}
          columns={4}
          spacing={1}
          sx={{
            height: '80px',
            outline: '1px solid gray',
            borderRadius: '5px',
            backgroundColor: !getIsSelected(champion.name)
              ? 'none'
              : 'blue.700',
            '&:hover': {
              cursor: 'pointer',
              outline: '1px solid teal',
            },
          }}
          justifyContent={'center'}
          alignContent={'center'}
          onClick={() => handleSelectChampion(champion.name)}
        >
          <Text sx={{ mr: 1.5 }}>{champion.name}</Text>
          <UnorderedList sx={{ width: '96px' }}>
            {champion.traits.map((trait) => (
              <ListItem key={trait} sx={{ textAlign: 'left' }}>
                <Text>{trait}</Text>
              </ListItem>
            ))}
          </UnorderedList>
          <Text sx={{ fontSize: 18, fontWeight: 600 }}>{champion.cost}</Text>
          <ChampionImage name={champion.name} />
        </SimpleGrid>
      ))}
    </>
  );
}
