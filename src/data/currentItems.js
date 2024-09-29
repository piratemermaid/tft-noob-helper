const CURRENT_ITEMS = [
  {
    recipe: ['B.F. Sword', 'B.F. Sword'],
    combinesInto: 'Deathblade',
    effect: 'Deal 7% bonus damage',
    tier: 'A',
  },
  {
    recipe: ['B.F. Sword', 'Chain Vest'],
    combinesInto: 'Edge of Night',
    effect:
      'Once per combat: At 60% Health, briefly become untargetable and shed negative effects. Then, gain 15% bonus Attack Speed.',
    tier: 'A',
  },
  {
    recipe: ['B.F. Sword', 'Frying Pan'],
    combinesInto: 'Hunter Emblem',
    effect: 'The holder gains the Hunter trait.',
    tier: '?',
  },
  {
    recipe: ['B.F. Sword', "Giant's Belt"],
    combinesInto: "Sterak's Gage",
    effect:
      'Once per combat at 60% Health, gain 25% max Health and 35% Attack Damage.',
    tier: 'A',
  },
  {
    recipe: ['B.F. Sword', 'Needlessly Large Rod'],
    combinesInto: 'Hextech Gunblade',
    effect:
      'Grant 20% Omnivamp.\n\nHeal the lowest percent Health ally for 20% of damage dealt.\n\nOmnivamp: heal for some of damage dealt',
    tier: 'B',
  },
  {
    recipe: ['B.F. Sword', 'Negatron Cloak'],
    combinesInto: 'Bloodthirster',
    effect:
      'Gain 20% Omnivamp.\n\nOnce per combat at 40% Health, gain a 25% max Health Shield that lasts up to 5 seconds.\n\nOmnivamp: heal for some of damage dealt',
    tier: 'S',
  },
  {
    recipe: ['B.F. Sword', 'Recurve Bow'],
    combinesInto: 'Giant Slayer',
    effect:
      'Deal 25% more damage to enemies with more than 1750 maximum Health.',
    tier: 'A',
  },
  {
    recipe: ['B.F. Sword', 'Sparring Gloves'],
    combinesInto: 'Infinity Edge',
    effect:
      "Abilities can critically strike.\n\nIf the holder's abilities can already critically strike, gain 10% Critical Strike Damage instead.",
    tier: 'S',
  },
  {
    recipe: ['B.F. Sword', 'Spatula'],
    combinesInto: 'Sugarcraft Emblem',
    effect: 'The holder gains the Sugarcraft trait.',
    tier: '?',
  },
  {
    recipe: ['B.F. Sword', 'Tear of the Goddess'],
    combinesInto: 'Spear of Shojin',
    effect: 'Attacks grant 5 bonus Mana.',
    tier: 'S',
  },
  {
    recipe: ['Chain Vest', 'B.F. Sword'],
    combinesInto: 'Edge of Night',
    effect:
      'Once per combat: At 60% Health, briefly become untargetable and shed negative effects. Then, gain 15% bonus Attack Speed.',
    tier: 'A',
  },
  {
    recipe: ['Chain Vest', 'Chain Vest'],
    combinesInto: 'Bramble Vest',
    effect:
      'Gain 5% max health.\n\nTake 8% reduced damage from attacks. When struck by any attack, deal 100 magic damage to all adjacent enemies.\n\nCooldown: 2 seconds',
    tier: 'A',
  },
  {
    recipe: ['Chain Vest', 'Frying Pan'],
    combinesInto: 'Bastion Emblem',
    effect: 'The holder gains the Bastion trait.',
    tier: '?',
  },
  {
    recipe: ['Chain Vest', "Giant's Belt"],
    combinesInto: 'Sunfire Cape',
    effect:
      "Every 2 seconds, deal 1% Burn and 33% Wound to an enemy within 2 hexes for 10 seconds.\n\nBurn: Deals a percent of the target's maximum Health as true damage every second\nWound: Reduces healing received",
    tier: 'B',
  },
  {
    recipe: ['Chain Vest', 'Needlessly Large Rod'],
    combinesInto: 'Crownguard',
    effect:
      'Combat start: Gain a 30% max Health Shield for 8 seconds.\n\nWhen the shield expires, gain 35 Ability Power.',
    tier: 'B',
  },
  {
    recipe: ['Chain Vest', 'Negatron Cloak'],
    combinesInto: 'Gargoyle Stoneplate',
    effect:
      'Gain 10 Armor and 10 Magic Resist for each enemy targeting the holder.',
    tier: 'S',
  },
  {
    recipe: ['Chain Vest', 'Recurve Bow'],
    combinesInto: "Titan's Resolve",
    effect:
      'Gain 2% Attack Damage and 1 Ability Power when attacking or taking damage, stacking up to 25 times.\n\nAt full stacks, gain 20 Armor and 20 Magic Resist.',
    tier: 'A',
  },
  {
    recipe: ['Chain Vest', 'Sparring Gloves'],
    combinesInto: 'Steadfast Heart',
    effect:
      'Take 8% less damage. While above 50% Health, take 15% less damage instead.',
    tier: 'A',
  },
  {
    recipe: ['Chain Vest', 'Spatula'],
    combinesInto: 'Frost Emblem',
    effect: 'The holder gains the Frost trait.',
    tier: '?',
  },
  {
    recipe: ['Chain Vest', 'Tear of the Goddess'],
    combinesInto: "Protector's Vow",
    effect:
      'Once per combat at 40% Health, gain a 25% max Health Shield that lasts 5 seconds and gain 20 Armor and 20 Magic Resist.',
    tier: 'C',
  },
  {
    recipe: ['Frying Pan', 'B.F. Sword'],
    combinesInto: 'Hunter Emblem',
    effect:
      'The holder gains the Hunter trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Chain Vest'],
    combinesInto: 'Bastion Emblem',
    effect:
      'The holder gains the Bastion trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Frying Pan'],
    combinesInto: "Tactician's Shield",
    effect:
      'Your team gains +1 maximum team size.\n\n10% chance to drop 1 gold when the holder dies.',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', "Giant's Belt"],
    combinesInto: 'Shapeshifter Emblem',
    effect:
      'The holder gains the Shapeshifter trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Needlessly Large Rod'],
    combinesInto: 'Mage Emblem',
    effect:
      'The holder gains the Mage trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Negatron Cloak'],
    combinesInto: 'Preserver Emblem',
    effect:
      'The holder gains the Preserver trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Recurve Bow'],
    combinesInto: 'Multistriker Emblem',
    effect:
      'The holder gains the Multistriker trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Sparring Gloves'],
    combinesInto: 'Warrior Emblem',
    effect:
      'The holder gains the Warrior trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Spatula'],
    combinesInto: "Tactician's Cape",
    effect:
      'Your team gains +1 maximum team size.\n\n10% chance to drop 1 gold after 10 seconds of combat.',
    tier: '?',
  },
  {
    recipe: ['Frying Pan', 'Tear of the Goddess'],
    combinesInto: 'Scholar Emblem',
    effect:
      'The holder gains the Scholar trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ["Giant's Belt", 'B.F. Sword'],
    combinesInto: "Sterak's Gage",
    effect:
      'Once per combat at 60% Health, gain 25% max Health and 35% Attack Damage.',
    tier: 'A',
  },
  {
    recipe: ["Giant's Belt", 'Chain Vest'],
    combinesInto: 'Sunfire Cape',
    effect:
      "Every 2 seconds, deal 1% Burn and 33% Wound to an enemy within 2 hexes for 10 seconds.\n\n[Unique - only 1 per champion]\nBurn: Deals a percent of the target's maximum Health as true damage every second\nWound: Reduces healing received",
    tier: 'B',
  },
  {
    recipe: ["Giant's Belt", 'Frying Pan'],
    combinesInto: 'Shapeshifter Emblem',
    effect:
      'The holder gains the Shapeshifter trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ["Giant's Belt", "Giant's Belt"],
    combinesInto: "Warmog's Armor",
    effect: 'Gain 8% max health.',
    tier: 'S',
  },
  {
    recipe: ["Giant's Belt", 'Needlessly Large Rod'],
    combinesInto: 'Morellonomicon',
    effect:
      "Attacks and Abilities deal 1% Burn and 33% Wound to enemies for 10 seconds.\n\n[Unique - only 1 per champion]\nBurn: Deals a percent of the target's maximum Health as true damage every second\nWound: Reduces healing received",
    tier: 'A',
  },
  {
    recipe: ["Giant's Belt", 'Negatron Cloak'],
    combinesInto: 'Evenshroud',
    effect:
      '30% Sunder enemies within 2 hexes. Gain 25 Armor and Magic Resist for the first 10 seconds of combat.\n\nSunder: Reduce Armor',
    tier: 'C',
  },
  {
    recipe: ["Giant's Belt", 'Recurve Bow'],
    combinesInto: "Nashor's Tooth",
    effect: 'After casting an Ability, gain 40% Attack Speed for 5 seconds.',
    tier: 'S',
  },
  {
    recipe: ["Giant's Belt", 'Sparring Gloves'],
    combinesInto: 'Guardbreaker',
    effect: 'After damaging a Shield, deal 25% more damage for 3 seconds.',
    tier: 'C',
  },
  {
    recipe: ["Giant's Belt", 'Spatula'],
    combinesInto: 'Eldritch Emblem',
    effect:
      'The holder gains the Eldritch trait.\n\n[Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ["Giant's Belt", 'Tear of the Goddess'],
    combinesInto: 'Redemption',
    effect:
      'Heal allies within 1 hex for 15% of their missing Health every 5 seconds. They also take 10% less damage for 5 seconds (damage reduction does not stack).\n\n[Aura item]',
    tier: 'A',
  },
  {
    recipe: ['Negatron Cloak', 'B.F. Sword'],
    combinesInto: 'Bloodthirster',
    effect:
      'Gain 20% Omnivamp. Once per combat at 40% Health, gain a 25% max Health Shield that lasts up to 5 seconds. Omnivamp: heal for some of damage dealt',
    tier: 'S',
  },
  {
    recipe: ['Negatron Cloak', 'Chain Vest'],
    combinesInto: 'Gargoyle Stoneplate',
    effect:
      'Gain 10 Armor and 10 Magic Resist for each enemy targeting the holder.',
    tier: 'S',
  },
  {
    recipe: ['Negatron Cloak', 'Frying Pan'],
    combinesInto: 'Preserver Emblem',
    effect:
      'The holder gains the Preserver trait. [Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Negatron Cloak', "Giant's Belt"],
    combinesInto: 'Evenshroud',
    effect:
      '30% Sunder enemies within 2 hexes. Gain 25 Armor and Magic Resist for the first 10 seconds of combat. Sunder: Reduce Armor',
    tier: 'C',
  },
  {
    recipe: ['Negatron Cloak', 'Needlessly Large Rod'],
    combinesInto: 'Ionic Spark',
    effect:
      '30% Shred enemies within 2 hexes. When enemies cast an Ability, deal magic damage equal to 160% of their maximum Mana. Shred: Reduce Magic Resist',
    tier: 'B',
  },
  {
    recipe: ['Negatron Cloak', 'Negatron Cloak'],
    combinesInto: "Dragon's Claw",
    effect: 'Gain 9% max health. Every 2 seconds, heal 5% max Health.',
    tier: 'S',
  },
  {
    recipe: ['Negatron Cloak', 'Recurve Bow'],
    combinesInto: "Runaan's Hurricane",
    effect:
      'Attacks fire a bolt at a nearby enemy, dealing 55% Attack Damage as physical damage.',
    tier: 'C',
  },
  {
    recipe: ['Negatron Cloak', 'Sparring Gloves'],
    combinesInto: 'Quicksilver',
    effect:
      'Combat start: Gain immunity to crowd control for 14 seconds. During this time, gain 4% Attack Speed every 2 seconds. [Unique - only 1 per champion]',
    tier: 'C',
  },
  {
    recipe: ['Negatron Cloak', 'Spatula'],
    combinesInto: 'Witchcraft Emblem',
    effect:
      'The holder gains the Witchcraft trait. [Unique - only 1 per champion.]',
    tier: '?',
  },
  {
    recipe: ['Negatron Cloak', 'Tear of the Goddess'],
    combinesInto: 'Adaptive Helm',
    effect: `Combat Start: Gain different bonuses based on starting position. Front Two Rows: 40 Armor and Magic Resist. Gain 1 Mana when struck by an attack. Back Two Rows: 20 Ability Power. Gain 10 Mana every 3 seconds.`,
    tier: 'B',
  },
  {
    recipe: ['Recurve Bow', 'B.F. Sword'],
    combinesInto: 'Giant Slayer',
    effect: `Deal 25% more damage to enemies with more than 1750 maximum Health.`,
    tier: 'A',
  },
  {
    recipe: ['Recurve Bow', 'Chain Vest'],
    combinesInto: "Titan's Resolve",
    effect: `Gain 2% Attack Damage and 1 Ability Power when attacking or taking damage, 
  stacking up to 25 times. 
  
  At full stacks, gain 20 Armor and 20 Magic Resist.`,
    tier: 'A',
  },
  {
    recipe: ['Recurve Bow', 'Frying Pan'],
    combinesInto: 'Multistriker Emblem',
    effect: `The holder gains the Multistriker trait. 
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Recurve Bow', "Giant's Belt"],
    combinesInto: "Nashor's Tooth",
    effect: `After casting an Ability, gain 40% Attack Speed for 5 seconds.`,
    tier: 'S',
  },
  {
    recipe: ['Recurve Bow', 'Needlessly Large Rod'],
    combinesInto: "Guinsoo's Rageblade",
    effect: `Attacks grant 5% stacking Attack Speed.`,
    tier: 'S',
  },
  {
    recipe: ['Recurve Bow', 'Negatron Cloak'],
    combinesInto: "Runaan's Hurricane",
    effect: `Attacks fire a bolt at a nearby enemy, dealing 55% Attack Damage as physical 
  damage.`,
    tier: 'C',
  },
  {
    recipe: ['Recurve Bow', 'Recurve Bow'],
    combinesInto: 'Red Buff',
    effect: `Deal 6% bonus damage.
  
  Attacks and Abilities 1% Burn and 33% Wound enemies for 5 seconds.
  
  Burn: Deals a percent of the target's maximum Health as true damage every second 
  Wound: Reduces healing received`,
    tier: 'B',
  },
  {
    recipe: ['Recurve Bow', 'Sparring Gloves'],
    combinesInto: 'Last Whisper',
    effect: `Physical damage 30% Sunders the target for 3 seconds. This effect does not 
  stack.
  
  [Unique - only 1 per champion] Sunder: Reduce Armor`,
    tier: 'A',
  },
  {
    recipe: ['Recurve Bow', 'Spatula'],
    combinesInto: 'Pyro Emblem',
    effect: `The holder gains the Pyro trait. 
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Recurve Bow', 'Tear of the Goddess'],
    combinesInto: 'Statikk Shiv',
    effect: `Every 3rd attack deals 35 magic damage and 30% Shreds 4 enemies for 5 
  seconds.
  
  Shred: Reduce Magic Resist`,
    tier: 'A',
  },
  {
    recipe: ['Sparring Gloves', 'B.F. Sword'],
    combinesInto: 'Infinity Edge',
    effect: `Abilities can critically strike.
  
  If the holder's abilities can already critically strike, gain 10% Critical Strike 
  Damage instead.`,
    tier: 'S',
  },
  {
    recipe: ['Sparring Gloves', 'Chain Vest'],
    combinesInto: 'Steadfast Heart',
    effect: `Take 8% less damage. While above 50% Health, take 15% less damage 
  instead.`,
    tier: 'A',
  },
  {
    recipe: ['Sparring Gloves', 'Frying Pan'],
    combinesInto: 'Warrior Emblem',
    effect: `The holder gains the Warrior trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Sparring Gloves', "Giant's Belt"],
    combinesInto: 'Guardbreaker',
    effect: `After damaging a Shield, deal 25% more damage for 3 seconds.`,
    tier: 'C',
  },
  {
    recipe: ['Sparring Gloves', 'Needlessly Large Rod'],
    combinesInto: 'Jeweled Gauntlet',
    effect: `Abilities can critically strike.
  
  If the holder's abilities can already critically strike, gain 10% Critical Strike 
  Damage instead.`,
    tier: 'S',
  },
  {
    recipe: ['Sparring Gloves', 'Negatron Cloak'],
    combinesInto: 'Quicksilver',
    effect: `Combat start: Gain immunity to crowd control for 14 seconds. During this 
  time, gain 4% Attack Speed every 2 seconds.
  
  [Unique - only 1 per champion]`,
    tier: 'C',
  },
  {
    recipe: ['Sparring Gloves', 'Recurve Bow'],
    combinesInto: 'Last Whisper',
    effect: `Physical damage 30% Sunders the target for 3 seconds. This effect does not 
  stack.
  
  [Unique - only 1 per champion] Sunder: Reduce Armor`,
    tier: 'A',
  },
  {
    recipe: ['Sparring Gloves', 'Sparring Gloves'],
    combinesInto: "Thief's Gloves",
    effect: `Each round: Equip 2 random items.
  
  [Consumes 3 item slots.]`,
    tier: 'B',
  },
  {
    recipe: ['Sparring Gloves', 'Spatula'],
    combinesInto: 'Honeymancy Emblem',
    effect: `The holder gains the Honeymancy trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Sparring Gloves', 'Tear of the Goddess'],
    combinesInto: 'Hand of Justice',
    effect: `Gain 2 effects:
  
  • 15% Attack Damage and 15 Ability Power.
  • 15% Omnivamp.
  
  Each round, randomly double 1 of these effects.
  
  Omnivamp: heal for some of damage dealt`,
    tier: 'S',
  },
  {
    recipe: ['Spatula', 'B.F. Sword'],
    combinesInto: 'Sugarcraft Emblem',
    effect: `The holder gains the Sugarcraft trait. [Unique - only 1 
    per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Chain Vest'],
    combinesInto: 'Frost Emblem',
    effect: `The holder gains the Frost trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Frying Pan'],
    combinesInto: "Tactician's Cape",
    effect: `Your team gains +1 maximum team size.
  
  10% chance to drop 1 gold after 10 seconds of combat.`,
    tier: '?',
  },
  {
    recipe: ['Spatula', "Giant's Belt"],
    combinesInto: 'Eldritch Emblem',
    effect: `The holder gains the Eldritch trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Needlessly Large Rod'],
    combinesInto: 'Portal Emblem',
    effect: `The holder gains the Portal trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Negatron Cloak'],
    combinesInto: 'Witchcraft Emblem',
    effect: `The holder gains the Witchcraft trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Recurve Bow'],
    combinesInto: 'Pyro Emblem',
    effect: `The holder gains the Pyro trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Sparring Gloves'],
    combinesInto: 'Honeymancy Emblem',
    effect: `The holder gains the Honeymancy trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Spatula'],
    combinesInto: "Tactician's Crown",
    effect: `Your team gains +1 maximum team size.
  
  10% chance to drop 1 gold when you win combat.`,
    tier: '?',
  },
  {
    recipe: ['Spatula', 'Tear of the Goddess'],
    combinesInto: 'Faerie Emblem',
    effect: `The holder gains the Faerie trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Tear of the Goddess', 'B.F. Sword'],
    combinesInto: 'Spear of Shojin',
    effect: `Attacks grant 5 bonus Mana.`,
    tier: 'S',
  },
  {
    recipe: ['Tear of the Goddess', 'Chain Vest'],
    combinesInto: "Protector's Vow",
    effect: `Once per combat at 40% Health, gain a 25% max Health Shield that lasts 5 seconds
  and gain 20 Armor and 20 Magic Resist.`,
    tier: 'C',
  },
  {
    recipe: ['Tear of the Goddess', 'Frying Pan'],
    combinesInto: 'Scholar Emblem',
    effect: `The holder gains the Scholar trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Tear of the Goddess', "Giant's Belt"],
    combinesInto: 'Redemption',
    effect: `Heal allies within 1 hex for 15% of their missing Health every 5 seconds. They also
  take 10% less damage for 5 seconds (damage reduction does not stack).
  
  [Aura item]`,
    tier: 'A',
  },
  {
    recipe: ['Tear of the Goddess', 'Needlessly Large Rod'],
    combinesInto: "Archangel's Staff",
    effect: `Combat start: Gain 30 Ability Power every 5 seconds.`,
    tier: 'A',
  },
  {
    recipe: ['Tear of the Goddess', 'Negatron Cloak'],
    combinesInto: 'Adaptive Helm',
    effect: `Combat Start: Gain different bonuses based on starting position.
  
  Front Two Rows: 40 Armor and Magic Resist. Gain 1 Mana when struck by an attack.
  
  Back Two Rows: 20 Ability Power. Gain 10 Mana every 3 seconds.`,
    tier: 'B',
  },
  {
    recipe: ['Tear of the Goddess', 'Recurve Bow'],
    combinesInto: 'Statikk Shiv',
    effect: `Every 3rd attack deals 35 magic damage and 30% Shreds 4 enemies for 5 seconds.
  
  Shred: Reduce Magic Resist`,
    tier: 'A',
  },
  {
    recipe: ['Tear of the Goddess', 'Sparring Gloves'],
    combinesInto: 'Hand of Justice',
    effect: `Gain 2 effects:
  
  • 15% Attack Damage and 15 Ability Power.
  • 15% Omnivamp.
  
  Each round, randomly double 1 of these effects.
  
  Omnivamp: heal for some of damage dealt`,
    tier: 'S',
  },
  {
    recipe: ['Tear of the Goddess', 'Spatula'],
    combinesInto: 'Faerie Emblem',
    effect: `The holder gains the Faerie trait.
  
  [Unique - only 1 per champion.]`,
    tier: '?',
  },
  {
    recipe: ['Tear of the Goddess', 'Tear of the Goddess'],
    combinesInto: 'Blue Buff',
    effect: `Max mana reduced by 10.
  
  When the holder gets a takedown, they deal 8% more damage for 8 seconds.
  
  [Unique - only 1 per champion]`,
    tier: 'S',
  },
  {
    recipe: ['Needlessly Large Rod', 'Needlessly Large Rod'],
    combinesInto: "Rabadon's Deathcap",
    effect: 'Deal 20% bonus damage.',
    rating: 'A',
  },
  {
    recipe: [],
    combinesInto: "Faerie Queen's Crown",
    effect: '?',
    rating: '?',
  },
  {
    recipe: [],
    combinesInto: "Queenguard's Armor",
    effect: '?',
    rating: '?',
  },
];

export default CURRENT_ITEMS;
