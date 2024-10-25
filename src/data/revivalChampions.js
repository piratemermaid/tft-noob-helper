const front = 'front';
const back = 'back';

const atkTank = 'Attack Tank';
const atkFgtr = 'Attack Fighter';
const atkCarry = 'Attack Carry';
// const atkCst = 'Attack Caster';
const atkRpr = 'Attack Reaper';
const magCst = 'Magic Caster';
const magTank = 'Magic Tank';
const magRpr = 'Magic Reaper';
const magFgtr = 'Magic Fighter';
const magCarry = 'Magic Carry';

const greenSpear = 'Spear of Shojin';
const blood = 'Bloodthirster';
// const purpleCloak = 'Edge of Night';
const blueBuff = 'Blue Buff';
const orangeMetalArmor = 'Gargoyle Stoneplate';
const orangeSpikyArmor = 'Bramble Vest';
const blueLitThing = 'Ionic Spark';
const metalCircles = 'Evenshroud';
const hextechGunblade = 'Hextech Gunblade';
const runaanHurricane = "Runaan's Hurricane";
const armorWithGreen = "Warmog's Armor";
// const lightningSword = 'Statikk Shiv';
const spikyHeart = 'Steadfast Heart';
const crown = 'Crownguard';
const arthurFist = "Sterak's Gage";
const helmetWithRedEyes = "Titan's Resolve";
const fieryFist = 'Hand of Justice';
const pinkFist = 'Jeweled Gauntlet';
const bow = 'Last Whisper';
const fierySword = 'Deathblade';
const blueScytheyThing = 'Giant Slayer';
const scorpionTailLookingThing = 'Guardbreaker';
const nashorsTooth = "Nashor's Tooth";
const infinityEdge = 'Infinity Edge';
const redGreenJewel = 'Redemption';
const purpleHelmet = 'Adaptive Helm';
const archangelStaff = "Archangel's Staff";
const magicHat = "Rabadon's Deathcap";
const metalyClawBlue = "Dragon's Claw";
const rageblade = "Guinsoo's Rageblade";
const murderCloak = 'Quicksilver';
// const spellBook = 'Morellonomicon';
const fieryArmor = 'Sunfire Cape';
const blueArmor = "Protector's Vow";
const redBuff = 'Red Buff';
const electricSword = 'Statikk Shiv';

const atkTankItems = [
  scorpionTailLookingThing,
  armorWithGreen,
  orangeSpikyArmor,
  orangeMetalArmor,
  fieryArmor,
  redGreenJewel,
  blueArmor,
  metalCircles,
];

const atkFgtrItems = [
  blood,
  fieryFist,
  bow,
  blueScytheyThing,
  scorpionTailLookingThing,
  helmetWithRedEyes,
  murderCloak,
  arthurFist,
];

const atkRprItems = [
  fierySword,
  blueScytheyThing,
  bow,
  murderCloak,
  fieryFist,
  infinityEdge,
  runaanHurricane,
  blood,
];

const magTankItems = [
  metalyClawBlue,
  fieryArmor,
  orangeMetalArmor,
  orangeSpikyArmor,
  armorWithGreen,
  redGreenJewel,
  spikyHeart,
  blueArmor,
];

const magCastItems = [
  greenSpear,
  archangelStaff,
  magicHat,
  pinkFist,
  blueScytheyThing,
  "Nashor's Tooth",
  scorpionTailLookingThing,
  purpleHelmet,
];

const magRprItems = [
  magicHat,
  pinkFist,
  blueScytheyThing,
  blueLitThing,
  crown,
  fieryFist,
  hextechGunblade,
  scorpionTailLookingThing,
];

const magCastBlueBuffItems = [
  blueBuff,
  archangelStaff,
  magicHat,
  pinkFist,
  blueScytheyThing,
  nashorsTooth,
  greenSpear,
  purpleHelmet,
];

const magCarryItems = [
  fierySword,
  pinkFist,
  archangelStaff,
  magicHat,
  blueScytheyThing,
  electricSword,
  scorpionTailLookingThing,
  nashorsTooth,
];

const magCarryItemsAshe = [
  fierySword,
  pinkFist,
  archangelStaff,
  magicHat,
  blueScytheyThing,
  greenSpear,
  scorpionTailLookingThing,
  purpleHelmet,
];

const magFgtrItems = [
  blood,
  blueScytheyThing,
  pinkFist,
  helmetWithRedEyes,
  fieryFist,
  blueLitThing,
  magicHat,
  crown,
];

const atkCarryItems = [
  rageblade,
  blueScytheyThing,
  fierySword,
  infinityEdge,
  runaanHurricane,
  bow,
  scorpionTailLookingThing,
  redBuff,
];

const atkCarryInfinityEdgeItems = [
  infinityEdge,
  bow,
  scorpionTailLookingThing,
  blueScytheyThing,
  rageblade,
  runaanHurricane,
  murderCloak,
  fieryFist,
];

const revivalChampions = [
  {
    name: 'Aatrox',
    cost: 1,
    traits: ['Redeemed', 'Legionnaire'],
    role: atkFgtr,
    position: front,
    ability: 'Deathbringer Stance',
    bestItems: atkFgtrItems,
  },
  {
    name: 'Akshan',
    cost: 5,
    traits: ['Sentinel', 'Ranger'],
    role: atkCarry,
    position: back,
    ability: 'Heroic Swing',
    bestItems: atkCarryItems,
  },
  {
    name: 'Aphelios',
    cost: 4,
    traits: ['Nightbringer', 'Ranger'],
    role: atkCarry,
    position: back,
    ability: 'Moonlight Vigil',
    bestItems: atkCarryItems,
  },
  {
    name: 'Ashe',
    cost: 3,
    traits: ['Draconic', 'Ranger'],
    role: magCarry,
    position: null,
    ability: 'Enchanted Crystal Arrow',
    bestItems: magCarryItemsAshe,
  },
  {
    name: 'Brand',
    cost: 2,
    traits: ['Abomination', 'Spellweaver'],
    role: magCst,
    position: back,
    ability: 'Sear',
    bestItems: magCastBlueBuffItems,
  },
  {
    name: 'Diana',
    cost: 4,
    traits: ['Nightbringer', 'Assassin'],
    role: magRpr,
    position: front,
    ability: 'Moonfall',
    bestItems: magRprItems,
  },
  {
    name: 'Draven',
    cost: 4,
    traits: ['Forgotten', 'Legionnaire'],
    role: atkCarry,
    position: back,
    ability: 'Spinning Axe',
    bestItems: atkCarryInfinityEdgeItems,
  },
  {
    name: 'Fiddlesticks',
    cost: 4,
    traits: ['Abomination', 'Revenant', 'Mystic'],
    role: magTank,
    position: front,
    ability: 'Crowstorm',
    bestItems: magTankItems,
  },
  {
    name: 'Galio',
    cost: 4,
    traits: ['Draconic', 'Sentinel', 'Knight'],
    role: magTank,
    position: front,
    ability: 'Shield of Durand',
    bestItems: magTankItems,
  },
  {
    name: 'Garen',
    cost: 5,
    traits: ['Victorious', 'Dawnbringer', 'Knight'],
    role: null,
    position: null,
    ability: "God-Lion's Justice",
    bestItems: [],
  },
  {
    name: 'Gragas',
    cost: 1,
    traits: ['Dawnbringer', 'Brawler'],
    role: magTank,
    position: front,
    ability: 'Drunken Rage',
    bestItems: magTankItems,
  },
  {
    name: 'Gwen',
    cost: 5,
    traits: ['Inanimate', 'Mystic'],
    role: magFgtr,
    position: front,
    ability: "Skip 'n Slash",
    bestItems: magFgtrItems,
  },
  {
    name: 'Hecarim',
    cost: 2,
    traits: ['Forgotten', 'Cavalier'],
    role: magTank,
    position: front,
    ability: 'Spirit of Dread',
    bestItems: magTankItems,
  },
  {
    name: 'Heimerdinger',
    cost: 5,
    traits: ['Draconic', 'Renewer', 'Caretaker'],
    role: null,
    position: null,
    ability: 'UPGRADE!!!',
    bestItems: [],
  },
  {
    name: 'Irelia',
    cost: 2,
    traits: ['Sentinel', 'Skirmisher', 'Legionnaire'],
    role: magTank,
    position: front,
    ability: 'Defiant Dance',
    bestItems: magTankItems,
  },
  {
    name: 'Ivern',
    cost: 4,
    traits: ['Revenant', 'Invoker', 'Renewer'],
    role: magCst,
    position: null,
    ability: 'Daisy!',
    bestItems: [
      greenSpear,
      fieryArmor,
      orangeMetalArmor,
      orangeSpikyArmor,
      armorWithGreen,
      archangelStaff,
      spikyHeart,
      blueArmor,
    ],
  },
  {
    name: 'Jax',
    cost: 4,
    traits: ['Ironclad', 'Skirmisher'],
    role: atkFgtr,
    position: front,
    ability: 'Empowered Strike',
    bestItems: [],
  },
  {
    name: 'Kalista',
    cost: 1,
    traits: ['Abomination', 'Legionnaire'],
    role: atkCarry,
    position: back,
    ability: 'Pierce',
    bestItems: atkCarryItems,
  },
  {
    name: 'Karma',
    cost: 4,
    traits: ['Dawnbringer', 'Invoker'],
    role: null,
    position: null,
    ability: 'Soulflare',
    bestItems: [],
  },
  {
    name: 'Kayle',
    cost: 5,
    traits: ['Redeemed', 'Legionnaire'],
    role: atkCarry,
    position: back,
    ability: 'Divine Ascent',
    bestItems: atkCarryItems,
  },
  {
    name: 'Kennen',
    cost: 2,
    traits: ['Hellion', 'Skirmisher'],
    role: magFgtr,
    position: front,
    ability: 'Lightning Rush',
    bestItems: magFgtrItems,
  },
  {
    name: "Kha'Zix",
    cost: 1,
    traits: ['Dawnbringer', 'Assassin'],
    role: magRpr,
    position: front,
    ability: 'Taste Their Fear',
    bestItems: magRprItems,
  },
  {
    name: 'Kled',
    cost: 1,
    traits: ['Hellion', 'Cavalier'],
    role: atkFgtr,
    position: front,
    ability: 'Violent Tendencies',
    bestItems: atkFgtrItems,
  },
  {
    name: 'Lee Sin',
    cost: 3,
    traits: ['Nightbringer', 'Skirmisher'],
    role: magTank,
    position: front,
    ability: 'Tempest',
    bestItems: [
      metalyClawBlue,
      fieryArmor,
      orangeMetalArmor,
      orangeSpikyArmor,
      armorWithGreen,
      redGreenJewel,
      spikyHeart,
      blueArmor,
    ],
  },
  {
    name: 'Leona',
    cost: 1,
    traits: ['Redeemed', 'Knight'],
    role: atkTank,
    position: front,
    ability: 'Eclipse',
    bestItems: atkTankItems,
  },
  {
    name: 'Lucian',
    cost: 4,
    traits: ['Sentinel', 'Cannoneer'],
    role: atkCarry,
    position: back,
    ability: 'The Culling',
    bestItems: atkCarryItems,
  },
  {
    name: 'Lulu',
    cost: 3,
    traits: ['Hellion', 'Mystic'],
    role: magCst,
    position: back,
    ability: 'Whimsy',
    bestItems: magCastItems,
  },
  {
    name: 'Lux',
    cost: 3,
    traits: ['Redeemed', 'Mystic'],
    role: magCst,
    position: back,
    ability: 'Prismatic Barrier',
    bestItems: magCastItems,
  },
  {
    name: 'Miss Fortune',
    cost: 3,
    traits: ['Forgotten', 'Cannoneer'],
    role: magCst,
    position: back,
    ability: 'Make It Rain',
    bestItems: magCastItems,
  },
  {
    name: 'Nautilus',
    cost: 2,
    traits: ['Ironclad', 'Knight'],
    role: magTank,
    position: front,
    ability: 'Depth Charge',
    bestItems: magTankItems,
  },
  {
    name: 'Nidalee',
    cost: 3,
    traits: ['Dawnbringer', 'Skirmisher'],
    role: atkFgtr,
    position: back,
    ability: 'Aspect of the Cougar',
    bestItems: atkFgtrItems,
  },
  {
    name: 'Nocturne',
    cost: 3,
    traits: ['Revenant', 'Assassin'],
    role: atkRpr,
    position: front,
    ability: 'Umbra Blades',
    bestItems: atkRprItems,
  },
  {
    name: 'Nunu & Willump',
    cost: 3,
    traits: ['Abomination', 'Brawler'],
    role: magTank,
    position: front,
    ability: 'Consume',
    bestItems: magTankItems,
  },
  {
    name: 'Olaf',
    cost: 1,
    traits: ['Sentinel', 'Skirmisher'],
    role: atkFgtr,
    position: front,
    ability: 'Berserker Rage',
    bestItems: atkFgtrItems,
  },
  {
    name: 'Poppy',
    cost: 1,
    traits: ['Hellion', 'Knight'],
    role: magTank,
    position: front,
    ability: 'Iron Ambassador',
    bestItems: magTankItems,
  },
  {
    name: 'Pyke',
    cost: 2,
    traits: ['Sentinel', 'Assassin'],
    role: magRpr,
    position: front,
    ability: 'Phantom Undertow',
    bestItems: magRprItems,
  },
  {
    name: 'Rakan',
    cost: 3,
    traits: ['Sentinel', 'Renewer'],
    role: magCst,
    position: front,
    ability: 'Battle Dance',
    bestItems: magCastItems,
  },
  {
    name: 'Rell',
    cost: 4,
    traits: ['Redeemed', 'Ironclad', 'Cavalier'],
    role: atkTank,
    position: front,
    ability: 'Attract and Repel',
    bestItems: atkTankItems,
  },
  {
    name: 'Riven',
    cost: 3,
    traits: ['Dawnbringer', 'Legionnaire'],
    role: atkTank,
    position: front,
    ability: 'Blade of the Exile',
    bestItems: atkTankItems,
  },
  {
    name: 'Sejuani',
    cost: 2,
    traits: ['Nightbringer', 'Brawler', 'Cavalier'],
    role: magTank,
    position: front,
    ability: 'Fury of the North',
    bestItems: magTankItems,
  },
  {
    name: 'Senna',
    cost: 1,
    traits: ['Sentinel', 'Cannoneer'],
    role: magCst,
    position: back,
    ability: 'Last Embrace',
    bestItems: magCastItems,
  },
  {
    name: 'Sett',
    cost: 2,
    traits: ['Draconic', 'Brawler'],
    role: atkFgtr,
    position: front,
    ability: 'Haymaker',
    bestItems: atkFgtrItems,
  },
  {
    name: 'Soraka',
    cost: 2,
    traits: ['Dawnbringer', 'Renewer'],
    role: magCst,
    position: back,
    ability: 'Equinox',
    bestItems: magCastItems,
  },
  {
    name: 'Syndra',
    cost: 2,
    traits: ['Redeemed', 'Invoker'],
    role: magCst,
    position: null,
    ability: 'Force of Will',
    bestItems: magCastItems,
  },
  {
    name: 'Teemo',
    cost: 5,
    traits: ['Hellion', 'Cruel', 'Invoker'],
    role: magCst,
    position: back,
    ability: "Teemo's Cruelty",
    bestItems: magCastBlueBuffItems,
  },
  {
    name: 'Thresh',
    cost: 2,
    traits: ['Forgotten', 'Knight'],
    role: magTank,
    position: front,
    ability: 'Death Sentence',
    bestItems: magTankItems,
  },
  {
    name: 'Tristana',
    cost: 2,
    traits: ['Hellion', 'Cannoneer'],
    role: atkCarry,
    position: back,
    ability: 'Rocket Jump',
    bestItems: atkCarryItems,
  },
  {
    name: 'Udyr',
    cost: 1,
    traits: ['Draconic', 'Skirmisher'],
    role: atkFgtr,
    position: front,
    ability: "Monkey's Agility",
    bestItems: atkFgtrItems,
  },
  {
    name: 'Varus',
    cost: 2,
    traits: ['Redeemed', 'Ranger'],
    role: atkCarry,
    position: back,
    ability: 'Hail of Arrows',
    bestItems: atkCarryItems,
  },
  {
    name: 'Vayne',
    cost: 1,
    traits: ['Forgotten', 'Ranger'],
    role: magCarry,
    position: null,
    ability: 'Silver Bolts',
    bestItems: magCarryItems,
  },
  {
    name: "Vel'Koz",
    cost: 4,
    traits: ['Redeemed', 'Spellweaver'],
    role: magCst,
    position: back,
    ability: 'Life Form Disintegration Ray',
    bestItems: magCastItems,
  },
  {
    name: 'Viego',
    cost: 5,
    traits: ['Forgotten', 'Skirmisher', 'Assassin'],
    role: magRpr,
    position: front,
    ability: "Sovereign's Domination",
    bestItems: magRprItems,
  },
  {
    name: 'Vladimir',
    cost: 1,
    traits: ['Nightbringer', 'Renewer'],
    role: magTank,
    position: front,
    ability: 'Transfusion',
    bestItems: [
      metalyClawBlue,
      fieryArmor,
      orangeMetalArmor,
      orangeSpikyArmor,
      purpleHelmet,
      armorWithGreen,
      redGreenJewel,
      spikyHeart,
      blueArmor,
    ],
  },
  {
    name: 'Volibear',
    cost: 5,
    traits: ['Revenant', 'Brawler'],
    role: magTank,
    position: front,
    ability: 'Thundering Smash',
    bestItems: magTankItems,
  },
  {
    name: 'Yasuo',
    cost: 3,
    traits: ['Nightbringer', 'Legionnaire'],
    role: magFgtr,
    position: front,
    ability: 'Last Breath',
    bestItems: magFgtrItems,
  },
  {
    name: 'Ziggs',
    cost: 1,
    traits: ['Hellion', 'Spellweaver'],
    role: magCst,
    position: null,
    ability: 'Bouncing Bomb',
    bestItems: [
      'Blue Buff',
      archangelStaff,
      magicHat,
      pinkFist,
      blueScytheyThing,
      "Nashor's Tooth",
      greenSpear,
      purpleHelmet,
    ],
  },
  {
    name: 'Zyra',
    cost: 3,
    traits: ['Draconic', 'Spellweaver'],
    role: magCst,
    position: back,
    ability: 'Grasping Roots',
    bestItems: magCastItems,
  },
];

export default revivalChampions;
