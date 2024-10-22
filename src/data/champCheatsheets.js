const Q = 'Q';
const W = 'W';
const E = 'E';
const R = 'R';
const D = 'D';
// const F = 'F';
const AA = 'AA';

const CHAMP_CHEETSHEATS = {
  Lulu: {
    abilityOrder: [E, Q, W, E, E, R, E, W, E, W, R, W, W, Q, Q, R, Q, Q],
    situationalItems: [
      {
        name: "Mikael's Blessing",
        alternativeFor: 'Ardent Censer',
        description: 'Helps to cleanse an ally from CC',
        goodAgainst: {
          types: ['CC'],
          exampleChamps: ['Ashe', 'Leona', 'Morgana'],
        },
      },
      {
        name: 'Morellonomicon',
        alternativeFor: 'Ardent Censer',
        description: 'Grievous Wounds to enemies',
        goodAgainst: {
          types: ['Healing', 'Sustain'],
          exampleChamps: ['Soraka', 'Sona', 'Yuumi'],
        },
      },
      {
        name: 'Locket of the Iron Solari',
        alternativeFor: 'Ardent Censer',
        description: 'Shield allies',
        goodAgainst: { types: ['AP'] },
      },
      {
        name: 'Imperial Mandate',
        alternativeFor: 'Moonstone Renewer',
        description: 'AP for shielding ally',
      },
      {
        name: 'Imperial Mandate',
        alternativeFor: 'Moonstone Renewer',
        description: 'Bonus ally damage on slowed enemy',
      },
      {
        name: 'Vigilant Wardstone',
        alternativeFor: 'Redemption',
        description: 'Store 3 Control Wards',
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
  },
};

export default CHAMP_CHEETSHEATS;
