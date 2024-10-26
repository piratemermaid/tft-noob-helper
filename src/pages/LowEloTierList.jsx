import React from 'react';
import { Center, HStack, SimpleGrid, Switch, Text } from '@chakra-ui/react';

import PageLayout from '../components/PageLayout';
import TierListColumn from '../components/League/ChampCheatsheet/TierListColumn';
import LOW_ELO_TIER_LIST from '../data/league/lowEloTierList';

export default function LowEloTierList() {
  const [showOwned, setShowOwned] = React.useState(true);

  return (
    <PageLayout>
      <Text sx={{ color: 'purple.300', fontSize: 20, mb: 4 }}>
        Low Elo Tier List
      </Text>
      <Center>
        <HStack>
          <Text>Show All</Text>
          <Switch
            colorScheme="teal"
            onChange={() => setShowOwned(!showOwned)}
            isChecked={showOwned}
          />
          <Text>Show Owned</Text>
        </HStack>
      </Center>

      <SimpleGrid columns={5} sx={{ my: 4 }}>
        <TierListColumn
          title="Support"
          tierList={LOW_ELO_TIER_LIST.Support}
          showOwned={showOwned}
        />
        <TierListColumn
          title="Bot"
          tierList={LOW_ELO_TIER_LIST.Bot}
          showOwned={showOwned}
        />
        <TierListColumn
          title="Top"
          tierList={LOW_ELO_TIER_LIST.Top}
          showOwned={showOwned}
        />
        <TierListColumn
          title="Mid"
          tierList={LOW_ELO_TIER_LIST.Mid}
          showOwned={showOwned}
        />
        <TierListColumn
          title="Jungle"
          tierList={LOW_ELO_TIER_LIST.Jungle}
          showOwned={showOwned}
        />
      </SimpleGrid>
    </PageLayout>
  );
}
