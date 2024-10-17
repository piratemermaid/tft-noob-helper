import TRAITS from './traits.js';
import CURRENT_ITEMS from './currentItems';
import { validateItems, validateTraits } from '../scripts/dataValidation.js';

// stats not validated

const atkTank = 'Attack Tank';
const atkFgt = 'Attack Fighter';
const atkCarry = 'Attack Carry';
const atkCst = 'Attack Caster';
const atkRpr = 'Attack Reaper';
const magCast = 'Magic Caster';
const magTank = 'Magic Tank';
const magCarry = 'Magic Carry';
const magFgt = 'Magic Fighter';

const front = 'front';
const back = 'back';

const CURRENT_CHAMPIONS = [
  {
    name: 'Ahri',
    cost: 3,
    traits: ['Arcana', 'Scholar'],
    stats: {
      health: [800, 1440, 2592],
      damage: [50, 72, 102],
      dps: [41, 62, 93],
      armor: 45,
      mr: 45,
      speed: 0.75,
      mana: [0, 100],
    },
    bestItems: ["Rabadon's Deathcap", 'Infinity Edge', 'Blue Buff'],
  },
  {
    name: 'Akali',
    cost: 2,
    traits: ['Warrior', 'Multistriker', 'Pyro'],
    role: atkRpr,
    position: front,
    bestItems: ['Edge of Night', 'Hand of Justice', 'Infinity Edge'],
    stats: {
      health: [700, 1260, 2268],
      damage: [55, 83, 124],
      dps: [41, 62, 93],
      armor: 45,
      mr: 45,
      speed: 0.75,
      mana: [10, 70],
    },
  },
  {
    name: 'Ashe',
    cost: 1,
    traits: ['Eldritch', 'Multistriker'],
    role: atkCarry,
    position: back,
    bestItems: ["Guinsoo's Rageblade", 'Infinity Edge', 'Last Whisper'],
    stats: {
      health: [500, 900, 1620],
      damage: [40, 60, 85],
      dps: [29, 41, 56],
      armor: 30,
      mr: 30,
      speed: 0.75,
      mana: [0, 80],
    },
  },
  {
    name: 'Bard',
    cost: 3,
    traits: ['Sugarcraft', 'Preserver', 'Scholar'],
    stats: {
      health: [800, 1440, 2592],
      damage: [40, 55, 75],
      dps: [25, 36, 52],
      armor: 30,
      mr: 30,
      speed: 0.75,
      mana: [0, 100],
    },
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
  },
  {
    name: 'Blitzcrank',
    cost: 1,
    traits: ['Honeymancy', 'Vanguard'],
    role: magTank,
    position: front,
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
    stats: {
      health: [600, 1080, 1944],
      damage: [60, 90, 120],
      dps: [46, 69, 90],
      armor: 40,
      mr: 40,
      speed: 0.7,
      mana: [0, 90],
    },
  },
  {
    name: 'Briar',
    cost: 5,
    traits: ['Shapeshifter', 'Ravenous', 'Eldritch'],
    stats: {
      health: [1200, 2160, 3888],
      damage: [60, 90, 135],
      dps: [48, 72, 108],
      armor: 60,
      mr: 60,
      speed: 0.8,
      mana: [0, 80],
    },
    bestItems: ['Bloodthirster', "Titan's Resolve", "Sterak's Gage"],
  },
  {
    name: 'Camille',
    cost: 5,
    traits: ['Chrono', 'Multistriker'],
    role: atkFgt,
    position: front,
    bestItems: ['Bloodthirster', "Sterak's Gage", "Titan's Resolve"],
    stats: {
      health: [700, 1260, 2268],
      damage: [60, 90, 130],
      dps: [43, 64, 85],
      armor: 40,
      mr: 40,
      speed: 0.75,
      mana: [0, 100],
    },
  },
  {
    name: 'Cassiopeia',
    cost: 2,
    traits: ['Witchcraft', 'Incantor'],
    role: magCarry,
    position: back,
    bestItems: [
      "Guinsoo's Rageblade",
      "Guinsoo's Rageblade",
      'Hextech Gunblade',
    ],
    stats: {
      health: [700, 1260, 2268],
      damage: [65, 95, 135],
      dps: [48, 70, 92],
      armor: 30,
      mr: 30,
      speed: 0.75,
      mana: [0, 100],
    },
  },
  {
    name: 'Diana',
    cost: 5,
    traits: ['Frost', 'Bastion'],
    stats: {
      health: [750, 1350, 2430],
      damage: [50, 90, 162],
      armor: 35,
      magicRes: 50,
      attackSpeed: 0.7,
      range: 1,
    },
    bestItems: ['Hand of Justice', 'Bloodthirster', "Titan's Resolve"],
  },
  {
    name: 'Elise',
    cost: 1,
    traits: ['Eldritch', 'Shapeshifter'],
    role: magTank,
    stats: {
      health: [650, 1170, 2106, 3790.8],
      mana: 90,
      startingMana: 30,
      attackDamage: [50, 90, 162, 291.6],
      attackSpeed: 0.6,
      dps: [30, 54, 97.2, 174.96],
      attackRange: 'Melee',
      armor: 40,
      magicResist: 40,
    },
    bestItems: ["Archangel's Staff", 'Bloodthirster', "Warmog's Armor"],
  },
  {
    name: 'Ezreal',
    cost: 3,
    traits: ['Portal', 'Blaster'],
    stats: {
      health: [600, 1080, 1944],
      damage: [60, 108, 195],
      armor: 30,
      magicRes: 30,
      attackSpeed: 0.8,
      range: 4,
    },
    bestItems: ['Infinity Edge', 'Last Whisper', 'Spear of Shojin'],
  },
  {
    name: 'Fiora',
    cost: 4,
    traits: ['Witchcraft', 'Warrior'],
    stats: {
      health: [1150, 2070, 3726],
      damage: [75, 135, 243],
      armor: 50,
      magicRes: 50,
      attackSpeed: 1,
      range: 1,
    },
    bestItems: ['Bloodthirster', "Sterak's Gage", "Titan's Resolve"],
  },
  {
    name: 'Galio',
    cost: 2,
    traits: ['Portal', 'Mage', 'Vanguard'],
    role: magTank,
    position: front,
    bestItems: [
      "Guinsoo's Rageblade",
      "Guinsoo's Rageblade",
      'Hextech Gunblade',
    ],
    stats: {
      health: [900, 1620, 2925],
      damage: [65, 117, 210],
      armor: 40,
      magicRes: 40,
      attackSpeed: 0.65,
      range: 1,
    },
  },
  {
    name: 'Gwen',
    cost: 4,
    traits: ['Sugarcraft', 'Warrior'],
    stats: {
      health: [950, 1710, 3090],
      damage: [85, 153, 276],
      armor: 40,
      magicRes: 40,
      attackSpeed: 0.9,
      range: 1,
    },
    bestItems: ['Hand of Justice', 'Ionic Spark', 'Jeweled Gauntlet'],
  },
  {
    name: 'Hecarim',
    cost: 3,
    traits: ['Arcana', 'Bastion', 'Multistriker'],
    role: atkFgt,
    position: front,
    bestItems: ['Bloodthirster', "Sterak's Gage", "Titan's Resolve"],
    stats: {
      health: [1100, 1980, 3600],
      damage: [75, 135, 243],
      armor: 50,
      magicRes: 50,
      attackSpeed: 0.75,
      range: 1,
    },
  },
  {
    name: 'Hwei',
    cost: 3,
    traits: ['Frost', 'Blaster'],
    stats: {
      health: [600, 1080, 1944],
      damage: [50, 90, 162],
      armor: 25,
      magicRes: 25,
      attackSpeed: 0.75,
      range: 1,
    },
    bestItems: ['Blue Buff', 'Jeweled Gauntlet', "Nashor's Tooth"],
  },
  {
    name: 'Jax',
    cost: 1,
    traits: ['Chrono', 'Multistriker'],
    role: magTank,
    position: front,
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
    stats: {
      health: 800,
      mana: 0,
      armor: 30,
      mr: 30,
      damage: 50,
      dps: 35,
      attackSpeed: 0.65,
      critRate: 25,
      range: 1,
    },
  },
  {
    name: 'Jayce',
    cost: 1,
    traits: ['Shapeshifter', 'Portal'],
    stats: {
      health: 600,
      mana: 60,
      armor: 30,
      mr: 30,
      damage: 50,
      dps: 35,
      attackSpeed: 0.7,
      critRate: 25,
      range: 4,
    },
    bestItems: ['Bloodthirster', "Sterak's Gage", "Titan's Resolve"],
  },
  {
    name: 'Jinx',
    cost: 3,
    traits: ['Sugarcraft', 'Hunter'],
    stats: {
      health: 800,
      mana: 100,
      armor: 30,
      mr: 30,
      damage: 70,
      dps: 50,
      attackSpeed: 0.75,
      critRate: 25,
      range: 4,
    },
    bestItems: ["Guinsoo's Rageblade", 'Last Whisper', "Runaan's Hurricane"],
  },
  {
    name: 'Kalista',
    cost: 4,
    traits: ['Multistriker', 'Faerie'],
    role: atkCarry,
    position: back,
    bestItems: ["Faerie Queen's Crown", "Guinsoo's Rageblade", 'Last Whisper'],
    stats: {
      health: 850,
      mana: 60,
      armor: 30,
      mr: 30,
      damage: 60,
      dps: 45,
      attackSpeed: 0.75,
      critRate: 25,
      range: 4,
    },
  },
  {
    name: 'Karma',
    cost: 4,
    traits: ['Chrono', 'Incantor'],
    role: magCast,
    position: back,
    bestItems: ['Blue Buff', 'Morellonomicon', "Nashor's Tooth"],
    stats: {
      health: 750,
      mana: 70,
      armor: 30,
      mr: 30,
      damage: 60,
      dps: 40,
      attackSpeed: 0.6,
      critRate: 25,
      range: 4,
    },
  },
  {
    name: 'Kassadin',
    cost: 2,
    traits: ['Portal', 'Multistriker'],
    role: magFgt,
    position: front,
    bestItems: ['Bloodthirster', "Guinsoo's Rageblade", 'Quicksilver'],
    stats: {
      health: 750,
      mana: 50,
      armor: 30,
      mr: 30,
      damage: 60,
      dps: 40,
      attackSpeed: 0.6,
      critRate: 25,
      range: 4,
    },
  },
  {
    name: 'Katarina',
    cost: 3,
    traits: ['Warrior', 'Faerie'],
    stats: {
      health: 800,
      mana: 10,
      armor: 45,
      mr: 45,
      damage: 50,
      dps: 38,
      attackSpeed: 0.75,
      critRate: 25,
      range: 1,
    },
    bestItems: ['Hand of Justice', 'Jeweled Gauntlet', "Faerie Queen's Crown"],
  },
  {
    name: "Kog'Maw",
    cost: 2,
    traits: ['Honeymancy', 'Hunter'],
    role: atkCarry,
    position: back,
    bestItems: ['Spear of Shojin', 'Last Whisper', 'Infinity Edge'],
    stats: {
      health: 900,
      mana: 100,
      armor: 30,
      mr: 30,
      damage: 80,
      dps: 50,
      attackSpeed: 0.7,
      critRate: 25,
      range: 5,
    },
  },
  {
    name: 'Lillia',
    cost: 1,
    traits: ['Faerie', 'Bastion'],
    stats: {
      health: [850, 1530, 2754],
      damage: [50, 80, 118],
      dps: [33, 53, 78],
      armor: 50,
      mr: 50,
      speed: 0.65,
      mana: [0, 60],
      range: 3,
    },
    bestItems: ["Archangel's Staff", 'Bloodthirster', "Queenguard's Armor"],
  },
  {
    name: 'Milio',
    cost: 5,
    traits: ['Faerie', 'Scholar'],
    stats: {
      health: [800, 1440, 2592],
      damage: [50, 70, 100],
      dps: [35, 49, 70],
      armor: 40,
      mr: 60,
      speed: 0.8,
      mana: [0, 60],
      range: 4,
    },
    bestItems: ['Adaptive Helm', "Nashor's Tooth", 'Spear of Shojin'],
  },
  {
    name: 'Mordekaiser',
    cost: 3,
    traits: ['Vanguard', 'Eldritch'],
    role: magTank,
    pos: front,
    bestItems: ["Warmog's Armor", "Dragon's Claw", 'Gargoyle Stoneplate'],
    stats: {
      health: [850, 1530, 2754],
      damage: [60, 90, 135],
      dps: [36, 54, 81],
      armor: 50,
      mr: 50,
      speed: 0.6,
      mana: [0, 40],
      range: 1,
    },
  },
  {
    name: 'Morgana',
    cost: 5,
    traits: ['Witchcraft', 'Preserver', 'Bat Queen'],
    role: magFgt,
    position: front,
    bestItems: ['Bloodthirster', 'Crownguard', 'Redemption'],
    stats: {
      health: [1100, 1980, 3564],
      damage: [50, 75, 113],
      dps: [40, 60, 90],
      armor: 60,
      mr: 60,
      speed: 0.8,
      mana: [40, 110],
      range: 3,
    },
  },
  {
    name: 'Nami',
    cost: 4,
    traits: ['Eldritch', 'Mage'],
    stats: {
      health: [950, 1710, 3078],
      damage: [45, 60, 90],
      dps: [30, 45, 67],
      armor: 40,
      mr: 50,
      speed: 0.75,
      mana: [0, 50],
      range: 4,
    },
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
  },
  {
    name: 'Nasus',
    cost: 4,
    traits: ['Pyro', 'Shapeshifter'],
    stats: {
      health: [950, 1710, 3078],
      damage: [50, 75, 112],
      dps: [35, 53, 79],
      armor: 40,
      mr: 50,
      speed: 0.75,
      mana: [0, 40],
      range: 1,
    },
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
  },
  {
    name: 'Neeko',
    cost: 3,
    traits: ['Witchcraft', 'Shapeshifter'],
    role: magTank,
    position: front,
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
    stats: {
      health: [850, 1530, 2754],
      damage: [60, 80, 100],
      dps: [35, 53, 79],
      armor: 40,
      mr: 50,
      speed: 0.7,
      mana: [0, 40],
      range: 3,
    },
  },
  {
    name: 'Nilah',
    cost: 2,
    traits: ['Eldritch', 'Warrior'],
    role: atkRpr,
    position: front,
    bestItems: ['Bloodthirster', "Guinsoo's Rageblade", "Titan's Resolve"],
    stats: {
      health: [800, 1440, 2592],
      damage: [50, 80, 118],
      dps: [33, 53, 78],
      armor: 50,
      mr: 50,
      speed: 0.6,
      mana: [0, 60],
      range: 1,
    },
  },
  {
    name: 'Nomsy',
    cost: 1,
    traits: ['Hunter', 'Dragon'],
    role: atkCst,
    stats: {
      health: [500, 900, 1620],
      damage: [50, 75, 113],
      dps: [35, 53, 79],
      armor: 15,
      mr: 15,
      speed: 0.7,
      mana: [10, 50],
    },
    bestItems: ['Infinity Edge', 'Last Whisper', 'Spear of Shojin'],
  },
  {
    name: 'Norra & Yuumi',
    cost: 5,
    traits: ['Mage', 'Portal', 'Best Friends'],
    stats: {
      health: [900, 1620, 2916],
      damage: [50, 90, 162],
      dps: [40, 72, 130],
      armor: 40,
      mr: 40,
      attackSpeed: 0.8,
      critRate: 25,
      range: 4,
      mana: [30, 90],
    },
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
  },
  {
    name: 'Nunu',
    cost: 2,
    traits: ['Honeymancy', 'Bastion'],
    role: magTank,
    position: front,
    bestItems: ['Bramble Vest', "Dragon's Claw", "Warmog's Armor"],
    stats: {
      health: [1100, 1980, 3564],
      damage: [80, 120, 180],
      dps: [56, 84, 126],
      armor: 60,
      mr: 60,
      attackSpeed: 0.7,
      mana: [60, 150],
    },
  },
  {
    name: 'Olaf',
    cost: 4,
    traits: ['Frost', 'Hunter'],
    stats: {
      health: '1150 / 2070 / 4226',
      armor: 60,
      mr: 60,
      damage: '75 / 113 / 169',
      atkSpd: 0.85,
    },
    bestItems: ['Bloodthirster', "Sterak's Gage", "Titan's Resolve"],
  },
  {
    name: 'Poppy',
    cost: 1,
    traits: ['Witchcraft', 'Bastion'],
    role: atkTank,
    position: front,
    bestItems: ['Bloodthirster', "Sterak's Gage", "Titan's Resolve"],
    stats: {
      health: '650 / 1170 / 2106',
      armor: 45,
      mr: 45,
      damage: '60 / 90 / 135',
      atkSpd: 0.65,
    },
  },
  {
    name: 'Rumble',
    cost: 2,
    traits: ['Blaster', 'Sugarcraft', 'Vanguard'],
    role: magTank,
    position: front,
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
    stats: {
      health: '800 / 1440 / 2592',
      armor: 45,
      mr: 45,
      damage: '50 / 75 / 113',
      atkSpd: 0.65,
    },
  },
  {
    name: 'Ryze',
    cost: 4,
    traits: ['Portal', 'Scholar'],
    stats: {
      health: '850 / 1530 / 2754',
      armor: 30,
      mr: 30,
      damage: '40 / 72 / 130',
      atkSpd: 0.8,
    },
    bestItems: ["Archangel's Staff", "Guinsoo's Rageblade", 'Spear of Shojin'],
  },

  {
    name: 'Rakan',
    cost: 4,
    traits: ['Preserver', 'Faerie'],
    stats: {
      health: [1050, 1890, 3402],
      damage: [60, 90, 135],
      dps: [42, 63, 95],
      armor: 60,
      mr: 60,
      attackSpeed: 0.7,
      mana: [60, 140],
    },
    bestItems: ['Gargoyle Stoneplate', "Queenguard's Armor", "Warmog's Armor"],
  },
  {
    name: 'Seraphine',
    cost: 1,
    traits: ['Faerie', 'Mage'],
    stats: {
      health: 700,
      armor: 20,
      magicResist: 20,
      damage: 35,
      attackSpeed: 0.65,
      range: 3,
    },
    bestItems: ["Faerie Queen's Crown", 'Morellonomicon', 'Spear of Shojin'],
  },
  {
    name: 'Shen',
    cost: 3,
    traits: ['Bastion', 'Pyro'],
    stats: {
      health: 850,
      armor: 50,
      magicResist: 50,
      damage: 60,
      attackSpeed: 0.7,
      range: 1,
    },
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
  },
  {
    name: 'Shyvana',
    cost: 2,
    traits: ['Dragon', 'Shapeshifter'],
    stats: {
      health: 900,
      armor: 50,
      magicResist: 50,
      damage: 90,
      attackSpeed: 0.7,
      range: 2,
    },
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
  },
  {
    name: 'Smolder',
    cost: 5,
    traits: ['Dragon', 'Blaster'],
    stats: {
      health: 750,
      armor: 45,
      magicResist: 45,
      damage: 55,
      attackSpeed: 0.65,
      range: 1,
    },
    bestItems: ["Guinsoo's Rageblade", 'Infinity Edge', 'Last Whisper'],
  },
  {
    name: 'Soraka',
    cost: 1,
    traits: ['Sugarcraft', 'Mage'],
    stats: {
      health: 650,
      armor: 20,
      magicResist: 20,
      damage: 40,
      attackSpeed: 0.65,
      range: 4,
    },
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
  },
  {
    name: 'Swain',
    cost: 3,
    traits: ['Shapeshifter', 'Frost'],
    stats: {
      health: 900,
      armor: 45,
      magicResist: 45,
      damage: 60,
      attackSpeed: 0.6,
      range: 2,
    },
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
  },
  {
    name: 'Syndra',
    cost: 2,
    traits: ['Eldritch', 'Incantor'],
    role: magCast,
    position: back,
    bestItems: ["Guinsoo's Rageblade", "Nashor's Tooth", 'Spear of Shojin'],
    stats: {
      health: 850,
      armor: 25,
      magicResist: 25,
      damage: 50,
      attackSpeed: 0.75,
      range: 4,
    },
  },
  {
    name: 'Tahm Kench',
    cost: 4,
    traits: ['Arcana', 'Vanguard'],
    role: magTank,
    position: front,
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
    stats: {
      health: 700,
      armor: 40,
      magicResist: 40,
      damage: 50,
      attackSpeed: 0.6,
      range: 1,
    },
  },
  {
    name: 'Taric',
    cost: 4,
    traits: ['Portal', 'Bastion'],
    stats: {
      health: 800,
      mana: 150,
      armor: 50,
      mr: 50,
      damage: 60,
      dps: 40,
      range: 1,
      attackSpeed: 0.67,
    },
    bestItems: ['Gargoyle Stoneplate', "Warmog's Armor", 'Redemption'],
  },
  {
    name: 'Tristana',
    cost: 2,
    traits: ['Faerie', 'Blaster'],
    stats: {
      health: 550,
      mana: 60,
      armor: 20,
      mr: 20,
      damage: 55,
      dps: 41,
      range: 4,
      attackSpeed: 0.75,
    },
    bestItems: ["Guinsoo's Rageblade", 'Infinity Edge', 'Last Whisper'],
  },
  {
    name: 'Twitch',
    cost: 1,
    traits: ['Frost', 'Hunter'],
    stats: {
      health: 450,
      mana: 35,
      armor: 15,
      mr: 15,
      damage: 50,
      dps: 35,
      range: 5,
      attackSpeed: 0.7,
    },
    bestItems: ["Guinsoo's Rageblade", 'Infinity Edge', 'Last Whisper'],
  },
  {
    name: 'Varus',
    cost: 4,
    traits: ['Pyro', 'Blaster'],
    stats: {
      health: 700,
      mana: 60,
      armor: 25,
      mr: 25,
      damage: 65,
      dps: 45,
      range: 5,
      attackSpeed: 0.7,
    },
    bestItems: ['Infinity Edge', 'Last Whisper', 'Spear of Shojin'],
  },
  {
    name: 'Veigar',
    cost: 3,
    traits: ['Honeymancy', 'Mage'],
    role: magCast,
    position: back,
    bestItems: ['Blue Buff', 'Jeweled Gauntlet', "Nashor's Tooth"],
    stats: {
      health: 800,
      mana: 90,
      armor: 25,
      mr: 25,
      damage: 70,
      dps: 30,
      range: 4,
      attackSpeed: 0.65,
    },
  },
  {
    name: 'Vex',
    cost: 3,
    traits: ['Chrono', 'Mage'],
    role: magTank,
    position: front,
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', "Warmog's Armor"],
    stats: {
      health: 750,
      mana: 50,
      armor: 35,
      mr: 35,
      damage: 60,
      dps: 36,
      range: 4,
      attackSpeed: 0.6,
    },
  },
  {
    name: 'Warwick',
    cost: 1,
    traits: ['Frost', 'Vanguard'],
    role: atkFgt,
    position: front,
    bestItems: ['Bloodthirster', "Guinsoo's Rageblade", 'Quicksilver'],
    stats: {
      health: 700,
      mana: 0,
      armor: 40,
      mr: 40,
      damage: 45,
      dps: 34,
      range: 1,
      attackSpeed: 0.75,
    },
  },
  {
    name: 'Wukong',
    cost: 1,
    traits: ['Druid'],
    role: magTank,
    position: front,
    bestItems: ["Dragon's Claw", 'Gargoyle Stoneplate', 'Gargoyle Stoneplate'],
    stats: {
      health: 650,
      mana: 50,
      armor: 35,
      mr: 35,
      damage: 55,
      dps: 38,
      range: 1,
      attackSpeed: 0.7,
    },
  },
  {
    name: 'Xerath',
    cost: 5,
    traits: ['Arcana', 'Ascendant'],
    stats: {
      health: [600, 1080, 1944],
      mana: [20, 60],
      armor: 25,
      magic_resist: 25,
      ability_power: 100,
      dps: [55, 99, 179],
      damage: [80, 144, 259],
      attack_speed: 0.7,
      crit_rate: 25,
      range: 4,
    },
    bestItems: ['Spear of Shojin', "Archangel's Staff", 'Jeweled Gauntlet'],
  },
  {
    name: 'Ziggs',
    cost: 1,
    traits: ['Honeymancy', 'Incantor'],
    role: magCast,
    position: back,
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
    stats: {
      health: [450, 810, 1458],
      mana: 50,
      armor: 15,
      magic_resist: 15,
      ability_power: 100,
      dps: [28, 50, 91],
      damage: [40, 72, 130],
      attack_speed: 0.7,
      crit_rate: 25,
      range: 4,
    },
  },
  {
    name: 'Zilean',
    cost: 2,
    traits: ['Chrono', 'Frost', 'Preserver'],
    role: magCast,
    position: back,
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
    stats: {
      health: [550, 990, 1782],
      mana: [20, 70],
      armor: 20,
      magic_resist: 20,
      ability_power: 100,
      dps: [30, 54, 97],
      damage: [40, 72, 130],
      attack_speed: 0.75,
      crit_rate: 25,
      range: 4,
    },
  },
  {
    name: 'Zoe',
    cost: 1,
    traits: ['Portal', 'Witchcraft', 'Scholar'],
    role: magCast,
    position: back,
    bestItems: ['Blue Buff', "Nashor's Tooth", 'Spear of Shojin'],
    stats: {
      health: [750, 1350, 2430],
      mana: [0, 60],
      armor: 30,
      magic_resist: 30,
      ability_power: 100,
      dps: [36, 65, 117],
      attack_speed: 0.72,
      crit_rate: 25,
      range: 3,
    },
  },
];

validateTraits(CURRENT_CHAMPIONS, TRAITS);

validateItems(CURRENT_CHAMPIONS, CURRENT_ITEMS);

export default CURRENT_CHAMPIONS;
