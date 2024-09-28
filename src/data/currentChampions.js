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
    stats: {
      health: [700, 1260, 2268],
      damage: [55, 83, 124],
      dps: [41, 62, 93],
      armor: 45,
      mr: 45,
      speed: 0.75,
      mana: [10, 70],
    },
    bestItems: ['Bloodthirster', 'Edge of Night', 'Infinity Edge'],
  },
  {
    name: 'Ashe',
    cost: 1,
    traits: ['Arcana', 'Marksman'],
    stats: {
      health: [500, 900, 1620],
      damage: [40, 60, 85],
      dps: [29, 41, 56],
      armor: 30,
      mr: 30,
      speed: 0.75,
      mana: [0, 80],
    },
    bestItems: ['Giant Slayer', 'Rageblade', 'Infinity Edge'],
  },
  {
    name: 'Bard',
    cost: 5,
    traits: ['Mystic', 'Invoker'],
    stats: {
      health: [800, 1440, 2592],
      damage: [40, 55, 75],
      dps: [25, 36, 52],
      armor: 30,
      mr: 30,
      speed: 0.75,
      mana: [0, 100],
    },
    bestItems: ['Guardian Angel', 'Blue Buff', 'Morellonomicon'],
  },
  {
    name: 'Blitzcrank',
    cost: 3,
    traits: ['Brawler', 'Guardian'],
    stats: {
      health: [600, 1080, 1944],
      damage: [60, 90, 120],
      dps: [46, 69, 90],
      armor: 40,
      mr: 40,
      speed: 0.7,
      mana: [0, 90],
    },
    bestItems: ["Titan's Resolve", "Banshee's Claw", 'Redemption'],
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
    cost: 4,
    traits: ['Warrior', 'Multistriker'],
    stats: {
      health: [700, 1260, 2268],
      damage: [60, 90, 130],
      dps: [43, 64, 85],
      armor: 40,
      mr: 40,
      speed: 0.75,
      mana: [0, 100],
    },
    bestItems: ['Giant Slayer', 'Bloodthirster', 'Infinity Edge'],
  },
  {
    name: 'Cassiopeia',
    cost: 4,
    traits: ['Arcana', 'Mage'],
    stats: {
      health: [700, 1260, 2268],
      damage: [65, 95, 135],
      dps: [48, 70, 92],
      armor: 30,
      mr: 30,
      speed: 0.75,
      mana: [0, 100],
    },
    bestItems: ["Rabadon's Deathcap", 'Morellonomicon', 'Blue Buff'],
  },
  {
    name: 'Diana',
    cost: 3,
    traits: ['Shurima', 'Warrior'],
    stats: {
      health: [750, 1350, 2430],
      damage: [50, 90, 162],
      armor: 35,
      magicRes: 50,
      attackSpeed: 0.7,
      range: 1,
    },
    bestItems: ['Infinity Edge', 'Bloodthirster', "Titan's Resolve"],
  },
  {
    name: 'Elise',
    cost: 2,
    traits: ['Brawler', 'Sorcerer'],
    stats: {
      health: [550, 990, 1782],
      damage: [45, 81, 146],
      armor: 25,
      magicRes: 25,
      attackSpeed: 0.75,
      range: 1,
    },
    bestItems: ['Infinity Edge', 'Blue Buff', "Zeke's Herald"],
  },
  {
    name: 'Ezreal',
    cost: 3,
    traits: ['Blaster', 'Invoker'],
    stats: {
      health: [600, 1080, 1944],
      damage: [60, 108, 195],
      armor: 30,
      magicRes: 30,
      attackSpeed: 0.8,
      range: 4,
    },
    bestItems: ['Jewel of Ixtal', 'Giant Slayer', 'Blue Buff'],
  },
  {
    name: 'Fiora',
    cost: 4,
    traits: ['Warrior', 'Witch'],
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
    cost: 4,
    traits: ['Guardian', 'Warrior'],
    stats: {
      health: [900, 1620, 2925],
      damage: [65, 117, 210],
      armor: 40,
      magicRes: 40,
      attackSpeed: 0.65,
      range: 1,
    },
    bestItems: ["Titan's Resolve", "Zeke's Herald", "Warmog's Armor"],
  },
  {
    name: 'Gwen',
    cost: 5,
    traits: ['Warrior', 'Witch'],
    stats: {
      health: [950, 1710, 3090],
      damage: [85, 153, 276],
      armor: 40,
      magicRes: 40,
      attackSpeed: 0.9,
      range: 1,
    },
    bestItems: ["Rabadon's Deathcap", 'Giant Slayer', 'Infinity Edge'],
  },
  {
    name: 'Hecarim',
    cost: 4,
    traits: ['Brawler', 'Cavalry'],
    stats: {
      health: [1100, 1980, 3600],
      damage: [75, 135, 243],
      armor: 50,
      magicRes: 50,
      attackSpeed: 0.75,
      range: 1,
    },
    bestItems: ["Titan's Resolve", "Banshee's Claw", 'Bloodthirster'],
  },
  {
    name: 'Hwei',
    cost: 2,
    traits: ['Shurima', 'Invoker'],
    stats: {
      health: [600, 1080, 1944],
      damage: [50, 90, 162],
      armor: 25,
      magicRes: 25,
      attackSpeed: 0.75,
      range: 1,
    },
    bestItems: ['Blue Buff', 'Infinity Edge', "Zeke's Herald"],
  },
  {
    name: 'Jax',
    cost: 3,
    traits: ['Fighter', 'Duelist'],
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
    bestItems: ['Infinity Edge', 'Bloodthirster', "Titan's Resolve"],
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
    cost: 4,
    traits: ['Multistriker', 'Faerie'],
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
    bestItems: ['Infinity Edge', "Guinsoo's Rageblade", 'Last Whisper'],
  },
  {
    name: 'Kalista',
    cost: 4,
    traits: ['Multistriker', 'Faerie'],
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
    bestItems: ["Faerie Queen's Crown", "Guinsoo's Rageblade", 'Last Whisper'],
  },
  {
    name: 'Karma',
    cost: 3,
    traits: ['Invoker', 'Invoker'],
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
    bestItems: ['Hand of Justice', 'Ionic Spark', 'Jeweled Gauntlet'],
  },
  {
    name: 'Kassadin',
    cost: 2,
    traits: ['Invoker', 'Invoker'],
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
    bestItems: ['Hand of Justice', 'Ionic Spark', 'Jeweled Gauntlet'],
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
    bestItems: ['Hand of Justice', 'Ionic Spark', 'Jeweled Gauntlet'],
  },
  {
    name: "Kog'Maw",
    cost: 4,
    traits: ['Multistriker', 'Faerie'],
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
    bestItems: ["Guinsoo's Rageblade", 'Last Whisper', 'Infinity Edge'],
  },
  {
    name: 'Lillia',
    cost: 3,
    traits: ['Shurima', 'Invoker'],
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
    bestItems: ['Morellonomicon', "Rabadon's Deathcap", 'Infinity Edge'],
  },
  {
    name: 'Milio',
    cost: 3,
    traits: ['Shurima', 'Preserver'],
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
    bestItems: ["Warmog's Armor", 'Hand of Justice', "Dragon's Claw"],
  },
  {
    name: 'Mordekaiser',
    cost: 3,
    traits: ['Vanguard', 'Eldritch'],
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
    bestItems: ["Warmog's Armor", "Dragon's Claw", 'Steadfast Heart'],
  },
  {
    name: 'Morgana',
    cost: 5,
    traits: ['Witchcraft', 'Preserver'],
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
    bestItems: ['Morellonomicon', 'Hand of Justice', 'Crown of Command'],
  },
  {
    name: 'Nami',
    cost: 4,
    traits: ['Shurima', 'Invoker'],
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
    bestItems: ['Morellonomicon', "Rabadon's Deathcap", 'Infinity Edge'],
  },
  {
    name: 'Nasus',
    cost: 2,
    traits: ['Vanguard', 'Preserver'],
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
    bestItems: ["Warmog's Armor", 'Titanic Hydra', "Dragon's Claw"],
  },
  {
    name: 'Neeko',
    cost: 4,
    traits: ['Shurima', 'Invokers'],
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
    bestItems: ['Morellonomicon', "Rabadon's Deathcap", 'Infinity Edge'],
  },
  {
    name: 'Nilah',
    cost: 4,
    traits: ['Vanguard', 'Preserver'],
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
    bestItems: ["Warmog's Armor", "Dragon's Claw", 'Steadfast Heart'],
  },
  {
    name: 'Nomsy',
    cost: 1,
    traits: ['Hunter', 'Dragon'],
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
    traits: ['Mage', 'Portal'],
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
    cost: 4,
    traits: ['Cavalier', 'Freljord'],
    stats: {
      health: [1100, 1980, 3564],
      damage: [80, 120, 180],
      dps: [56, 84, 126],
      armor: 60,
      mr: 60,
      attackSpeed: 0.7,
      mana: [60, 150],
    },
    bestItems: ['Sunfire Cape', "Warmog's Armor", 'Bramble Vest'],
  },
  {
    name: 'Olaf',
    cost: 4,
    traits: ['Berserker', 'Juggernaut'],
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
    traits: ['Demacia', 'Vanguard'],
    stats: {
      health: '650 / 1170 / 2106',
      armor: 45,
      mr: 45,
      damage: '60 / 90 / 135',
      atkSpd: 0.65,
    },
    bestItems: ['Gargoyle Stoneplate', 'Sunfire Cape', "Warmog's Armor"],
  },
  {
    name: 'Rumble',
    cost: 2,
    traits: ['Blaster', 'Sugarcraft'],
    stats: {
      health: '800 / 1440 / 2592',
      armor: 45,
      mr: 45,
      damage: '50 / 75 / 113',
      atkSpd: 0.65,
    },
    bestItems: ['Gargoyle Stoneplate', 'Redemption', "Warmog's Armor"],
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
    bestItems: ['Ionic Spark', "Protector's Vow", 'Steadfast Heart'],
  },
  {
    name: 'Seraphine',
    cost: 2,
    traits: ['Star Guardian', 'Spellslinger'],
    stats: {
      health: 700,
      armor: 20,
      magicResist: 20,
      damage: 35,
      attackSpeed: 0.65,
      range: 3,
    },
    bestItems: ['Blue Buff', 'Jeweled Gauntlet', "Archangel's Staff"],
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
    bestItems: ['Sunfire Cape', 'Redemption', 'Evenshroud'],
  },
  {
    name: 'Shyvana',
    cost: 4,
    traits: ['Shapeshifter', 'Pyro'],
    stats: {
      health: 900,
      armor: 50,
      magicResist: 50,
      damage: 90,
      attackSpeed: 0.7,
      range: 2,
    },
    bestItems: ["Warmog's Armor", 'Hextech Gunblade', 'Morellonomicon'],
  },
  {
    name: 'Smolder',
    cost: 3,
    traits: ['Pyro', 'Shapeshifter'],
    stats: {
      health: 750,
      armor: 45,
      magicResist: 45,
      damage: 55,
      attackSpeed: 0.65,
      range: 1,
    },
    bestItems: ['Sunfire Cape', 'Bramble Vest', "Warmog's Armor"],
  },
  {
    name: 'Soraka',
    cost: 3,
    traits: ['Invoker', 'Star Guardian'],
    stats: {
      health: 650,
      armor: 20,
      magicResist: 20,
      damage: 40,
      attackSpeed: 0.65,
      range: 4,
    },
    bestItems: ['Blue Buff', 'Spear of Shojin', 'Morellonomicon'],
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
    bestItems: ['Gargoyle Stoneplate', 'Bloodthirster', "Archangel's Staff"],
  },
  {
    name: 'Syndra',
    cost: 4,
    traits: ['Invoker', 'Star Guardian'],
    stats: {
      health: 850,
      armor: 25,
      magicResist: 25,
      damage: 50,
      attackSpeed: 0.75,
      range: 4,
    },
    bestItems: ['Blue Buff', 'Jeweled Gauntlet', "Rabadon's Deathcap"],
  },
  {
    name: 'Tahm Kench',
    cost: 2,
    traits: ['Bastion', 'Bruiser'],
    stats: {
      health: 700,
      armor: 40,
      magicResist: 40,
      damage: 50,
      attackSpeed: 0.6,
      range: 1,
    },
    bestItems: ['Sunfire Cape', "Warmog's Armor", 'Gargoyle Stoneplate'],
  },
  {
    name: 'Taric',
    cost: 3,
    traits: ['Targon', 'Guardian'],
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
    bestItems: ['Red Buff', "Guinsoo's Rageblade", 'Infinity Edge'],
  },
  {
    name: 'Varus',
    cost: 2,
    traits: ['Darkin', 'Deadeye'],
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
    bestItems: ['Runaans Hurricane', "Guinsoo's Rageblade", 'Deathblade'],
  },
  {
    name: 'Veigar',
    cost: 4,
    traits: ['Yordle', 'Sorcerer'],
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
    bestItems: ["Archangel's Staff", 'Jeweled Gauntlet', "Rabadon's Deathcap"],
  },
  {
    name: 'Vex',
    cost: 3,
    traits: ['Shadow Isles', 'Invoker'],
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
    bestItems: ['Ionic Spark', 'Blue Buff', 'Sunfire Cape'],
  },
  {
    name: 'Warwick',
    cost: 1,
    traits: ['Frost', 'Vanguard'],
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
    bestItems: [
      "Guinsoo's Rageblade",
      'Quicksilver',
      'Corrupt Vampiric Scepter',
    ],
  },
  {
    name: 'Wukong',
    cost: 1,
    traits: ['Ionia', 'Juggernaut'],
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
    bestItems: ["Titan's Resolve", 'Sunfire Cape', 'Gargoyle Stoneplate'],
  },
  {
    name: 'Xerath',
    cost: 5,
    traits: ['Arcana', 'Invoker'],
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
    bestItems: ['Spear of Shojin', "Archangel's Staff", 'Adaptive Helm'],
  },
  {
    name: 'Ziggs',
    cost: 1,
    traits: ['Honeymancy', 'Incantor'],
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
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
  },
  {
    name: 'Zilean',
    cost: 2,
    traits: ['Chrono', 'Preserver'],
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
    bestItems: ['Jeweled Gauntlet', "Nashor's Tooth", 'Spear of Shojin'],
  },
  {
    name: 'Zoe',
    cost: 4,
    traits: ['Arcana', 'Scholar'],
    stats: {
      health: [750, 1350, 2430],
      mana: [0, 60],
      armor: 30,
      magic_resist: 30,
      ability_power: 100,
      dps: [36, 65, 117],
      damage: [50, 90, 162],
      attack_speed: 0.72,
      crit_rate: 25,
      range: 3,
    },
    bestItems: ['Spear of Shojin', "Nashor's Tooth", 'Statikk Shiv'],
  },
];

export default CURRENT_CHAMPIONS;
