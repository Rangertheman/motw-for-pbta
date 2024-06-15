import {
   configSheet
} from "./helper/config-sheet.mjs";

// once the game has initialized, set up the module
Hooks.once('init', () => {

   // register MotW settings
   game.settings.register('motw-for-pbta', 'settings-override', {
      name: game.i18n.localize("motw.Settings.Title"),
      default: false,
      type: Boolean,
      scope: 'world',
      config: true,
      hint: game.i18n.localize("motw.Settings.Hint"),
      requiresReload: true
   });
   // Define custom PbtA system tags.
   game.pbta.tagConfigOverride = {
      // Tags available to any actor and item
      actor: {
          // Tags available to all actors
          all: '[{"value":"person"}]',
          // Tags available to a specific actor type set up on game.pbta.sheetConfig.actorTypes (e.g. "character", "npc")
          character: '[{"value":"disgraceful appearance"},{"value":"impeded mobility"},{"value":"unsteady hands"},{"value":"impaired senses"},{"value":"weakened health"}]',
          npc: '[{"value":"mook"}]'
      },
      item: {
          // Tags available to all actors
          all: '[{"value":"consumable"}]',
          // Tags available to a specific item type (e.g. "equipment", "move")
          weapon: '[{"value":"-1 harm", "description":"Decreases harm by -1"},{"value":"+1 harm", "description":"Increases harm by +1"},{"value":"+2 harm", "description":"Increases harm by +2"},{"value":"+3 harm", "description":"Increases harm by +3"},{"value":"+4 harm", "description":"Increases harm by +4"},{"value":"1-harm", "description":"This is how much harm the attack inflicts"},{"value":"2-harm", "description":"This is how much harm the attack inflicts"},{"value":"3-harm", "description":"This is how much harm the attack inflicts"},{"value":"4-harm", "description":"This is how much harm the attack inflicts"},{"value":"area", "description":"Can hit multiple foes. You may divide the harm you inflict among multiple targets"},{"value":"auto"},{"value":"balanced", "description":"Easy to wield and keep your grip on"},{"value":"barrier", "description":"Does harm to anything that passes through. Counts as armour against any attacks that pass through it"},{"value":"bone"},{"value":"close", "description":"Effective at fairly close quarters outside arms` reach, but not too far"},{"value":"cold iron"},{"value":"far", "description":"Effective at long range"},{"value":"fire", "description":"Sets things on fire"},{"value":"forceful", "description":"Pushes things around allowing you to force them where you want them in addition to normal attack effects"},{"value":"hand", "description":"Effective within arms` reach"}, {"value":"heavy", "description":"This weapon is heavy and difficult to wield"}, {"value":"hidden"}, {"value":"holy", "description":"This will be more effective against monsters with a weakness to holy items"}, {"value":"ignore-armour", "description":"Ignores protective armour. Armour has no effect on this harm. If armour has the magic tag then the attack needs both ignore-armour and magic to bypass the armour"}, {"value":"innocuous", "description":"Doesn`t draw suspicion"}, {"value":"intimate", "description":"effective at the closest of quarters — within the embrace of your foe"}, {"value": "life-drain", "description":"Transfers life energy: the wielder is healed for as many points of harm as were inflicted. E.g. if you inflict 2-harm, then you heal 2-harm from your injuries"}, {"value":"loud", "description":"Loud enough that it draws attention"}, {"value":"enchanted", "description":"nchanted, and so can affect certain creatures and armours that are proof against normal weapons"}, {"value":"many", "description":"These weapons are small enough you can carry a large number of them"}, {"value":"messy", "description":"Spreads a lot of blood and gore around"}, {"value":"mundane"}, {"value":"obsidian"}, {"value":"obvious"}, {"value":"old-fashioned"}, {"value":"practical"}, {"value":"quick", "description":"Fast to prepare and attack with giving you a better chance of going first"}, {"value":"quiet"}, {"value":"reload", "description":"This weapon has limited ammunition and may run out and need to be reloaded"}, {"value":"restraining", "description":"A successful attack entangles or grabs the victim"}, {"value":"serious"}, {"value":"signature"}, {"value":"silver"}, {"value":"slow", "description":"This weapon is slow to prepare and attack with"}, {"value":"small", "description":"This weapon is tiny and easy to conceal"}, {"value":"steel"}, {"value":"stone"}, {"value":"stun"}, {"value":"teeth"}, {"value":"quiet"}, {"value":"unreliable", "description":"This weapon needs regular cleaning and maintenance. Otherwise it just isn`t gonna work"}, {"value":"useful", "description":"This weapon has other uses aside from violence"}, {"value":"valuable", "description":"This weapon is antique or made of valuable materials"}, {"value":"volatile", "description":"This weapon is dangerous and unstable"}, {"value":"wood"}]',
          armour: '[{"value":"+1 armour", "description":"Increases armour by +1"},{"value":"+2 armour", "description":"Increases armour by +2"},{"value":"+3 armour", "description":"Increases armour by +3"},{"value":"1-armour", "description":"Provides 1 point of armour"},{"value":"2-armour", "description":"Provides 2 points of armour"},{"value":"3-armour", "description":"Provides 3 points of armour"}]'
      }
  };

});

Hooks.once('pbtaSheetConfig', () => {

   // Disable the sheet config form.
   game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with the MotW version.
   configSheet();

})