import _ from 'lodash';
import { Fragment } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import MY_CHAMPS from '../data/myChamps';

export default function TierListColumn({ title, tierList }) {
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
            {champions.map((champion) => (
              <Text
                key={champion}
                sx={{
                  color: tierColors[tier],
                  my: -1,
                  fontWeight: MY_CHAMPS.includes(champion) ? 'bold' : 'normal',
                }}
              >
                {champion}
              </Text>
            ))}
          </Fragment>
        ))}
      </>
    </VStack>
  );
}
