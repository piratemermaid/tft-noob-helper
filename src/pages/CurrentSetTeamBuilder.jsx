import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TeamBuilder';
import CURRENT_CHAMPIONS from '../data/currentChampions';
import CURRENT_ITEMS from '../data/currentItems';

export default function CurrentSetTeamBuilder() {
  return (
    <PageLayout title="Current Set Team Builder">
      <TeamBuilder championsList={CURRENT_CHAMPIONS} items={CURRENT_ITEMS} />
    </PageLayout>
  );
}
