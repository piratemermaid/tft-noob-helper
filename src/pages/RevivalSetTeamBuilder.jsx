import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TeamBuilder';
import REVIVAL_CHAMPIONS from '../data/revivalChampions';

export default function RevivalSetTeamBuilder() {
  return (
    <PageLayout title="Revival Set Team Builder">
      <TeamBuilder championList={REVIVAL_CHAMPIONS} type="revival" />
    </PageLayout>
  );
}
