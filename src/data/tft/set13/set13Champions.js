import TRAITS from './set13Traits.js';
import CURRENT_ITEMS from '../set12/set12Items.js';
import {
  validateItems,
  validateTraits,
} from '../../../scripts/dataValidation.js';

const atkTank = 'Attack Tank';
const atkFgt = 'Attack Fighter';
const atkCarry = 'Attack Carry';
const atkCast = 'Attack Caster';
const atkRpr = 'Attack Reaper';
const magCast = 'Magic Caster';
const magTank = 'Magic Tank';
const magCarry = 'Magic Carry';
const magFgt = 'Magic Fighter';
const magRpr = 'Magic Reaper';

const front = 'front';
const back = 'back';
const both = 'both';

const CURRENT_CHAMPIONS = [
  {
    name: 'Irelia',
    cost: 1, //TODO
    traits: ['Rebel', 'Sentinel'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Rell',
    cost: 2,
    traits: ['Conqueror', 'Sentinel', 'Visionary'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Renata Glasc',
    cost: 2,
    traits: ['Chem-Baron', 'Visionary'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Sett',
    cost: 1, //TODO
    traits: ['Enforcer', 'Bruiser'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Zeri',
    cost: 1, //TODO
    traits: ['Firelight', 'Sniper'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Violet',
    cost: 1,
    traits: ['Family', 'Pit Fighter'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Elise',
    cost: 4,
    traits: ['Black Rose'], //TODO
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Trundle',
    cost: 1,
    traits: ['Scrap', 'Bruiser'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Nocturne',
    cost: 2,
    traits: ['Automata', 'Quickstriker'],
    role: atkRpr,
    position: front,
    bestItems: [], //TODO
  },
  {
    name: 'Ziggs',
    cost: 2,
    traits: ['Scrap', 'Dominator'],
    role: magCast,
    position: back,
    bestItems: [], //TODO
  },
  {
    name: 'Gangplank',
    cost: 3,
    traits: ['Scrap', 'Form Swapper', 'Pit Fighter'],
    role: atkCast,
    position: both,
    bestItems: [], //TODO
  },
  {
    name: 'Darius',
    cost: 1,
    traits: ['Conqueror', 'Watcher'],
    role: atkFgt,
    position: front,
    bestItems: [], //TODO
  },
  {
    name: 'Swain',
    cost: 3,
    traits: ['Conqueror', 'Form Swapper', 'Sorceror'],
    role: magCast,
    position: both,
    bestItems: [], //TODO
  },
  {
    name: 'Morgana',
    cost: 1,
    traits: ['Black Rose', 'Visionary'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Cassiopeia',
    cost: 3,
    traits: ['Black Rose', 'Dominator'],
    role: magCast,
    position: back,
    bestItems: [], //TODO
  },
  {
    name: 'Blitzcrank',
    cost: 3,
    traits: ['Automata', 'Dominator'],
    role: magTank,
    position: front,
    bestItems: [], //TODO
  },
  {
    name: "Kog'Maw",
    cost: 3,
    traits: ['Automata', 'Sniper'],
    role: magCarry,
    position: back,
    bestItems: [], //TODO
  },
  {
    name: 'Loris',
    cost: 3,
    traits: ['Enforcer', 'Sentinel'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Ezreal',
    cost: 3,
    traits: ['Academy', 'Rebel', 'Artilerist'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Zoe',
    cost: 4,
    traits: ['Rebel', 'Sorcerer'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Ambessa',
    cost: 4,
    traits: ['Emissary', 'Conqueror', 'Quickstriker'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Twisted Fate',
    cost: 3,
    traits: ['Enforcer', 'Quickstriker'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Corki',
    cost: 4,
    traits: ['Scrap', 'Artilerist'],
    role: atkCast,
    position: back,
    bestItems: [], //TODO
  },
  {
    name: 'Ekko',
    cost: 4,
    traits: ['Firelight', 'Scrap', 'Ambusher'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Maddie',
    cost: 1,
    traits: ['Enforcer', 'Sniper'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: 'Caitlyn',
    cost: 5, //TODO
    traits: ['Enforcer', 'Sniper'],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
  {
    name: '',
    cost: 1,
    traits: [],
    role: null,
    position: null,
    bestItems: [], //TODO
  },
];

export default CURRENT_CHAMPIONS;
