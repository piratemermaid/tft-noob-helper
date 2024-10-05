import _ from 'lodash';

import { Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';

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
              <Text key={champion} sx={{ color: tierColors[tier], my: -1 }}>
                {champion}
              </Text>
            ))}
          </Fragment>
        ))}
      </>
    </VStack>
  );
}
