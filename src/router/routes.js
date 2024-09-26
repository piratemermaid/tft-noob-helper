import TraitOverlap from '../pages/TraitOverlap';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';

const ROUTES = [
  {
    label: 'Trait Overlap',
    path: '/',
    Component: TraitOverlap,
  },
  {
    label: 'Page One',
    path: '/one',
    Component: PageOne,
  },
  {
    label: 'Page Two',
    path: '/two',
    Component: PageTwo,
  },
];

export default ROUTES;
