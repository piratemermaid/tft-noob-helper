import _ from 'lodash';
import { Fragment } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import MY_CHAMPS from '../../../data/league/myChamps';

export default function TierListColumn({ title, tierList, showOwned }) {
  const tierColors = {
    S: 'purple.300',
    A: 'blue.300',
    B: 'green.300',
  };

  return (
    <VStack>
      <Text>{title}</Text>
      <>
        {_.map(tierList, (champions, tier) => (
          <Fragment key={tier}>
            {champions.map((champion) => {
              const isOwned = MY_CHAMPS.includes(champion);

              if (showOwned && !isOwned) return null;

              return (
                <a
                  key={champion.name}
                  href={`https://mobalytics.gg/lol/champions/${champion
                    .toLowerCase()
                    .replaceAll(' ', '')
                    .replaceAll('’', '')}/build?rank=Iron`}
                  target="_blank"
                >
                  <Text
                    key={champion}
                    sx={{
                      color: tierColors[tier],
                      my: -1,
                      fontWeight: isOwned ? 'bold' : 'normal',
                    }}
                  >
                    {champion}
                  </Text>
                </a>
              );
            })}
          </Fragment>
        ))}
      </>
    </VStack>
  );
}
