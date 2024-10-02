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
            outline: `2px solid ${costColors[champion.cost]}`,
            p: 1,
            borderRadius: '5px',
            backgroundColor: !getIsSelected(champion.name)
              ? 'none'
              : 'gray.700',
            '&:hover': {
              cursor: 'pointer',
              outline: '1px solid teal',
            },
          }}
        >
          <SimpleGrid
            columns={3}
            spacing={1}
            justifyContent={'center'}
            alignContent={'center'}
            onClick={() => handleSelectChampion(champion.name)}
          >
            <Box>
              <Text sx={{ mr: 1.5 }}>{champion.name}</Text>
              <Text sx={{ fontSize: 13, color: 'gray.400' }}>
                {champion.role ?? <i>!! unknown</i>}
              </Text>
            </Box>
            <UnorderedList sx={{ minWidth: '120px' }}>
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
            <Box>
              <ChampionImage type={type} name={champion.name} />
              {!champion.bestItems.length ? (
                <Text sx={{ position: 'relative', top: -10, left: 4 }}>
                  !! items
                </Text>
              ) : null}
            </Box>
          </SimpleGrid>
          {includeItems ? (
            <ChampionBestItems items={champion.bestItems} />
          ) : (
            <></>
          )}
        </Box>
      ))}
    </>
  );
}
