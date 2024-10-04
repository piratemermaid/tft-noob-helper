import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TeamBuilder';
import CURRENT_CHAMPIONS from '../data/currentChampions';

export default function CurrentSetTeamBuilder() {
  return (
    <PageLayout title="Current Set Team Builder">
      <TeamBuilder championList={CURRENT_CHAMPIONS} type="current" />
    </PageLayout>
  );
}
