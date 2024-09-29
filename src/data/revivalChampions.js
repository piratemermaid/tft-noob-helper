const atkTank = 'Attack Tank';
const atkFgtr = 'Attack Fighter';
const atkCarry = 'Attack Carry';
const atkCst = 'Attack Caster';
const magCst = 'Magic Caster';
const magTank = 'Magic Tank';
const magRpr = 'Magic Reaper';

const greenSpear = 'Spear of Shojin';
const blood = 'Bloodthirster';
const purpleCloak = 'Edge of Night';
const blueCircle = 'Blue Buff';
const metalArmorWithOrange = 'Gargoyle Stoneplate';
const spikyArmorWithOrange = 'Gargoyle Stoneplate';
const blueLitThing = 'Ionic Spark';
const metalCircles = 'Evenshroud';
const hextechGunblade = 'Hextech Gunblade';
const ranaanHurricane = "Runaan's Hurricane";
const armorWithGreen = "Warmog's Armor";
const lightningSword = 'Statikk Shiv';
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
const goldenHorn = "Nashor's Tooth";
const infinityEdge = 'Infinity Edge';
const redGreenJewel = 'Redemption';
const purpleHelmet = 'Adaptive Helm';
const archangelStaff = "Archangel's Staff";
const magicHat = "Rabadon's Deathcap";
const metalyClawBlue = "Dragon's Claw";
const rageblade = "Guinsoo's Rageblade";
const murderCloak = 'Quicksilver';
const spellBook = 'Morellonomicon';
const fieryArmor = 'Sunfire Cape';

const revivalChampions = [
  {
    name: 'Aatrox',
    cost: 1,
    traits: ['Redeemed', 'Legionnaire'],
    role: null,
    ability: 'Deathbringer Stance',
    bestItems: [],
  },
  {
    name: 'Akshan',
    cost: 5,
    traits: ['Sentinel', 'Ranger'],
    role: null,
    ability: 'Heroic Swing',
    bestItems: [],
  },
  {
    name: 'Aphelios',
    cost: 4,
    traits: ['Nightbringer', 'Ranger'],
    role: null,
    ability: 'Moonlight Vigil',
    bestItems: [],
  },
  {
    name: 'Ashe',
    cost: 3,
    traits: ['Draconic', 'Ranger'],
    role: null,
    ability: 'Enchanted Crystal Arrow',
    bestItems: [],
  },
  {
    name: 'Brand',
    cost: 2,
    traits: ['Abomination', 'Spellweaver'],
    role: null,
    ability: 'Sear',
    bestItems: [],
  },
  {
    name: 'Diana',
    cost: 4,
    traits: ['Nightbringer', 'Assassin'],
    role: null,
    ability: 'Moonfall',
    bestItems: [],
  },
  {
    name: 'Draven',
    cost: 4,
    traits: ['Forgotten', 'Legionnaire'],
    role: null,
    ability: 'Spinning Axe',
    bestItems: [],
  },
  {
    name: 'Fiddlesticks',
    cost: 4,
    traits: ['Abomination', 'Revenant', 'Mystic'],
    role: null,
    ability: 'Crowstorm',
    bestItems: [],
  },
  {
    name: 'Galio',
    cost: 4,
    traits: ['Draconic', 'Sentinel', 'Knight'],
    role: null,
    ability: 'Shield of Durand',
    bestItems: [],
  },
  {
    name: 'Garen',
    cost: 5,
    traits: ['Victorious', 'Dawnbringer', 'Knight'],
    role: null,
    ability: "God-Lion's Justice",
    bestItems: [],
  },
  {
    name: 'Gragas',
    cost: 1,
    traits: ['Dawnbringer', 'Brawler'],
    role: null,
    ability: 'Drunken Rage',
    bestItems: [],
  },
  {
    name: 'Gwen',
    cost: 5,
    traits: ['Inanimate', 'Mystic'],
    role: null,
    ability: "Skip 'n Slash",
    bestItems: [],
  },
  {
    name: 'Hecarim',
    cost: 2,
    traits: ['Forgotten', 'Cavalier'],
    role: null,
    ability: 'Spirit of Dread',
    bestItems: [],
  },
  {
    name: 'Heimerdinger',
    cost: 5,
    traits: ['Draconic', 'Renewer', 'Caretaker'],
    role: null,
    ability: 'UPGRADE!!!',
    bestItems: [],
  },
  {
    name: 'Irelia',
    cost: 2,
    traits: ['Sentinel', 'Skirmisher', 'Legionnaire'],
    role: null,
    ability: 'Defiant Dance',
    bestItems: [],
  },
  {
    name: 'Ivern',
    cost: 4,
    traits: ['Revenant', 'Invoker', 'Renewer'],
    role: null,
    ability: 'Daisy!',
    bestItems: [],
  },
  {
    name: 'Jax',
    cost: 4,
    traits: ['Ironclad', 'Skirmisher'],
    role: null,
    ability: 'Empowered Strike',
    bestItems: [],
  },
  {
    name: 'Kalista',
    cost: 1,
    traits: ['Abomination', 'Legionnaire'],
    role: null,
    ability: 'Pierce',
    bestItems: [],
  },
  {
    name: 'Karma',
    cost: 4,
    traits: ['Dawnbringer', 'Invoker'],
    role: null,
    ability: 'Soulflare',
    bestItems: [],
  },
  {
    name: 'Kayle',
    cost: 5,
    traits: ['Redeemed', 'Legionnaire'],
    role: null,
    ability: 'Divine Ascent',
    bestItems: [],
  },
  {
    name: 'Kennen',
    cost: 2,
    traits: ['Hellion', 'Skirmisher'],
    role: null,
    ability: 'Lightning Rush',
    bestItems: [],
  },
  {
    name: "Kha'Zix",
    cost: 1,
    traits: ['Dawnbringer', 'Assassin'],
    role: null,
    ability: 'Taste Their Fear',
    bestItems: [],
  },
  {
    name: 'Kled',
    cost: 1,
    traits: ['Hellion', 'Cavalier'],
    role: atkFgtr,
    ability: 'Violent Tendencies',
    bestItems: [],
  },
  {
    name: 'Lee Sin',
    cost: 3,
    traits: ['Nightbringer', 'Skirmisher'],
    role: null,
    ability: 'Tempest',
    bestItems: [],
  },
  {
    name: 'Leona',
    cost: 1,
    traits: ['Redeemed', 'Knight'],
    role: atkTank,
    ability: 'Eclipse',
    bestItems: [],
  },
  {
    name: 'Lucian',
    cost: 4,
    traits: ['Sentinel', 'Cannoneer'],
    role: null,
    ability: 'The Culling',
    bestItems: [],
  },
  {
    name: 'Lulu',
    cost: 3,
    traits: ['Hellion', 'Mystic'],
    role: null,
    ability: 'Whimsy',
    bestItems: [],
  },
  {
    name: 'Lux',
    cost: 3,
    traits: ['Redeemed', 'Mystic'],
    role: null,
    ability: 'Prismatic Barrier',
    bestItems: [],
  },
  {
    name: 'Miss Fortune',
    cost: 3,
    traits: ['Forgotten', 'Cannoneer'],
    role: null,
    ability: 'Make It Rain',
    bestItems: [],
  },
  {
    name: 'Nautilus',
    cost: 2,
    traits: ['Ironclad', 'Knight'],
    role: null,
    ability: 'Depth Charge',
    bestItems: [],
  },
  {
    name: 'Nidalee',
    cost: 3,
    traits: ['Dawnbringer', 'Skirmisher'],
    role: null,
    ability: 'Aspect of the Cougar',
    bestItems: [],
  },
  {
    name: 'Nocturne',
    cost: 3,
    traits: ['Revenant', 'Assassin'],
    role: null,
    ability: 'Umbra Blades',
    bestItems: [],
  },
  {
    name: 'Nunu & Willump',
    cost: 3,
    traits: ['Abomination', 'Brawler'],
    role: null,
    ability: 'Consume',
    bestItems: [],
  },
  {
    name: 'Olaf',
    cost: 1,
    traits: ['Sentinel', 'Skirmisher'],
    role: atkFgtr,
    ability: 'Berserker Rage',
    bestItems: [],
  },
  {
    name: 'Poppy',
    cost: 1,
    traits: ['Hellion', 'Knight'],
    role: null,
    ability: 'Iron Ambassador',
    bestItems: [],
  },
  {
    name: 'Pyke',
    cost: 2,
    traits: ['Sentinel', 'Assassin'],
    role: null,
    ability: 'Phantom Undertow',
    bestItems: [],
  },
  {
    name: 'Rakan',
    cost: 3,
    traits: ['Sentinel', 'Renewer'],
    role: null,
    ability: 'Battle Dance',
    bestItems: [],
  },
  {
    name: 'Rell',
    cost: 4,
    traits: ['Redeemed', 'Ironclad', 'Cavalier'],
    role: null,
    ability: 'Attract and Repel',
    bestItems: [],
  },
  {
    name: 'Riven',
    cost: 3,
    traits: ['Dawnbringer', 'Legionnaire'],
    role: atkTank,
    ability: 'Blade of the Exile',
    bestItems: [],
  },
  {
    name: 'Sejuani',
    cost: 2,
    traits: ['Nightbringer', 'Brawler', 'Cavalier'],
    role: magTank,
    ability: 'Fury of the North',
    bestItems: [],
  },
  {
    name: 'Senna',
    cost: 1,
    traits: ['Sentinel', 'Cannoneer'],
    role: null,
    ability: 'Last Embrace',
    bestItems: [],
  },
  {
    name: 'Sett',
    cost: 2,
    traits: ['Draconic', 'Brawler'],
    role: atkFgtr,
    ability: 'Haymaker',
    bestItems: [],
  },
  {
    name: 'Soraka',
    cost: 2,
    traits: ['Dawnbringer', 'Renewer'],
    role: magCst,
    ability: 'Equinox',
    bestItems: [],
  },
  {
    name: 'Syndra',
    cost: 2,
    traits: ['Redeemed', 'Invoker'],
    role: null,
    ability: 'Force of Will',
    bestItems: [],
  },
  {
    name: 'Teemo',
    cost: 5,
    traits: ['Hellion', 'Cruel', 'Invoker'],
    role: null,
    ability: "Teemo's Cruelty",
    bestItems: [],
  },
  {
    name: 'Thresh',
    cost: 2,
    traits: ['Forgotten', 'Knight'],
    role: null,
    ability: 'Death Sentence',
    bestItems: [],
  },
  {
    name: 'Tristana',
    cost: 2,
    traits: ['Hellion', 'Cannoneer'],
    role: null,
    ability: 'Rocket Jump',
    bestItems: [],
  },
  {
    name: 'Udyr',
    cost: 1,
    traits: ['Draconic', 'Skirmisher'],
    role: atkFgtr,
    ability: "Monkey's Agility",
    bestItems: [],
  },
  {
    name: 'Varus',
    cost: 2,
    traits: ['Redeemed', 'Ranger'],
    role: null,
    ability: 'Hail of Arrows',
    bestItems: [],
  },
  {
    name: 'Vayne',
    cost: 1,
    traits: ['Forgotten', 'Ranger'],
    role: null,
    ability: 'Silver Bolts',
    bestItems: [],
  },
  {
    name: "Vel'Koz",
    cost: 4,
    traits: ['Redeemed', 'Spellweaver'],
    role: null,
    ability: 'Life Form Disintegration Ray',
    bestItems: [],
  },
  {
    name: 'Viego',
    cost: 5,
    traits: ['Forgotten', 'Skirmisher', 'Assassin'],
    role: null,
    ability: "Sovereign's Domination",
    bestItems: [],
  },
  {
    name: 'Vladimir',
    cost: 1,
    traits: ['Nightbringer', 'Renewer'],
    role: null,
    ability: 'Transfusion',
    bestItems: [],
  },
  {
    name: 'Volibear',
    cost: 5,
    traits: ['Revenant', 'Brawler'],
    role: null,
    ability: 'Thundering Smash',
    bestItems: [],
  },
  {
    name: 'Yasuo',
    cost: 3,
    traits: ['Nightbringer', 'Legionnaire'],
    role: null,
    ability: 'Last Breath',
    bestItems: [],
  },
  {
    name: 'Ziggs',
    cost: 1,
    traits: ['Hellion', 'Spellweaver'],
    role: magCst,
    ability: 'Bouncing Bomb',
    bestItems: [],
  },
  {
    name: 'Zyra',
    cost: 3,
    traits: ['Draconic', 'Spellweaver'],
    role: null,
    ability: 'Grasping Roots',
    bestItems: [],
  },
];

export default revivalChampions;
