import CurrentSetTeamBuilder from '../pages/CurrentSetTeamBuilder';
import RevivalSetTeamBuilder from '../pages/RevivalSetTeamBuilder';
import LowEloTierList from '../pages/LowEloTierList';

const ROUTES = [
  {
    label: 'Current Set Team Builder',
    path: '/',
    Component: CurrentSetTeamBuilder,
    type: 'tft',
  },
  {
    label: 'Revival Set Team Builder',
    path: '/revival_set',
    Component: RevivalSetTeamBuilder,
    type: 'tft',
  },
  {
    label: 'Tier List',
    path: '/lol_tier_list',
    Component: LowEloTierList,
    type: 'lol',
  },
];

export default ROUTES;
