import PageLayout from '../components/PageLayout';
import TeamBuilder from '../components/TFT/TeamBuilder';
import { CHAMPIONS, TRAITS, getImgUrl } from '../data/tft/revival2';

export default function RevivalSetTeamBuilder() {
  return (
    <PageLayout>
      <TeamBuilder
        championList={CHAMPIONS}
        traitList={TRAITS}
        type="revival"
        getImgUrl={getImgUrl}
      />
    </PageLayout>
  );
}
