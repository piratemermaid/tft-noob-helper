import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TeamBuilder';
import REVIVAL_CHAMPIONS from '../data/revivalChampions';
import CURRENT_ITEMS from '../data/currentItems';

export default function RevivalSetTeamBuilder() {
  return (
    <PageLayout title="Revival Set Team Builder">
      <TeamBuilder championsList={REVIVAL_CHAMPIONS} items={CURRENT_ITEMS} />
    </PageLayout>
  );
}
