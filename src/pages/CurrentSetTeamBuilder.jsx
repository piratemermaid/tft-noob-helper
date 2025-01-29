import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TFT/TeamBuilder';
import CURRENT_CHAMPIONS from '../data/tft/set13/set13Champions';

export default function CurrentSetTeamBuilder() {
  return (
    <PageLayout>
      <TeamBuilder championList={CURRENT_CHAMPIONS} type="current" />
    </PageLayout>
  );
}
