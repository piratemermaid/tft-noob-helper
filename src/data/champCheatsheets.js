import LEAGUE_ITEMS from './leagueItems';

const Q = 'Q';
const W = 'W';
const E = 'E';
const R = 'R';
const D = 'D';
// const F = 'F';
const AA = 'AA';

const CHAMP_CHEETSHEATS = {
  Lulu: {
    abilityPriorities: [E, W, Q],
    abilityStart: [E, Q, W],
    abilityOrder: [E, Q, W, E, E, R, E, W, E, W, R, W, W, Q, Q, R, Q, Q],
    situationalItems: [
      {
        ...LEAGUE_ITEMS.mikaelsBlessing,
        alternativeFor: 'Ardent Censer',
      },
      {
        ...LEAGUE_ITEMS.locketIronSolari,
        alternativeFor: 'Ardent Censer',
      },
      {
        ...LEAGUE_ITEMS.morellonomicon,
        alternativeFor: 'Ardent Censer',
      },
      {
        ...LEAGUE_ITEMS.staffOfFlowingWater,
        alternativeFor: 'Moonstone Renewer',
      },
      {
        ...LEAGUE_ITEMS.vigilantWardstone,
        alternativeFor: 'Redemption',
      },
      {
        ...LEAGUE_ITEMS.imperialMandate,
        alternativeFor: 'Moonstone Renewer',
      },
    ],
    strengths: ['E & R keep allies alive', 'Q and E poke'],
    weaknesses: ['Squishy', 'Prone to CC', 'Immobile'],
    gamePlan: {
      earlyGame: [
        'Poke enemy with Q & E, commit to all-in when low',
        'Keep ADC alive as long as possible, shield',
        'Rotate mid after destroying bot tower',
      ],
      midGame: [
        'Stick with team at all times',
        'Keep eye on next objective spawn, place vision',
        'Look for picks',
      ],
      lateGame: [
        'Vision at objectives and high traffic areas',
        'Stay with team at all times',
        'Peel for allies',
      ],
    },
    combos: {
      easy: [
        {
          description: 'Save ally',
          combo: ['R + E ally', 'Q + W enemy'],
          comboShort: [R, E, Q, W],
        },
        {
          description: 'Poke',
          combo: ['Q enemy', 'E enemy', AA],
          comboShort: [Q, E, AA],
        },
        {
          description: 'Aggression',
          combo: ['E enemy', 'Q instantly', AA, 'W enemy', AA],
          comboShort: [E, Q, AA, W, AA],
        },
        {
          description: 'To trade',
          combo: ['E self', AA, Q, AA],
          comboShort: [E, AA, Q, AA],
        },
      ],
      average: [
        {
          description: 'Disrupt enemy',
          combo: [
            'W self',
            Q,
            'AA until Q cooldown is 4 secs',
            'E enemy',
            'AA until Q up',
            Q,
          ],
          comboShort: [W, Q, AA, AA, AA, E, AA, AA, Q],
        },
        {
          description: 'Disrupt enemy',
          combo: ['Q', 'D Flash mid animation', 'AA and E together'],
          comboShort: [Q, D, AA, E],
        },
        {
          description: 'Especially for mid lane',
          combo: [
            ';D Flash',
            'E enemy instantly',
            'AA',
            'Q once close enough to land',
          ],
          comboShort: [D, E, AA, Q],
        },
      ],
      hard: [
        {
          description: 'Engage',
          Combo: [W, 'D Flash', 'R self', AA, E, AA, Q, AA],
          comboShort: [W, D, R, AA, E, AA, Q, AA],
        },
      ],
    },
    tipsAndTricks: [
      'Use E to shield when enemy is about to attack',
      'Use W to polymorph enemy when they go all-in - go for adc/jg',
      'Use R on ADC when fight starts',
      'Use Q to slow chasers',
      'Q poke + autoattack does mean damage',
      'If not likely to be engaged, can use Q + E + AA to poke, otherwise save E for shielding',
      "Rule of W: If ADC is engaging, W them - if you're engaging, W enemy",
      '?Faerie charm or tear as throaway for laning phase?',
    ],
    counters: [
      'Ziggs',
      'Renata Glasc',
      'Taric',
      'Zyra',
      'Brand',
      'Tahm Kench',
      'Braum',
      'Teemo',
      'Shen',
      'Xerath',
      'Hwei',
      'Morgana',
      'Rell',
      'Galio',
      "Vel'Koz",
    ],
  },

  Morgana: {
    abilityPriorities: [Q, W, E],
    abilityStart: [Q, W, E],
    abilityOrder: [Q, W, E, Q, Q, R, Q, W, Q, W, R, W, W, E, E, R, E, E],
    guide: {
      gamePlan: {
        earlyGame: [
          'Poke enemy for health advantage, commit to all-in when low',
          'Only use Q if you have a guaranteed hit',
          'After destroying bot tower, rotate mid',
        ],
        midGame: [
          'Try to stay with team at all times',
          'Keep an eye on next objective spawn, place vision',
          'Look for picks',
        ],
        lateGame: [
          'Vision at objectives and high traffic areas',
          'Stay with team at all times',
          'Peel for allies',
        ],
      },
    },
    strengths: [
      'Good wave clear with W',
      'Q helps with ganks and picks',
      'E good against CC',
    ],
    weaknesses: [
      'Q can be blocked by minions',
      'Easy to misuse E',
      'Missing Q can be punishing',
    ],
    gamePlan: {
      earlyGame: [
        'Poke enemy for health advantage, commit to all-in when low',
        'Only use Q if you have a guaranteed hit',
        'After destroying bot tower, rotate mid',
      ],
      midGame: [
        'Try to stay with team at all times',
        'Keep an eye on next objective spawn, place vision',
        'Look for picks',
      ],
      lateGame: [
        'Vision at objectives and high traffic areas',
        'Stay with team at all times',
        'Peel for allies',
      ],
    },
    situationalItems: [
      {
        ...LEAGUE_ITEMS.rylaiCrystalScepter,
        alternativeFor: "Zhonya's Hourglass",
        goodAgainst: {
          types: ['AOE'],
        },
      },
      {
        ...LEAGUE_ITEMS.blackfireTorch,
        alternativeFor: "Zhonya's Hourglass",
      },
      {
        ...LEAGUE_ITEMS.horizonFocus,
        alternativeFor: "Zhonya's Hourglass",
      },
      {
        ...LEAGUE_ITEMS.mikaelsBlessing,
        alternativeFor: 'Redemption',
      },
      {
        ...LEAGUE_ITEMS.imperialMandate,
        alternativeFor: 'Redemption',
      },
      {
        ...LEAGUE_ITEMS.cryptBloom,
        alternativeFor: 'Morellonomicon',
      },
    ],
    tipsAndTricks: ["R + Zhonya's for invulnerability"],
  },
};

export default CHAMP_CHEETSHEATS;
