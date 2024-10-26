const LEAGUE_ITEMS = {
  rylaiCrystalScepter: {
    name: "Rylai's Crystal Scepter",
    description: `Slow the enemy whenever your abilities deal damage to them. 
      Pick up on champs with lots of AOE.`,
    summary: 'Slow enemies on ability hit',
  },
  blackfireTorch: {
    name: 'Blackfire Torch',
    description: `Bonus magic damage on damaging abilities, increase AP for each enemy, 
      epic & large monster affected by Baleful Blaze`,
    summary: 'Bonus ability magic damage & increase AP',
  },
  horizonFocus: {
    name: 'Horizon Focus',
    description: `Ability damage at 600 range or greater reveals them, deal
      increased damage to revealed enemies`,
    summary: 'Reveal & damage enemies at 600+ range',
  },
  mikaelsBlessing: {
    name: "Mikael's Blessing",
    description: 'Remove CC and heal ally',
    summary: 'Remove CC and heal ally',
    goodAgainst: {
      enemyTypes: ['CC'],
    },
  },
  imperialMandate: {
    name: 'Imperial Mandate',
    description: `Slowing enemy marks them for 5 secs, ally damage detonates mark 
      at increased damage`,
    summary: 'Bonus ally damage on slowed enemy',
  },
  cryptBloom: {
    name: 'Cryptbloom',
    description: `When you get a takedown on an enemy, create a nova on 
      their location that heals allies`,
    summary: 'Heal allies on your enemy takedown',
  },
  locketIronSolari: {
    name: 'Locket of the Iron Solari',
    description: 'Shield allies',
    summary: 'Shield allies',
    goodAgainst: { enemyTypes: ['AP'] },
  },
  morellonomicon: {
    name: 'Morellonomicon',
    description: 'Grievous Wounds to enemies',
    goodAgainst: {
      types: ['Healing', 'Sustain'],
      exampleChamps: ['Soraka', 'Sona', 'Yuumi'],
    },
  },
  staffOfFlowingWater: {
    name: 'Staff of Flowing Water',
    description: 'AP for shielding ally',
    summary: 'AP for shielding ally',
  },
  vigilantWardstone: {
    name: 'Vigilant Wardstone',
    description: 'Store 3 Control Wards',
    summary: 'Control Wards',
  },
  malignance: {
    name: 'Malignance',
    description: 'Good for champs with combat Ults as it burns and shreds',
    summary: 'Ult burns enemies',
  },
  liandrysTorment: {
    name: "Liandry's Torment",
    description:
      'Burn with abilities and deal bonus damage. Good against tanks.',
    summary: 'Burn and bonus damage',
    goodAgainst: {
      types: ['Tank'],
    },
  },
  voidStaff: {
    name: 'Void Staff',
    description:
      'Magic penetration, good against teams with lots of magic resist',
    summary: 'Magic penetration',
    goodAgainst: {
      types: ['Magic Resist'],
    },
  },
  bansheesVeil: {
    name: "Banshee's Veil",
    description: 'Spell shield',
    summary: 'Spell shield',
    goodAgainst: {
      types: ['CC'],
    },
  },
  archangelsStaff: {
    name: "Archangel's Staff",
    description: 'Gain AP based on bonus mana, and gain bonus mana',
    summary: 'AP and bonus mana',
  },
  rabadonsDeathcap: {
    name: "Rabadon's Deathcap",
    description: 'Huge AP increase',
    summary: 'Huge AP increase',
    goodAgainst: {
      types: ['Low Magic Resist', 'Squishy'],
    },
  },
  zhonyasHourglass: {
    name: "Zhonya's Hourglass",
    description: 'Stasis',
    summary: 'Stasis',
    goodAgainst: {
      types: ['Assassin', 'Burst Damage'],
    },
  },
};

export default LEAGUE_ITEMS;
