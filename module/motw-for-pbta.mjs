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

});

Hooks.once('pbtaSheetConfig', () => {

   // Disable the sheet config form.
   game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with the MotW version.
   configSheet();

});

// Add event listeners when actor sheet is rendered.
Hooks.on("renderActorSheet", async function (app, html, data) {

   let actor = app.actor;
 
   if (actor.type == 'character') {
 
     // Add fa-book and click it to open playbook
     let charPlaybook = document.querySelector('.charplaybook');
     let faBook = '<i class="fa-solid fa-book"></i>';
     charPlaybook.insertAdjacentHTML('beforebegin', faBook);
     const faBookIcon = document.querySelector('.sheet-header__fields .fa-book');
     faBookIcon.style.filter = 'opacity(0.4)';
     let name = charPlaybook.value;
 
     if (name != '') {
       faBookIcon.style.filter = 'opacity(1)';
       faBookIcon.addEventListener('mouseover', () => {
         faBookIcon.style.cursor = 'pointer'; // Change 'pointer' to the desired cursor style
       });
       
       // Reset the cursor style when the mouse leaves the element
       faBookIcon.addEventListener('mouseout', () => {
         faBookIcon.style.cursor = 'default'; // Change 'default' to the default cursor style you want
       });
       faBookIcon.addEventListener("click", openPlaybook);
       async function openPlaybook(e) {
           // Retrieve playbooks in game and then in compendium
           let playbooks = game.items.filter(i => i.type == 'playbook');
           let pack = game.packs.get("motw-for-pbta.playbooks");
           let items = pack ? await pack.getDocuments() : [];
           playbooks = playbooks.concat(items.filter(i => i.type == 'playbook'));
           // Remove playbook repeats by matching names in new array.
           let playbookNames = [];
           for (let p of playbooks) {
             let playbookName = p.name;
             if (playbookNames.includes(playbookName) !== false) {
               playbooks = playbooks.filter(item => item.id != p.id);
             } else {
               playbookNames.push(playbookName);
             }
           }
           // Render current playbook
           for (let playbook of playbooks) {
             if (playbook.name == name) {
               playbook.sheet.render(true);
             }
           }
          }
       }
    } })
   