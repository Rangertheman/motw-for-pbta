export const configSheet = async () => {

   // pass the MotW sheet object to sheetConfig

   game.pbta.sheetConfig = {
    "rollFormula": "2d6",
    "rollResults": {
        "success": {
            "start": 10,
            "end": null,
            "label": "Success!"
        },
        "partial": {
            "start": 7,
            "end": 9,
            "label": "Partial success"
        },
        "failure": {
            "start": null,
            "end": 6,
            "label": "Miss..."
        }
    },
    "actorTypes": {
        "character": {
            "stats": {
                "cool": {
                    "label": "Cool",
                    "value": 0
                },
                "tough": {
                    "label": "Tough",
                    "value": 0
                },
                "charm": {
                    "label": "Charm",
                    "value": 0
                },
                "sharp": {
                    "label": "Sharp",
                    "value": 0
                },
                "weird": {
                    "label": "Weird",
                    "value": 0
                }
            },
            "attrTop": {
                "harm": {
                    "label": "Harm",
                    "description": "When you reach 4 or more, mark unstable.",
                    "customLabel": false,
                    "userLabel": false,
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
                    "label": "Unstable",
                    "description": "(Unstable injuries will worsen as time passes)",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Checkbox",
                    "checkboxLabel": "Unstable Injuries",
                    "value": false
                },
                "luck": {
                    "label": "Luck",
                    "description": "Mark luck to change a roll to 12 or avoid all harm.",
                    "customLabel": false,
                    "userLabel": false,
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
                    "label": "Experience",
                    "description": "When you roll a miss, or when a move says to, mark Xp.",
                    "customLabel": false,
                    "userLabel": false,
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
                    "label": "Armour",
                    "description": "Armour reduces harm suffered by the armour rating.",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Number",
                    "value": 0
                },
                "luckspecial": {
                    "label": "Luck Special",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "look": {
                    "label": "Look",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "improvements": {
                    "label": "Improvements",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "advancedimprovements": {
                    "label": "Advanced Improvements",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "basic": {
                    "label": "Basic Moves",
                    "moves": []
                },
                "class": {
                    "label": "Playbook Moves",
                    "moves": []
                }
            },
            "equipmentTypes": {
                "gear": {
                    "label": "Gear",
                    "moves": []
                },
                "weapon": {
                    "label": "Weapons",
                    "moves": []
                },
                "transport": {
                    "label": "Transport",
                    "moves": []
                },
                "armour": {
                    "label": "Armour",
                    "moves": []
                }
            }
        },
        "npc": {
            "attrTop": {
                "harm": {
                    "label": "Harm Capacity",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Resource",
                    "value": 0,
                    "max": 0
                },
                "armour": {
                    "label": "Armour",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Number",
                    "value": 0
                },
                "type": {
                    "label": "NPC Type",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "ListMany",
                    "condition": false,
                    "options": {
                        "0": {
                            "label": "Monster",
                            "value": false
                        },
                        "1": {
                            "label": "Minion",
                            "value": false
                        },
                        "2": {
                            "label": "Bystander",
                            "value": false
                        },
                        "3": {
                            "label": "Location",
                            "value": false
                        }
                    }
                }
            },
            "attrLeft": {
                "powers": {
                    "label": "Drive",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "attacks": {
                    "label": "Attacks",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "weakness": {
                    "label": "Weakness",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "desc": {
                    "label": "Description",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "motivation": {
                    "label": "Motivation",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "custom": {
                    "label": "Custom Moves",
                    "moves": []
                }
            }
        },
        "team": {
            "baseType": "character",
            "attrTop": {
                "improvement": {
                    "label": "Harm Capacity",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Resource",
                    "value": 0,
                    "max": 0
                },
                "armour": {
                    "label": "Armour",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Number",
                    "value": 0
                },
                "type": {
                    "label": "NPC Type",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "ListMany",
                    "condition": false,
                    "options": {
                        "0": {
                            "label": "Monster",
                            "value": false
                        },
                        "1": {
                            "label": "Minion",
                            "value": false
                        },
                        "2": {
                            "label": "Bystander",
                            "value": false
                        },
                        "3": {
                            "label": "Location",
                            "value": false
                        }
                    }
                }
            },
            "attrLeft": {
                "powers": {
                    "label": "Drive",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "attacks": {
                    "label": "Attacks",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "weakness": {
                    "label": "Weakness",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "desc": {
                    "label": "Description",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "motivation": {
                    "label": "Motivation",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "custom": {
                    "label": "Custom Moves",
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
      await game.settings.set('pbta', 'hideRollMode', true);
      await game.settings.set('pbta', 'hideUses', true);
   }

}