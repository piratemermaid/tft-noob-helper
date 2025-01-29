import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TFT/TeamBuilder';
import REVIVAL_CHAMPIONS from '../data/tft/revival2/revivalChampions';
import REVIVAL_TRAITS from '../data/tft/revival2/revivalTraits';

export default function RevivalSetTeamBuilder() {
  return (
    <PageLayout>
      <TeamBuilder
        championList={REVIVAL_CHAMPIONS}
        traitList={REVIVAL_TRAITS}
        type="revival"
      />
    </PageLayout>
  );
}
