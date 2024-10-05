import CurrentSetTeamBuilder from '../pages/CurrentSetTeamBuilder';
import RevivalSetTeamBuilder from '../pages/RevivalSetTeamBuilder';
import LowEloTierList from '../pages/LowEloTierList';

const ROUTES = [
  {
    label: 'Current Set Team Builder',
    path: '/',
    Component: CurrentSetTeamBuilder,
  },
  {
    label: 'Revival Set Team Builder',
    path: '/revival_set',
    Component: RevivalSetTeamBuilder,
  },
  {
    label: 'LoL Tier List',
    path: '/lol_tier_list',
    Component: LowEloTierList,
  },
];

export default ROUTES;
