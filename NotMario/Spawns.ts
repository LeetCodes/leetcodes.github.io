// @ifdef INCLUDE_DEFINITIONS
/// <reference path="FullScreenMario.d.ts" />
// @endif

module FullScreenMario {
    "use strict";

    /**
     * Storage for spawn Functions in FullScreenMario.
     */
    export class Spawns {
        /**
         * Spawn callback for DeadGoombas. They simply disappear after 21 steps.
         * 
         * @param thing   A DeadGoomba being spawned.
         */
        spawnDeadGoomba(thing: IThing): void {
            thing.FSM.TimeHandler.addEvent(() => thing.FSM.deaths.killNormal(thing), 21);
        }

        /**
         * Spawn callback for HammerBros. Gravity is reduced, and the hammer and
         * jump event intervals are started. The cyclical movement counter is set to
         * 0.
         * 
         * @param thing   A HammerBro being spawned.
         */
        spawnHammerBro(thing: IHammerBro): void {
            thing.counter = 0;

            thing.gravity = thing.FSM.MapScreener.gravity / 2.1;

            thing.FSM.TimeHandler.addEvent(thing.FSM.animations.animateThrowingHammer, 35, thing, 7);
            thing.FSM.TimeHandler.addEventInterval(thing.FSM.animations.animateJump, 140, Infinity, thing);
        }

        /** 
         * Spawn callback for Bowsers. The cyclical movement counter is set to 0 and
         * the firing and jumping event intervals are started. If it also specifies 
         * a throwing interval, that's started too.
         * 
         * @param thing   A Bowser being spawned.
         */
        spawnBowser(thing: IBowser): void {
            var i: number;

            thing.counter = 0;
            thing.deathcount = 0;

            for (i = 0; i < thing.fireTimes.length; i += 1) {
                thing.FSM.TimeHandler.addEventInterval(
                    thing.FSM.animations.animateBowserFire,
                    thing.fireTimes[i],
                    Infinity,
                    thing);
            }

            for (i = 0; i < thing.jumpTimes.length; i += 1) {
                thing.FSM.TimeHandler.addEventInterval(
                    thing.FSM.animations.animateBowserJump,
                    thing.jumpTimes[i],
                    Infinity,
                    thing);
            }

            if (thing.throwing) {
                for (i = 0; i < thing.throwAmount; i += 1) {
                    thing.FSM.TimeHandler.addEvent(
                        function (): void {
                            thing.FSM.TimeHandler.addEventInterval(
                                thing.FSM.animations.animateBowserThrow,
                                thing.throwPeriod,
                                Infinity,
                                thing);
                        },
                        thing.throwDelay + i * thing.throwBetween);
                }
            }
        }

        /**
         * Spawn callback for Piranhas. The movement counter and direction are
         * reset, and if the Piranha is on a pipe, it has a reduced height (6).
         * 
         * @param thing   A Piranha being spawned.
         */
        spawnPiranha(thing: IPiranha): void {
            var bottom: number;

            thing.counter = 0;
            thing.direction = thing.FSM.unitsize / -40;

            if (thing.onPipe) {
                bottom = thing.bottom;
                thing.FSM.setHeight(thing, 6);
                thing.FSM.setBottom(thing, bottom);
            }
        }

        /**
         * Spawn callback for Bloopers. Its squeeze and movement counters are 
         * set to 0.
         * 
         * @param thing   A Blooper being spawned.
         */
        spawnBlooper(thing: IBlooper): void {
            thing.squeeze = 0;
            thing.counter = 0;
        }

        /**
         * Spawn callback for Podoboos. The jumping interval is set to the Thing's
         * frequency.
         * 
         * @param thing   A Podoboo being spawned.
         */
        spawnPodoboo(thing: IPodoboo): void {
            thing.FSM.TimeHandler.addEventInterval(
                thing.FSM.animations.animatePodobooJumpUp,
                thing.frequency,
                Infinity,
                thing);
        }

        /**
         * Spawn callback for Lakitus. MapScreenr registers the most recently
         * added Lakitu as some areas spawn them every once in a while.
         * 
         * @param thing   A Lakitu being spawned.
         */
        spawnLakitu(thing: ILakitu): void {
            thing.FSM.MapScreener.lakitu = thing;

            thing.FSM.TimeHandler.addEventInterval(
                thing.FSM.animations.animateLakituThrowingSpiny, 140, Infinity, thing);
        }

        /**
         * Spawning callback for Cannons. Unless specified by the noBullets flag,
         * the firing interval is set to the Thing's frequency.
         * 
         * @param thing   A Cannon being spawned.
         */
        spawnCannon(thing: ICannon): void {
            if (thing.noBullets) {
                return;
            }

            thing.FSM.TimeHandler.addEventInterval(
                thing.FSM.animations.animateCannonFiring,
                thing.frequency,
                thing.frequency,
                thing);
        }

        /**
         * Spawning callback for CastleBlocks. If the Thing has fireballs, an Array
         * of them are made and animated to tick around the block like a clock, set
         * by the thing's speed and direction.
         * 
         * @param thing   A CastleBlock being spawned.
         */
        spawnCastleBlock(thing: ICastleBlock): void {
            if (!thing.fireballs) {
                return;
            }

            var balls: ICastleFireball[] = [],
                i: number;

            for (i = 0; i < thing.fireballs; i += 1) {
                balls.push(<ICastleFireball>thing.FSM.addThing("CastleFireball"));
                thing.FSM.setMidObj(balls[i], thing);
            }

            if (thing.speed >= 0) {
                thing.dt = 0.07;
                thing.angle = 0.25;
            } else {
                thing.dt = -0.07;
                thing.angle = -0.25;
            }

            if (!thing.direction) {
                thing.direction = -1;
            }

            thing.FSM.TimeHandler.addEventInterval(
                thing.FSM.animations.animateCastleBlock,
                Math.round(7 / Math.abs(thing.speed)),
                Infinity,
                thing,
                balls);
        }

        /**
         * Spawning callback for floating Things, such as Koopas and Platforms. The
         * Thing's begin and end attributes are set relative to the MapScreener's
         * floor, so its movement can handle cycling between the two.
         * 
         * @param thing   A Thing being spawned to float around.
         */
        spawnMoveFloating(thing: IThingFloating): void {
            // Make sure thing.begin <= thing.end
            thing.FSM.movements.setMovementEndpoints(thing);

            // Make thing.begin and thing.end relative to the area's floor
            thing.begin = thing.FSM.MapScreener.floor * thing.FSM.unitsize - thing.begin;
            thing.end = thing.FSM.MapScreener.floor * thing.FSM.unitsize - thing.end;
        }

        /**
         * Spawning callback for sliding Things, such as Platforms. The Thing's 
         * begin and end attributes do not need to be relative to anything.
         * 
         * @param thing   A Thing being spawned to slide back and forth.
         */
        spawnMoveSliding(thing: IThingSliding): void {
            // Make sure thing.begin <= thing.end
            thing.FSM.movements.setMovementEndpoints(thing);
        }

        /**
         * Spawning callback for a Platform that's a part of a Scale.
         * 
         * @param thing   A Platform being spawned within a Scale group.
         */
        spawnScalePlatform(thing: IPlatform): void {
            var collection: any = thing.collection || {},
                ownKey: string = thing.collectionKey === "platformLeft" ? "Left" : "Right",
                partnerKey: string = ownKey === "Left" ? "Right" : "Left";

            thing.partners = {
                "ownString": collection["string" + ownKey],
                "partnerString": collection["string" + partnerKey],
                "partnerPlatform": collection["platform" + partnerKey]
            };
        }

        /**
         * Generator callback to create a random CheepCheep. The spawn is given a
         * random x-velocity, is placed at a random point just below the screen, and
         * is oriented towards a Player.
         * 
         * @param FSM
         * @returns Whether CheepCheep spawning has been cancelled.
         */
        spawnRandomCheep(FSM: FullScreenMario): boolean {
            if (!FSM.MapScreener.spawningCheeps) {
                return true;
            }

            var spawn: ICheepCheep = FSM.ObjectMaker.make("CheepCheep", {
                "flying": true,
                "xvel": FSM.NumberMaker.random() * FSM.unitsize * 1.4,
                "yvel": FSM.unitsize * -1.4
            });

            FSM.addThing(spawn, FSM.NumberMaker.random() * FSM.MapScreener.width, FSM.MapScreener.height);

            if (spawn.left < FSM.MapScreener.width / 2) {
                FSM.flipHoriz(spawn);
            } else {
                spawn.xvel *= -1;
            }

            return false;
        }

        /**
         * Generator callback to create a BulleBill. The spawn moves horizontally
         * at a constant rate towards the left side of the bill, and is placed at a
         * random point to the right side of the screen.
         * 
         * @param FSM
         * @returns Whether BulletBill spawning has been cancelled.
         */
        spawnRandomBulletBill(FSM: FullScreenMario): boolean {
            if (!FSM.MapScreener.spawningBulletBills) {
                return true;
            }

            var spawn: IBulletBill = FSM.ObjectMaker.make("BulletBill");
            spawn.direction = 1;
            spawn.moveleft = true;
            spawn.xvel *= -1;
            FSM.flipHoriz(spawn);

            FSM.addThing(
                spawn,
                FSM.MapScreener.width,
                Math.floor(
                    FSM.NumberMaker.randomIntWithin(0, FSM.MapScreener.floor) / 8
                ) * 8 * FSM.unitsize);

            return false;
        }

        /**
         * Spawns a CustomText by killing it and placing the contents of its texts
         * member variable. These are written with a determined amount of spacing
         * between them, as if by a typewriter.
         * 
         * @param thing   A CustomText being spawned.
         */
        spawnCustomText(thing: ICustomText): void {
            var top: number = thing.top,
                texts: ICustomTextInfo[] = thing.texts,
                attributes: any = thing.textAttributes,
                spacingHorizontal: number = thing.spacingHorizontal * thing.FSM.unitsize,
                spacingVertical: number = thing.spacingVertical * thing.FSM.unitsize,
                spacingVerticalBlank: number = thing.spacingVerticalBlank * thing.FSM.unitsize,
                children: IText[] = [],
                textChild: IText,
                left: number,
                text: string,
                letter: string,
                i: number,
                j: number;

            thing.children = children;

            for (i = 0; i < texts.length; i += 1) {
                if (!texts[i]) {
                    top += spacingVerticalBlank;
                    continue;
                }

                text = texts[i].text;

                if (texts[i].offset) {
                    left = thing.left + texts[i].offset * thing.FSM.unitsize;
                } else {
                    left = thing.left;
                }

                for (j = 0; j < text.length; j += 1) {
                    letter = text[j];

                    if (thing.FSM.customTextMappings.hasOwnProperty(letter)) {
                        letter = thing.FSM.customTextMappings[letter];
                    }
                    letter = "Text" + thing.size + letter;

                    textChild = thing.FSM.ObjectMaker.make(letter, attributes);
                    textChild.FSM.addThing(textChild, left, top);
                    children.push(textChild);

                    left += textChild.width * thing.FSM.unitsize;
                    left += spacingHorizontal;
                }
                top += spacingVertical;
            }

            thing.FSM.killNormal(thing);
        }

        /**
         * Spawning callback for generic detectors, activated as soon as they are 
         * placed. The Thing's activate trigger is called, then it is killed.
         * 
         * @param thing   A Detector being spawned.
         */
        spawnDetector(thing: IDetector): void {
            thing.activate(thing);
            thing.FSM.killNormal(thing);
        }

        /**
         * Spawning callback for ScrollBlockers. If the Thing is to the right of 
         * the visible viewframe, it should limit scrolling when triggered.
         * 
         * @param thing   A ScrollBlocker being spawned.
         */
        spawnScrollBlocker(thing: IScrollBlocker): void {
            if (thing.FSM.MapScreener.width < thing.right) {
                thing.setEdge = true;
            }
        }

        /** 
         * Used by Things in a collection to register themselves as a part of their
         * container collection Object. This is called by onThingMake, so they're 
         * immediately put in the collection and have it as a member variable.
         * 
         * @param collection   The collection Object shared by all members.
         * @param thing   A member of the collection being spawned.
         */
        spawnCollectionComponent(collection: any, thing: IThing): void {
            thing.collection = collection;
            collection[thing.collectionName] = thing;
        }

        /**
         * Spawning callback for RandomSpawner Things, which generate a set of 
         * commands using the WorldSeeder to be piped into the AreaSpawnr, then 
         * spawn the immediate area.
         * 
         * @param thing   A RandomSpawner being spawned.
         */
        spawnRandomSpawner(thing: IRandomSpawner): void {
            var FSM: IFullScreenMario = thing.FSM,
                left: number = (thing.left + FSM.MapScreener.left) / FSM.unitsize;

            FSM.WorldSeeder.clearGeneratedCommands();
            FSM.WorldSeeder.generateFull({
                "title": thing.randomization,
                "top": thing.randomTop,
                "right": left + thing.randomWidth,
                "bottom": thing.randomBottom,
                "left": left,
                "width": thing.randomWidth,
                "height": thing.randomTop - thing.randomBottom
            });
            FSM.WorldSeeder.runGeneratedCommands();

            FSM.AreaSpawner.spawnArea(
                "xInc",
                FSM.QuadsKeeper.top / FSM.unitsize,
                FSM.QuadsKeeper.right / FSM.unitsize,
                FSM.QuadsKeeper.bottom / FSM.unitsize,
                FSM.QuadsKeeper.left / FSM.unitsize);
        }
    }
}
