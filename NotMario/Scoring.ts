// @ifdef INCLUDE_DEFINITIONS
/// <reference path="FullScreenMario.ts" />
// @endif

module FullScreenMario {
    "use strict";

    /**
     * Storage for scoring Functions in FullScreenMario.
     */
    export class Scoring {
        /**
         * The container FullScreenMario.
         */
        private FSM: FullScreenMario;

        /**
         * Initializes a new instance of the Scoring class.
         * 
         * @param FSM   The container FullScreenMario.
         */
        constructor(FSM: FullScreenMario) {
            this.FSM = FSM;
        }

        /**
         * Determines how many points should be gained from a number of consecutive
         * enemy deaths (such as via hops or shells).
         * 
         * @param level   How many deaths have happened.
         * @returns How many points should be gained (or 0, for having gained a life).
         */
        findScore(level: number): number {
            if (level < this.FSM.pointLevels.length) {
                return this.FSM.pointLevels[level];
            }

            this.FSM.gainLife(1);
            return 0;
        }

        /**
         * Driver function to score some number of points for a Player and show
         * the gains via an animation.
         * 
         * @param value   How many points a Player is receiving.
         * @param continuation   Whether the game shouldn't increase the score
         *                       amount in the ItemsHoldr (this will only be
         *                       false on the first score() call).
         * @remarks For point gains that should not have a visual animation, 
         *          directly call ItemsHolder.increase("score", value).
         * @remarks The calling chain will be: 
         *              score -> scoreOn -> scoreAnimateOn -> scoreAnimate          
         */
        score(value: number, continuation?: boolean): void {
            if (!value) {
                return;
            }

            this.scoreOn(value, this.FSM.player, true);

            if (!continuation) {
                this.FSM.ItemsHolder.increase("score", value);
            }
        }

        /**
         * Scores a given number of points for a Player, and shows the gains via
         * an animation centered at the top of a thing.
         * 
         * @param value   How many points a Player is receiving.
         * @param thing   An in-game Thing to place the visual score text
         *                        on top of and centered.
         * @param continuation   Whether the game shouldn't increase the score
         *                       amount in the ItemsHoldr (this will only be
         *                       false on the first score() call).
         * @remarks The calling chain will be: 
         *              scoreOn -> scoreAnimateOn -> scoreAnimate
         */
        scoreOn(value: number, thing: IThing, continuation?: boolean): void {
            if (!value) {
                return;
            }

            var text: IText = <IText>this.FSM.addThing("Text" + value);

            this.FSM.scoring.scoreAnimateOn(<IText>text, thing);

            if (!continuation) {
                this.FSM.ItemsHolder.increase("score", value);
            }

            this.FSM.ModAttacher.fireEvent("onScoreOn", value, thing, continuation);
        }

        /**
         * Centers a text associated with some points gain on the top of a Thing,
         * and animates it updward, setting an event for it to die.
         * 
         * @param text   The text whose position is being manipulated.
         * @param thing   An in-game Thing to place the visual score text
         *                on top of and centered.
         * @remarks The calling chain will be: 
         *              scoreAnimateOn -> scoreAnimate
         */
        scoreAnimateOn(text: IText, thing: IThing): void {
            this.FSM.setMidXObj(text, thing);
            this.FSM.setBottom(text, thing.top);
            this.FSM.scoring.scoreAnimate(text);
        }

        /**
         * Animates a score on top of a Thing.
         * 
         * @param thing   An in-game Thing to place the visual score text
         *                on top of and centered.
         * @param timeout   How many game ticks to wait before killing
         *                  the text (by default, 28).
         * @remarks This is the last function in the score() calling chain:
         *              scoreAnimate <- scoreAnimateOn <- scoreOn <- score
         */
        scoreAnimate(thing: IThing, timeout: number = 28): void {
            this.FSM.TimeHandler.addEventInterval(
                this.FSM.shiftVert,
                1,
                timeout,
                thing,
                -this.FSM.unitsize / 6);

            this.FSM.TimeHandler.addEvent(
                this.FSM.killNormal, timeout, thing);
        }

        /**
         * Inelegant catch-all Function for when a Player has hit a shell and 
         * needs points to be scored. This takes into account player star status and
         * Shell resting and peeking. With none of those modifiers, it defaults to
         * scoreOn with 400.
         * 
         * @param thing   A Player hitting other.
         * @param other   A Shell being hit by thing.
         * @remarks See http://themushroomkingdom.net/smb_breakdown.shtml
         */
        scorePlayerShell(thing: IPlayer, other: IShell): void {
            // Star player: 200 points
            if (thing.star) {
                this.FSM.scoring.scoreOn(200, other);
                return;
            }

            // Shells in the air: 8000 points (see guide)
            if (!other.resting) {
                this.FSM.scoring.scoreOn(8000, other);
                return;
            }

            // Peeking shells: 1000 points
            if (other.peeking) {
                this.FSM.scoring.scoreOn(1000, other);
                return;
            }

            // Already hopping: 500 points
            if (thing.jumpcount) {
                this.FSM.scoring.scoreOn(500, other);
                return;
            }

            // All other cases: the shell's default
            this.FSM.scoring.scoreOn(400, other);
        }

        /**
         * Determines the amount a Player should score upon hitting a flagpole,
         * based on the Player's y-position.
         * 
         * @param thing   A Player hitting a flagpole
         * @param difference   How far up the pole the collision happened,
         *                     by absolute amount (not multiplied by 
         *                     unitsize).
         * @returns How many points to award.
         * @remarks See http://themushroomkingdom.net/smb_breakdown.shtml
         */
        scorePlayerFlag(thing: IThing, difference: number): number {
            var amount: number;

            if (difference < 28) {
                amount = difference < 8 ? 100 : 400;
            } else if (difference < 40) {
                amount = 800;
            } else {
                amount = difference < 62 ? 2000 : 5000;
            }

            return amount;
        }
    }
}
