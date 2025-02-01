import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TFT/TeamBuilderOld';
import REVIVAL_CHAMPIONS from '../data/tft/revival1/revival1Champions';

export default function RevivalSetTeamBuilder() {
  return (
    <PageLayout>
      <TeamBuilder championList={REVIVAL_CHAMPIONS} type="revival" />
    </PageLayout>
  );
}
