export const configSheet = async () => {

   // pass the MotW sheet object to sheetConfig

   game.pbta.sheetConfig = {
    "rollFormula": "2d6",
    "rollResults": {
        "success": {
            "start": 10,
            "end": null,
            "label": game.i18n.localize("motw.rollResults.success")
        },
        "partial": {
            "start": 7,
            "end": 9,
            "label": game.i18n.localize("motw.rollResults.partial")
        },
        "failure": {
            "start": null,
            "end": 6,
            "label": game.i18n.localize("motw.rollResults.failure")
        }
    },
    "actorTypes": {
        "character": {
            "stats": {
                "cool": {
                    "label": game.i18n.localize("motw.character.stats.cool"),
                    "value": 0
                },
                "tough": {
                    "label": game.i18n.localize("motw.character.stats.tough"),
                    "value": 0
                },
                "charm": {
                    "label": game.i18n.localize("motw.character.stats.charm"),
                    "value": 0
                },
                "sharp": {
                    "label": game.i18n.localize("motw.character.stats.sharp"),
                    "value": 0
                },
                "weird": {
                    "label": game.i18n.localize("motw.character.stats.weird"),
                    "value": 0
                }
            },
            "attributes": {
                "harm": {
                    "label": game.i18n.localize("motw.character.attrTop.harm.label"),
                    "description": game.i18n.localize("motw.character.attrTop.harm.description"),
                    "customLabel": false,
                    "userLabel": false,
                    "position": "top",
                    "type": "Clock",
                    "value": 0,
                    "max": 7,
                    "steps": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ]
                },
                "unstable": {
                    "label": game.i18n.localize("motw.character.attrTop.unstable.label"),
                    "description": game.i18n.localize("motw.character.attrTop.unstable.description"),
                    "customLabel": false,
                    "userLabel": false,
                    "position": "top",
                    "type": "Checkbox",
                    "checkboxLabel": game.i18n.localize("motw.character.attrTop.unstable.checkboxLabel"),
                    "value": false
                },
                "luck": {
                    "label": game.i18n.localize("motw.character.attrTop.luck.label"),
                    "description": game.i18n.localize("motw.character.attrTop.luck.description"),
                    "customLabel": false,
                    "userLabel": false,
                    "position": "top",
                    "type": "Clock",
                    "value": 0,
                    "max": 7,
                    "steps": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ]
                },
                "xp": {
                    "label": game.i18n.localize("motw.character.attrTop.xp.label"),
                    "description": game.i18n.localize("motw.character.attrTop.xp.description"),
                    "customLabel": false,
                    "userLabel": false,
                    "position": "top",
                    "type": "Xp",
                    "value": 0,
                    "max": 5,
                    "steps": [
                        false,
                        false,
                        false,
                        false,
                        false
                    ]
                }
            },
            "attrLeft": {
                "armour": {
                    "label": game.i18n.localize("motw.character.attrLeft.armour.label"),
                    "description": game.i18n.localize("motw.character.attrLeft.armour.description"),
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "Number",
                    "value": 0
                },
                "luckspecial": {
                    "label": game.i18n.localize("motw.character.attrLeft.luckspecial.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "look": {
                    "label": game.i18n.localize("motw.character.attrLeft.look.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "improvements": {
                    "label": game.i18n.localize("motw.character.attrLeft.improvements.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "advancedimprovements": {
                    "label": game.i18n.localize("motw.character.attrLeft.advancedimprovements.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "basic": {
                    "label": game.i18n.localize("motw.character.moveTypes.basic.label"),
                    "moves": [],
                    "creation": true
                },
                "class": {
                    "label": game.i18n.localize("motw.character.moveTypes.class.label"),
                    "moves": [],
                    "playbook": true
                },
                "altMove": {
                    "label": game.i18n.localize("motw.character.moveTypes.altMove.label"),
                    "moves": []
                }
            },
            "equipmentTypes": {
                "gear": {
                    "label": game.i18n.localize("motw.character.equipmentTypes.gear.label"),
                    "moves": []
                },
                "weapon": {
                    "label": game.i18n.localize("motw.character.equipmentTypes.weapon.label"),
                    "moves": []
                },
                "transport": {
                    "label": game.i18n.localize("motw.character.equipmentTypes.transport.label"),
                    "moves": []
                },
                "armour": {
                    "label": game.i18n.localize("motw.character.equipmentTypes.armour.label"),
                    "moves": []
                }
            }
        },
        "npc": {
            "attributes": {
                "harm": {
                    "label": game.i18n.localize("motw.npc.attrTop.harm.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "top",
                    "type": "Resource",
                    "value": 0,
                    "max": 0
                },
                "armour": {
                    "label": game.i18n.localize("motw.npc.attrTop.armour.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "top",
                    "type": "Number",
                    "value": 0
                },
                "type": {
                    "label": game.i18n.localize("motw.npc.attrTop.type.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "top",
                    "type": "ListMany",
                    "condition": false,
                    "options": {
                        "0": {
                            "label": game.i18n.localize("motw.npc.attrTop.type.option.monster"),
                            "value": false
                        },
                        "1": {
                            "label": game.i18n.localize("motw.npc.attrTop.type.option.minion"),
                            "value": false
                        },
                        "2": {
                            "label": game.i18n.localize("motw.npc.attrTop.type.option.bystander"),
                            "value": false
                        },
                        "3": {
                            "label": game.i18n.localize("motw.npc.attrTop.type.option.location"),
                            "value": false
                        }
                    }
                }
            },
            "attrLeft": {
                "powers": {
                    "label": game.i18n.localize("motw.npc.attrLeft.powers.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "attacks": {
                    "label": game.i18n.localize("motw.npc.attrLeft.attacks.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "weakness": {
                    "label": game.i18n.localize("motw.npc.attrLeft.weakness.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "desc": {
                    "label": game.i18n.localize("motw.npc.attrLeft.desc.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "motivation": {
                    "label": game.i18n.localize("motw.npc.attrLeft.motivation.label"),
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "custom": {
                    "label": game.i18n.localize("motw.npc.moveTypes.custom.label"),
                    "moves": []
                }
            }
        }
    }
}

   // check if users wants to override settings; if not, hide all PbtA sheet options
   let overrideSettings = await game.settings.get('motw-for-pbta', 'settings-override');

   if (!overrideSettings) {
      await game.settings.set('pbta', 'advForward', true);
      await game.settings.set('pbta', 'hideRollFormula', true);
      await game.settings.set('pbta', 'hideForward', true);
      await game.settings.set('pbta', 'hideOngoing', true);
      await game.settings.set('pbta', 'hideHold', true);
      await game.settings.set('pbta', 'hideRollMode', true);
      await game.settings.set('pbta', 'hideUses', true);
   }

}