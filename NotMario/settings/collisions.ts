/// <reference path="../FullScreenMario.ts" />

module FullScreenMario {
    "use strict";

    FullScreenMario.settings.collisions = {
        "keyGroupName": "groupType",
        "keyTypeName": "title",
        "globalCheckGenerators": {
            "Character": Physics.prototype.generateCanThingCollide,
            "Solid": Physics.prototype.generateCanThingCollide
        },
        "hitCheckGenerators": {
            "Character": {
                "Character": Physics.prototype.generateIsCharacterTouchingCharacter,
                "Solid": Physics.prototype.generateIsCharacterTouchingSolid
            }
        },
        "hitCallbackGenerators": {
            "Character": {
                "Solid": Physics.prototype.generateHitCharacterSolid,
                "Character": Physics.prototype.generateHitCharacterCharacter
            }
        }
    };
}
