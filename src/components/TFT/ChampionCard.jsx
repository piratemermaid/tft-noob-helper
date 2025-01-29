import {
  Box,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import ChampionBestItems from '../images/ChampionBestItems';
import ChampionImage from '../images/ChampionImage';
import costColors from '../../styles/costColors';
import { useStore } from '../../store';

export default function ChampionCard({
  champion,
  checkedTraits,
  type,
  isSelectedList,
}) {
  const selectedChampions = useStore((state) => state.selectedChampions);
  const handleSelectChampion = useStore((state) => state.handleSelectChampion);
  const togglePinChampion = useStore((state) => state.togglePinChampion);

  const champ = selectedChampions.find(
    (selectedChamp) => selectedChamp.name === champion.name
  );

  const handleTogglePin = (event) => {
    event.stopPropagation();
    togglePinChampion(champion.name);
  };

  return (
    <Box
      key={champion.name}
      sx={{
        outline: `2px solid ${costColors[champion.cost]}`,
        p: 1,
        borderRadius: '5px',
        backgroundColor: !champ ? 'none' : 'gray.700',
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
          {isSelectedList && (
            <Box
              onClick={handleTogglePin}
              sx={{ position: 'relative', top: -12, right: -12 }}
            >
              {!champ.pinned ? (
                <StarIcon color="gray.500" />
              ) : (
                <StarIcon color="blue.400" />
              )}
            </Box>
          )}
        </Box>
      </SimpleGrid>
      {isSelectedList ? (
        <ChampionBestItems
          items={champion.bestItems}
          role={champion.role}
          champName={champion.name}
        />
      ) : (
        <></>
      )}
    </Box>
  );
}
