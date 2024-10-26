import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TFT/TeamBuilder';
import REVIVAL_CHAMPIONS from '../data/tft/revivalChampions';

export default function RevivalSetTeamBuilder() {
  return (
    <PageLayout>
      <TeamBuilder championList={REVIVAL_CHAMPIONS} type="revival" />
    </PageLayout>
  );
}
