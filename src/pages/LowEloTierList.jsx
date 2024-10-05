import { SimpleGrid, Text } from '@chakra-ui/react';

import PageLayout from '../components/PageLayout';
import TierListColumn from '../components/TierListColumn';
import LOW_ELO_TIER_LIST from '../data/leagueLowEloTierList';

export default function LowEloTierList() {
  return (
    <PageLayout>
      <Text sx={{ color: 'purple.300', fontSize: 20 }}>
        League Low Elo Tier List
      </Text>

      <SimpleGrid columns={5} sx={{ my: 4 }}>
        <TierListColumn title="Support" tierList={LOW_ELO_TIER_LIST.Support} />
        <TierListColumn title="Bot" tierList={LOW_ELO_TIER_LIST.Bot} />
        <TierListColumn title="Top" tierList={LOW_ELO_TIER_LIST.Top} />
        <TierListColumn title="Mid" tierList={LOW_ELO_TIER_LIST.Mid} />
        <TierListColumn title="Jungle" tierList={LOW_ELO_TIER_LIST.Jungle} />
      </SimpleGrid>
    </PageLayout>
  );
}
