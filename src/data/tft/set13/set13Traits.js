const TRAITS = [
  { name: 'Academy' },
  {
    name: 'Ambusher',
    bonuses: ['Crits'],
    activation: { bronze: 2, silver: 3, gold: 4, platinum: 5 },
  },
  { name: 'Artillerist', bonuses: ['Attack Damage'] },
  { name: 'Automata', bonuses: ['Damage', 'Armor', 'Magic Resist'] },
  { name: 'Black Rose' },
  { name: 'Bruiser', bonuses: ['Health'] },
  { name: 'Chem-Baron', bonuses: ['Loot', 'Health'] },
  { name: 'Conqueror', bonuses: ['Attack Damage', 'AP', 'Loot'] },
  { name: 'Dominator' },
  { name: 'Emissary', bonuses: [], activateOn: [] },
  {
    name: 'Enforcer',
    bonuses: ['Health', 'Damage Amp', 'Attack Speed'],
    activateOn: [],
  },
  { name: 'Experiment' },
  {
    name: 'Family',
    bonuses: ['Mana', 'Other'],
    activation: { gold: 3, gold2: 4, platinum: 5 },
  },
  { name: 'Firelight', bonuses: ['Heal'] },
  { name: 'Form Swapper' },
  {
    name: 'Pit Fighter',
    bonuses: ['Omnivamp', 'True Damage', 'Heal Once'],
    activation: { bronze: 2, silver: 4, gold: 6, platinum: 8 },
  },
  { name: 'Quickstriker' },
  { name: 'Rebel' },
  { name: 'Sentinel' },
  { name: 'Scrap', bonuses: ['Shield', 'Temp Items'] },
  { name: 'Sniper', bonuses: ['Damage'] },
  { name: 'Sorceror' },
  { name: 'Visionary' },
  { name: 'Watcher', bonuses: ['Durability'] },
];

export default TRAITS;
