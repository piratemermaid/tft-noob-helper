import CurrentSetTeamBuilder from '../pages/CurrentSetTeamBuilder';
import RevivalSetTeamBuilder from '../pages/RevivalSetTeamBuilder';

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
  // {
  //   label: 'Item Builder',
  //   path: '/item_builder',
  // },
];

export default ROUTES;
