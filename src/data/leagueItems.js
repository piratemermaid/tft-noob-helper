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
  },
};

export default LEAGUE_ITEMS;
