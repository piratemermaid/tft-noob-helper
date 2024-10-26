import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';

import PageLayout from '../components/PageLayout';
import ChampCheatsheet from '../components/League/ChampCheatsheet';
import MY_CHAMPS from '../data/league/myChamps';

export default function Cheatsheets() {
  const [selectedChamp, setSelectedChamp] = React.useState(null);

  const handleSelectChamp = (champ) => {
    if (selectedChamp === champ) {
      setSelectedChamp(null);
    } else {
      setSelectedChamp(champ);
    }
  };

  return (
    <PageLayout>
      <SimpleGrid columns={5} sx={{ my: 4 }}>
        {MY_CHAMPS.map((champ) => {
          const isSelected = selectedChamp === champ;

          return (
            <Text
              key={champ}
              onClick={() => handleSelectChamp(champ)}
              sx={{
                '&:hover': { cursor: 'pointer', color: 'pink.300' },
                color: isSelected ? 'pink.300' : 'gray.300',
                fontWeight: isSelected ? 'bold' : 'normal',
              }}
            >
              {champ}
            </Text>
          );
        })}
      </SimpleGrid>

      {selectedChamp && <ChampCheatsheet champName={selectedChamp} />}
    </PageLayout>
  );
}
