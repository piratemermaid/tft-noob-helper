import {
  Box,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import ChampionBestItems from './images/ChampionBestItems';
import ChampionImage from './images/ChampionImage';
import { useStore } from '../store';
import costColors from '../styles/costColors';

export default function ChampionList({
  champions,
  type,
  checkedTraits,
  includeItems = false,
  sortBy = 'cost',
}) {
  const selectedChampions = useStore((state) => state.selectedChampions);
  const handleSelectChampion = useStore((state) => state.handleSelectChampion);
  const getIsSelected = (name) => selectedChampions.includes(name);

  const sortedChampions = [...champions].sort((a, b) => a[sortBy] - b[sortBy]);

  return (
    <>
      {sortedChampions?.map((champion) => (
        <Box
          key={champion.name}
          sx={{
            outline: '1px solid gray',
            p: 1,
            borderRadius: '5px',
            backgroundColor: !getIsSelected(champion.name)
              ? 'none'
              : 'blue.700',
            '&:hover': {
              cursor: 'pointer',
              outline: '1px solid teal',
            },
          }}
        >
          <SimpleGrid
            columns={4}
            spacing={1}
            justifyContent={'center'}
            alignContent={'center'}
            onClick={() => handleSelectChampion(champion.name)}
          >
            <Text sx={{ mr: 1.5 }}>{champion.name}</Text>
            <UnorderedList sx={{ width: '96px' }}>
              {champion.traits.map((trait) => (
                <ListItem key={trait} sx={{ textAlign: 'left' }}>
                  <Text
                    sx={{
                      fontWeight: checkedTraits?.includes(trait) ? 600 : 200,
                    }}
                  >
                    {trait}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
            <Text
              sx={{
                fontSize: 18,
                fontWeight: 600,
                color: costColors[champion.cost],
              }}
            >
              {champion.cost}
            </Text>
            <ChampionImage type={type} name={champion.name} />
          </SimpleGrid>
          {!includeItems && !champion.role ? <p>needs role</p> : ''}
          {!includeItems && !champion.bestItems.length ? (
            <p>needs items</p>
          ) : (
            ''
          )}
          {includeItems ? (
            <ChampionBestItems items={champion.bestItems} />
          ) : (
            <></>
          )}
        </Box>
      ))}

      {includeItems ? 'put emblem recipes here!' : ''}
    </>
  );
}
