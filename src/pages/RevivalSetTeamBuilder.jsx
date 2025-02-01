import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TFT/TeamBuilder';
import REVIVAL_CHAMPIONS from '../data/tft/revival1/revival1Champions';
import REVIVAL_TRAITS from '../data/tft/set13/set13Traits';

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
