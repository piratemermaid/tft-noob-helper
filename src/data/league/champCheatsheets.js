import GAME_PLANS from './cheatsheetGamePlans';
import ITEMS from './items';
import ROLES from './roles';

const Q = 'Q';
const W = 'W';
const E = 'E';
const R = 'R';
const D = 'D';
// const F = 'F';
const AA = 'AA';

const CHAMP_CHEETSHEATS = {
  Lulu: [
    {
      role: ROLES.SUPPORT,
      abilityPriorities: [E, W, Q],
      abilityStart: [E, Q, W],
      abilityOrder: [E, Q, W, E, E, R, E, W, E, W, R, W, W, Q, Q, R, Q, Q],
      situationalItems: [
        {
          ...ITEMS.mikaelsBlessing,
          alternativeFor: 'Ardent Censer',
        },
        {
          ...ITEMS.locketIronSolari,
          alternativeFor: 'Ardent Censer',
        },
        {
          ...ITEMS.morellonomicon,
          alternativeFor: 'Ardent Censer',
        },
        {
          ...ITEMS.staffOfFlowingWater,
          alternativeFor: 'Moonstone Renewer',
        },
        {
          ...ITEMS.vigilantWardstone,
          alternativeFor: 'Redemption',
        },
        {
          ...ITEMS.imperialMandate,
          alternativeFor: 'Moonstone Renewer',
        },
      ],
      strengths: ['E & R keep allies alive', 'Q and E poke'],
      weaknesses: ['Squishy', 'Prone to CC', 'Immobile'],
      gamePlan: GAME_PLANS[ROLES.SUPPORT],
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
  ],
  Morgana: [
    {
      role: ROLES.SUPPORT,
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
      gamePlan: GAME_PLANS[ROLES.SUPPORT],
      situationalItems: [
        {
          ...ITEMS.rylaiCrystalScepter,
          alternativeFor: "Zhonya's Hourglass",
          goodAgainst: {
            types: ['AOE'],
          },
        },
        {
          ...ITEMS.blackfireTorch,
          alternativeFor: "Zhonya's Hourglass",
        },
        {
          ...ITEMS.horizonFocus,
          alternativeFor: "Zhonya's Hourglass",
        },
        {
          ...ITEMS.mikaelsBlessing,
          alternativeFor: 'Redemption',
        },
        {
          ...ITEMS.imperialMandate,
          alternativeFor: 'Redemption',
        },
        {
          ...ITEMS.cryptBloom,
          alternativeFor: 'Morellonomicon',
        },
      ],
      tipsAndTricks: ["R + Zhonya's for invulnerability"],
    },
  ],
  Lux: [
    {
      role: ROLES.SUPPORT,
      abilityPriorities: [E, Q, W],
      abilityStart: [E, Q, W],
      abilityOrder: [E, Q, W, E, E, R, E, Q, E, Q, R, Q, Q, W, W, R, W, W],
      strengths: [
        'Burst potential with Q -> E -> Ult combo',
        `Strong W shield, can protect all team from poke`,
        `Q can be used to secure picks inside the enemy Jungle or
          from blind areas. Especially beneficial if the picked
          target happens to be jg or adc`,
      ],
      weaknesses: [
        `Very immobile and killed quick if caught out without Q`,
        `Somewhat item reliant, so camping and killing her a lot 
          during the early game will put her behind`,
        `She can be picked off easily by the enemy team if she wanders too far 
          from her team, or when she is trying to take the Blue Buff.
          Also very weak against enemy all-ins`,
      ],
      gamePlan: GAME_PLANS[ROLES.SUPPORT],
      situationalItems: [
        {
          ...ITEMS.malignance,
          alternativeFor: 'Stormsurge',
        },
        {
          ...ITEMS.horizonFocus,
          alternativeFor: 'Stormsurge',
        },
        {
          ...ITEMS.rabadonsDeathcap,
          alternativeFor: 'Stormsurge',
        },
        {
          ...ITEMS.zhonyasHourglass,
          alternativeFor: 'Shadowflame',
        },
        {
          ...ITEMS.liandrysTorment,
          alternativeFor: 'Shadowflame',
        },
        {
          ...ITEMS.voidStaff,
          alternativeFor: 'Morellonomicon',
        },
      ],
    },
    {
      role: ROLES.MID,
      abilityPriorities: [E, Q, W],
      abilityStart: [E, Q, W],
      abilityOrder: [E, Q, W, E, E, R, E, Q, E, Q, R, Q, Q, W, W, R, W, W],
      strengths: [
        'Burst potential with Q -> E -> Ult combo',
        `Strong W shield, can protect all team from poke`,
        `Q can be used to secure picks inside the enemy Jungle or
          from blind areas. Especially beneficial if the picked
          target happens to be jg or adc`,
      ],
      weaknesses: [
        `Very immobile and killed quick if caught out without Q`,
        `Somewhat item reliant, so camping and killing her a lot 
          during the early game will put her behind`,
        `She can be picked off easily by the enemy team if she wanders too far 
          from her team, or when she is trying to take the Blue Buff.
          Also very weak against enemy all-ins`,
      ],
      gamePlan: {
        earlyGame: [
          `Harass and poke enemy`,
          `Play safe for the first few levels while poking with E, 
            commit to all-in once they are low enough`,
          `After lv 6 and getting key component items, look to harass
            and constantly push enemy into their tower. Get turret
            plating for gold.`,
        ],
        midGame: [
          `After bot has rotated mid, rotate to bot or somewhere else 
            to keep farming for XP.`,
          `Seige objectives with team. Poke enemy as much as possible while 
            team is on towers or objectives.`,
          `Delay team fights for as long as possible while you harass 
            enemy and poke with E. Look to blow up any enemy hit by Q.`,
        ],
        lateGame: [
          `Stick with team.`,
          `Look for picks, especially on isolated targets.`,
          `Keep a constant eye on positioning. Do not get picked off while 
            harassing.`,
        ],
      },
      situationalItems: [
        {
          ...ITEMS.zhonyasHourglass,
          alternativeFor: 'Shadowflame',
        },
        {
          ...ITEMS.horizonFocus,
          alternativeFor: 'Shadowflame',
        },
        {
          ...ITEMS.malignance,
          alternativeFor: 'Shadowflame',
        },
        {
          ...ITEMS.morellonomicon,
          alternativeFor: "Rabadon's Deathcap",
        },
        {
          ...ITEMS.bansheesVeil,
          alternativeFor: "Rabadon's Deathcap",
        },
        {
          ...ITEMS.archangelsStaff,
          alternativeFor: 'Void Staff',
        },
      ],
    },
  ],
  Teemo: [
    {
      role: ROLES.TOP,
      strengths: [
        `His Passive can be really obnoxious to deal with, 
          especially when he is hiding in a brush and moving in and out 
          while pelting his laner.`,
        `Makes ADCs miss their auto-attacks. This can reduce the 
          effectiveness of the carry for a while, which gives his 
          team some time to engage/disengage freely.`,
        `His Ult can act as a substitution for vision, as well as 
          deal a lot of damage when kept in the right spots. This is 
          especially useful when it comes to avoiding ganks.`,
      ],
      weaknesses: [
        `Very squishy and layered crowd control can get rid of him
          immediately. He is vulnerable when his is down, and can be engaged
          upon if his movement speed is reduced.`,
        `His Ultimate can easily be gotten rid of by the enemy by purchasing
          Control Wards. Enemy Junglers with leaps and dashes can also bypass
          these mushrooms by taking odd routes.`,
        `He falls off quite drastically during the late game and can only
          resort to split pushing. This puts his team in a disadvantageous
          state and causes a lot of tension to build up within the team.`,
      ],
      gamePlan: {
        earlyGame: [
          `Your goal in the early game is to play safe, pick up gold and XP
            and avoid dying to the enemy laner. You are rather weak in the early
            game and need time to come online.`,
          `Once you have quite a few levels under your belt, you should look for
            short favourable trades. As you’re not strong in the early game, you
            may wish to wait for the enemy to waste an ability before playing
            aggressive.`,
          `Keep the minion wave closer to your side of the map in the early game.
            This will ensure safety and reduce your chances of dying in lane.`,
        ],
      },
      midGame: [
        `Split push during the mid-game and try to secure side objectives.
          Avoid grouping if possible.`,
        `Use your strong duelling potential in the mid-game to fight and duel
          anyone who tries to stop you from split pushing.`,
        `Although you’re a really strong split pusher in the mid-game, be
          prepared to group with your team and fight 5v5. You should usually
          start grouping when there are no nearby objectives to take.`,
      ],
      lateGame: [
        `Peel for your carries in late game team fights to increase the
          chances of your team winning the fight. If they die at the beginning,
          you will not be able to win the fight alone.`,
        `Stick with your team in the late game. Do not split up or walk away
          from them otherwise the enemy may try to pick you off or initiate a
          4v5 fight when you’re away from your team.`,
        `Focus the nearest enemy champion to your carries and work as a team
          to take down the enemy one by one. If you focus the backline alone,
          you may be an easy target for the enemy and may die quickly. By
          focusing on the nearest champion, you will survive for longer and
          keep your carries alive.`,
      ],
    },
    {
      role: ROLES.SUPPORT,
    },
  ],
};

export default CHAMP_CHEETSHEATS;
