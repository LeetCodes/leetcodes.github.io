declare module FullScreenMario {
    /**
     * A simple container for Map attributes given by switching to an Area within 
     * that map. A bounding box of the current viewport is kept, along with a bag
     * of assorted variable values.
     */
    export interface IMapScreenr extends MapScreenr.IMapScreenr {
        /**
         * The bottom position to spawn infinitely floating platforms to and from.
         */
        bottomPlatformMax: number;

        /**
         * Whether the screen may current scroll horizontally.
         */
        canscroll: boolean;

        /**
         * How far from the top of the screen Floor objects should be placed.
         */
        floor: number;

        /**
         * How much to increase y-velocity of Characters that aren't resting.
         */
        gravity: number;

        /**
         * A modifier to calculate a jumping Player's y-velocity.
         */
        jumpmod: number;

        /**
         * A singleton Lakitu that may be active in-game.
         */
        lakitu?: ILakitu;

        /**
         * The maximum falling y-velocity for a Player.
         */
        maxyvel: number;

        /**
         * The maximum upward velocity for a jumping Player.
         */
        maxyvelinv: number;

        /**
         * Whether user input keys are currently disabled.
         */
        nokeys: boolean;

        /**
         * Whether decreasing game time is currently disabled.
         */
        notime: boolean;

        /**
         * Whether a Castle loop section has been passed.
         */
        sectionPassed?: boolean;

        /**
         * Whether the game screen is currently spawning CheepCheeps.
         */
        spawningCheeps?: boolean;

        /**
         * Whether the game screen is currently spawning BulletBills.
         */
        spawningBulletBills?: boolean;

        /**
         * Whether the current Area is underwater.
         */
        underwater?: boolean;
    }

    /**
     * A Map parsed from its raw JSON-friendly description.
     */
    export interface IMap extends MapsCreatr.IMapsCreatrMap {
        /**
         * The default location for the Map.
         */
        locationDefault?: string;

        /**
         * A starting seed to initialize random number generation.
         */
        seed?: number | number[];

        /**
         * The default starting time.
         */
        time?: number;
    }

    /**
     * An Area parsed from a JSON-friendly Map description.
     */
    export interface IArea extends MapsCreatr.IMapsCreatrArea {
        /**
         * Any additional attributes that should add extra properties to this Area.
         */
        attributes?: {
            [i: string]: any;
        };

        /**
         * A Location to transport to instead of dieing upon falling through the floor.
         */
        exit?: string | number;

        /**
         * The background color to display behind all Things.
         */
        background: string;

        /**
         * A description of the environment, such as "Overworld".
         */
        setting: string;

        /**
         * A callback to initialize the Area background as a function of its setting.
         * 
         * @param area   The Area having its background set.
         */
        setBackground: (area: IArea) => void;

        /**
         * A callback for when a Player runs out of lives.
         * 
         * @param FSM
         */
        onGameOver: (FSM: IFullScreenMario) => void;

        /**
         * How long to wait before calling onGameOver.
         */
        onGameOverTimeout: number;

        /**
         * A callback for when a Player loses a life (dies).
         * 
         * @param FSM
         */
        onPlayerDeath: (FSM: IFullScreenMario) => void;

        /**
         * How long to wait before calling onPlayerDeath.
         */
        onPlayerDeathTimeout: number;

        /**
         * Components of stretchable Castle sections.
         */
        sections?: any[];

        /**
         * A starting time to use instead of the container Map's.
         */
        time?: number;
    }

    /**
     * A Location parsed from a raw JSON-friendly Map description.
     */
    export interface ILocation extends MapsCreatr.IMapsCreatrLocation {
        /**
         * How far this is from the left-most edge of the parent Area.
         */
        xloc: number;

        /**
         * A Thing to snap a Player and xloc to when spawning at this Location.
         */
        entrance?: IThing;
    }

    /**
     * Current status of device motion across all recognized axis.
     */
    export interface IDeviceMotionStatus {
        /**
         * Whether the device is currently moving to the left.
         */
        motionLeft: boolean;

        /**
         * Whether the device is currently moving to the right.
         */
        motionRight: boolean;

        /**
         * The device's current horizontal acceleration.
         */
        x: number;

        /**
         * The device's current vertical acceleration.
         */
        y: number;

        /**
         * How much the vertical acceleration has changed since the last upkeep.
         */
        dy: number;
    }

    /**
     * A position holder around an in-game Thing.
     */
    export interface IPreThing extends MapsCreatr.IPreThing {
        /**
         * The in-game Thing.
         */
        thing: IThing;
    }

    /**
     * An in-game Thing with size, velocity, position, and other information.
     */
    export interface IThing extends GameStartr.IThing {
        /**
         * The parent IFullScreenMario controlling this Thing.
         */
        FSM: IFullScreenMario;

        /**
         * Whether this is currently alive and able to move.
         */
        alive: boolean;

        /**
         * Whether this has been killed.
         */
        dead?: boolean;

        /**
         * Whether this is "flickering" (switching hidden on and off).
         */
        flickering?: boolean;

        /**
         * How many quadrants this is currently a member of.
         */
        numquads: number;

        /**
         * Whether this is allowed to exist outside the Quadrant boundaries, as
         * `true` for when to the right of the delx, or `2` for always.
         */
        outerok: boolean | number;

        /**
         * Whether this is allowed to fall due to gravity.
         */
        nofall?: boolean;

        /**
         * Scratch variable for whether this is allowed to fall due to gravity.
         */
        nofallOld?: boolean;

        /**
         * Whether this is barred from colliding with other Things.
         */
        nocollide?: boolean;

        /**
         * Scratch flag for whether this is barred from colliding with other Things.
         */
        nocollideOld?: boolean;

        /**
         * Scratch storage for the normal Function to move during an upkeep event.
         */
        movementOld?: Function;

        /**
         * Other Things in the same collection as this one.
         */
        partners?: {
            [i: string]: IThing
        };

        /**
         * Whether to shift this to the "beginning" or "end" of its Things group.
         */
        position?: string;

        /**
         * Horizontal tolerance for not colliding with another Thing.
         */
        tolx: number;

        /**
         * Vertical tolerance for not colliding with another Thing.
         */
        toly: number;

        /**
         * Original x-position, copied from the PreThing settings.
         */
        x: number;

        /**
         * Original y-position, copied from the PreThing settings.
         */
        y: number;
    }

    /**
     * An in-game Thing that can float up and down.
     */
    export interface IThingFloating extends IThing {
        /**
         * The beginning y-position of floatation.
         */
        begin: number;

        /**
         * The end y-position of floatation.
         */
        end: number;

        /**
         * The maximum velocity of floatation.
         */
        maxvel: number;
    }

    /**
     * An in-game Thing that can float side to side.
     */
    export interface IThingSliding extends IThing {
        /**
         * The beginning x-position of floatation.
         */
        begin: number;

        /**
         * The end x-position of floatation.
         */
        end: number;

        /**
         * The maximum velocity of floatation.
         */
        maxvel: number;
    }

    /**
     * An in-game Thing wrapping around some number of Text Things.
     */
    export interface ICustomText extends IThing {
        /**
         * Children Text Things spawned as characters.
         */
        children: IText[];

        /**
         * What type of text the children should be, as "", "Colored", "Large", or "Huge".
         */
        size: string;

        /**
         * How much horizontal space to put between children.
         */
        spacingHorizontal: number;

        /**
         * How much vertical space to put between lines of children.
         */
        spacingVertical: number;

        /**
         * How much vertical space to use when a blank line is given.
         */
        spacingVerticalBlank: number;

        /**
         * Any additional attributes to give to children.
         */
        textAttributes?: any;

        /**
         * Raw descriptions of text to display as children Text Things.
         */
        texts: ICustomTextInfo[];
    }

    /**
     * A line of text in a CustomText Thing.
     */
    export interface ICustomTextInfo {
        /**
         * The line of text to display.
         */
        text: string;

        /**
         * How much horizontal offset to put before the line of text.
         */
        offset: number;
    }

    /**
     * A single character of text in a line of characters.
     */
    export interface IText extends IThing {
        /**
         * What type of text this is, as "", "Colored", "Large", or "Huge".
         */
        size: string;
    }

    /**
     * Text title replacements for Text Things.
     */
    export interface ITextMappings {
        [i: string]: string;
    }

    /**
     * A solid Thing that may be rested upon or bumped into.
     */
    export interface ISolid extends IThing {
        /**
         * A callback for when a Player actively runs into this from the left.
         * 
         * @param thing   The Character running into other from the left.
         * @param other   The Solid being run into by thing.
         * @param transport   Other's transport property, if it exists.
         */
        actionLeft?: (thing: ICharacter, other: ISolid, transport?: any) => void;

        /**
         * A callback for when a Player actively attemps to crouch on top of this.
         * 
         * @param thing   The Character crouching on other.
         * @param other   The Solid being crouched on by thing.
         * @param transport   Other's transport property, if it exists.
         */
        actionTop?: (thing: ICharacter, other: ISolid, transport?: any) => void;

        /**
         * A Character holding onto this, such as with a Vine or Flagpole.
         */
        attachedCharacter?: ICharacter;

        /**
         * A callback for when a Player jumps up and hits the bottom of this.
         * 
         * @param thing   The Character bumping into other from the bottom.
         * @param other   The Solid being run into by thing.
         */
        bottomBump?: (thing: ISolid, other: ICharacter) => void;

        /**
         * A callback for when a Character collides with this.
         * 
         * @param thing   The Character colliding into other.
         * @param other   The Solid being collided into by thing.
         */
        collide: (thing: ICharacter, other: ISolid) => void;

        /**
         * Whether this can be collided with while hidden.
         */
        collideHidden?: boolean;

        /**
         * Whether this should be killed when a level is completed, either as a Boolean
         * for true/false or a callback Function to do so.
         */
        killonend?: boolean | { (thing: ISolid, group: ISolid[], i: number): void };

        /**
         * A callback for when a Character starts resting on this.
         * 
         * @param thing   The Character now resting on other.
         * @param other   The Solid being rested on by thing.
         */
        onRestedUpon?: (thing: ISolid, other: ICharacter) => void;

        /**
         * Whether this is a solid (always true for Solids, but not for other Things).
         */
        solid: boolean;

        /**
         * A Map and/or Location transportation description to take a Player to when
         * a transportation action is triggered.
         */
        transport?: any;

        /**
         * A Character that bottom-bumped this Solid into being "up".
         */
        up?: ICharacter;
    }

    /**
     * A Brick Solid.
     */
    export interface IBrick extends ISolid {
        /**
         * Whether this is currently breakable.
         */
        breakable: boolean;

        /**
         * Name of a Thing held inside.
         */
        contents?: string;

        /**
         * Whether this has coins and the last one has been reached.
         */
        lastcoin?: boolean;

        /**
         * Whether this has been used up.
         */
        used: boolean;
    }

    /**
     * A Block Solid.
     */
    export interface IBlock extends ISolid {
        /**
         * Name of a Thing held inside, if not "Coin".
         */
        contents: string;

        /**
         * Whether this has been used up.
         */
        used: boolean;
    }

    /**
     * A Cannon solid.
     */
    export interface ICannon extends ISolid {
        /**
         * How often this should fire a BulletBill.
         */
        frequency: number;

        /**
         * Whether this should never fire a BulletBill.
         */
        noBullets?: boolean;
    }

    /**
     * A CastleAxe Solid.
     */
    export interface ICastleAxe extends ISolid { }

    /**
     * A CastleBlock Solid, which may have a line Fireballs rotating around it.
     */
    export interface ICastleBlock extends ISolid {
        /**
         * What angle the attached line Fireballs are facing.
         */
        angle?: number;

        /**
         * The direction of Fireball spinning, as -1 for counter-clockwise or 1 
         * for clockwise (by default, clockwise).
         */
        direction: number;

        /**
         * How rapidly the Fireballs are rotating (difference in theta).
         */
        dt?: number;

        /**
         * How many Fireballs should extend from this.
         */
        fireballs: number;

        /**
         * How rapidly change the Fireball line's angle, as 7 / Math.abs(speed).
         */
        speed: number;
    }

    /**
     * An activateable detector Solid. After a single activation, it will kill itself.
     */
    export interface IDetector extends ISolid {
        /**
         * Callback for when a Thing activates this.
         * 
         * @param thing   The Thing that activated this.
         */
        activate(thing: IThing): void;
    }

    /**
     * A collision detector Solid for when a Player collides with this.
     */
    export interface IDetectCollision extends IDetector {
        /**
         * A callback for when a non-Player Character collides with this,
         * called from activate instead of Player functionality.
         * 
         * @param thing   The Character activating this detector.
         */
        activateFail?: (thing: ICharacter) => void;

        /**
         * A callback for when a Character collides with this.
         * 
         * @param thing   The Character activating other.
         * @param other   The detector being activated by thing.
         */
        activate: (thing: ICharacter, other?: IDetectCollision) => void;

        /**
         * Whether this should abstain from killing itself after an activation.
         */
        noActivateDeath?: boolean;
    }

    /**
     * A detector that activates itself when it scrolls into view.
     */
    export interface IDetectWindow extends IDetector {
        /**
         * Callback for when this scrolls into view.
         * 
         * @param thing   This window detector.
         */
        activate(thing: IThing): void;
    }

    /**
     * A window detector that decides which looping Castle sub-section to spawn.
     */
    export interface ISectionDetector extends IDetectWindow {
        /**
         * The section whose sub-sections are to be chosen from.
         */
        section: number;
    }

    /**
     * A window detector that spawns a random map section.
     */
    export interface IRandomSpawner extends IDetectWindow {
        /**
         * The name of the possibilities container to spawn from.
         */
        randomization: string;

        /**
         * The top boundary for the randomization area.
         */
        randomTop: number;

        /**
         * The right boundary for the randomization area.
         */
        randomRight: number;

        /**
         * The bottom boundary for the randomization area.
         */
        randomBottom: number;

        /**
         * How wide the randomization area should be.
         */
        randomWidth: number;
    }

    /**
     * A window detector that immediately disables window scrolling.
     */
    export interface IScrollBlocker extends IDetectWindow {
        /**
         * Whether this has more than scrolled into view, and should trigger
         * a reverse scroll to compensate.
         */
        setEdge: boolean;
    }

    /**
     * A Pipe Solid.
     */
    export interface IPipe extends ISolid { }

    /**
     * A Platform Solid that may be floating, sliding, a transport, a falling trigger,
     * or a part of a partner-based Scale.
     */
    export interface IPlatform extends ISolid {
        /**
         * How much this is currently accelerating downward.
         */
        acceleration?: number;

        /**
         * Whether this has gone far enough down to be in a free-fall.
         */
        freefall?: boolean;

        /**
         * The y-velocity to start falling down, if a falling trigger.
         */
        fallThresholdStart?: number;

        /**
         * The maximum velocity achievable when in free fall.
         */
        fallThresholdEnd?: number;

        /**
         * The total y-velocity in this Platform, which is the inverse of
         * a Scale group's partner platform.
         */
        tension?: number;

        /**
         * Partners in a Scale group.
         */
        partners?: {
            /**
             * This Platform's String Scenery.
             */
            ownString: IScenery;

            /**
             * The partner Platform.
             */
            partnerPlatform: IPlatform;

            /**
             * The partner Platform's String Scenery.
             */
            partnerString: IScenery;

            [i: string]: IScenery | IPlatform;
        };
    }

    /**
     * A normally-invisible Solid to catch a respawning Player.
     */
    export interface IRestingStone extends ISolid {
        /**
         * Whether a Player has landed on this.
         */
        activated: boolean;
    }

    /**
     * A bouncy Springboard Solid.
     */
    export interface ISpringboard extends ISolid {
        /**
         * Scratch variable for the normal height of this Springboard.
         */
        heightNormal: number;

        /**
         * How much tension a Player's vertical velocity has added to this.
         */
        tension: number;

        /**
         * Scratch variable for how much tension a Player's vertical velocity has
         * added to this.
         */
        tensionSave?: number;
    }

    /**
     * A Vine Solid.
     */
    export interface IVine extends ISolid {
        /**
         * The Solid this Vine is growing out of.
         */
        attachedSolid: ISolid;

        /**
         * How rapidly this Vine should grow.
         */
        speed: number;
    }

    /**
     * A Character Thing.
     */
    export interface ICharacter extends IThing {
        /**
         * Whether this shouldn't be killed by "up" Solids.
         */
        allowUpSolids?: boolean;

        /**
         * A callback to animate this, such as when emerging from a Solid.
         * 
         * @param thing   The Charater being animated.
         * @param other   An optional Solid used as the animation source.
         */
        animate?: (thing: ICharacter, other?: ISolid) => void;

        /**
         * If this was spawned as a Solid's contents, the spawning Solid.
         */
        blockparent?: ISolid;

        /**
         * Whether this should check for any overlapping Solids.
         */
        checkOverlaps?: boolean;

        /**
         * A callback for when this collides with another Thing.
         * 
         * @param thing   The "primary" (first) Thing colliding.
         * @param other   The "secondary" (second) Thing colliding.
         */
        collide?: (thing: IThing, other: IThing) => void;

        /**
         * Whether this should always be the first Thing in collide arguments.
         */
        collidePrimary?: boolean;

        /**
         * A callback for when this dies.
         * 
         * @param thing   The dieing Thing.
         * @param severity   How severe the death is, as 1 for normal or 2 for instant.
         */
        death: (thing: IThing, severity?: number) => void;

        /**
         * What direction this is facing.
         */
        direction: number;

        /**
         * A callback for when this has finished emerging from a spawning Solid.
         * 
         * @param thing   This Character.
         * @param other   The spawning Solid.
         */
        emergeOut?: (thing: ICharacter, other: ISolid) => void;

        /**
         * How much to increase this Character's y-velocity each upkeep while falling.
         */
        gravity?: number;

        /**
         * How high to jump, if movement is moveJumping.
         */
        jumpheight?: number;

        /**
         * Whether this is currently visually looking to the left.
         */
        lookleft: boolean;

        /**
         * A callback to kill this Character on end, instead of killNormal.
         * 
         * @param thing   The Thing being killed on end.
         */
        killonend?: (thing: IThing) => void;

        /**
         * Whether this is a Player.
         */
        player?: boolean;

        /**
         * Whether this is currently facing to the left (by default, false).
         */
        moveleft: boolean;

        /**
         * Whether this is barred from colliding with other Characters.
         */
        nocollidechar?: boolean;

        /**
         * Whether this is barred from colliding with Player Characters.
         */
        nocollideplayer?: boolean;

        /**
         * Whether this is barred from colliding with Solids.
         */
        nocollidesolid?: boolean;

        /**
         * Whether this is resistant to fire, as 1 for ignoring it and 2 for Fireballs
         * blowing up upon collision.
         */
        nofire?: number;

        /**
         * Whether this has a custom death handler for when hit by a Fireball, such as
         * Koopas spawning shells.
         */
        nofiredeath?: boolean;

        /**
         * Whether this ignores visual horizontal flipping during moveSimple.
         */
        noflip?: boolean;

        /**
         * Whether this should skip being killed upon level completion.
         */
        nokillend?: boolean;

        /**
         * Whether this should ignore its movement Function during upkeeps.
         */
        nomove?: boolean;

        /**
         * A callback for when this is hit by an "up" Solid.
         * 
         * @param thing   This Character.
         * @param other   The "up" Solid hitting this Character.
         */
        onCollideUp?: (thing: ICharacter, other: ISolid) => void;

        /**
         * A callback for when this starts resting on a Solid.
         * 
         * @param thing   This Character.
         * @param other   The Solid now being rested upon.
         */
        onResting?: (thing: ICharacter, other: ISolid) => void;

        /**
         * A callback for when this stops resting on a Solid.
         *
         * @param thing   This Character.
         * @param other   The Solid no longer being rested upon.
         */
        onRestingOff?: (character: ICharacter, other: ISolid) => void;

        /**
         * Any Solids whose bounding boxes overlap this Character's.
         */
        overlaps?: ISolid[];

        /**
         * A Solid this is resting upon.
         */
        resting?: ISolid;

        /**
         * Points given for killing this by hitting an "up" Solid into it.
         */
        scoreBelow: number;

        /**
         * Points given for killing this by shooting a Fireball into it.
         */
        scoreFire: number;

        /**
         * Points given for killing this by running into it using Star power.
         */
        scoreStar: number;

        /**
         * Whether this is a Shell Thing.
         */
        shell?: boolean;

        /**
         * Whether this should spawn another Thing when killed by a moving Shell.
         */
        shellspawn?: boolean;

        /**
         * What type of Shell to spawn when killed.
         */
        shelltype?: string;

        /**
         * Whether this is "smart" (will not walk off cliffs).
         */
        smart?: boolean;

        /**
         * What type of Thing to typically spawn when killed.
         */
        spawnType?: string;

        /**
         * Any additional settings to give to a spawned Thing.
         */
        spawnSettings?: any;

        /**
         * How fast this moves.
         */
        speed: number;

        /**
         * Solids touching this Character's top.
         */
        under?: ISolid[];

        /**
         * A Solid touching this Character's top and above its horizontal center.
         */
        undermid?: ISolid;
    }

    /**
     * A Character that's overlapping with any number of Solids.
     */
    export interface ICharacterOverlapping extends ICharacter {
        /**
         * The horizontal location to check overlaps at.
         */
        overlapCheck: number;

        /**
         * The horizontal goal to slide to for removing overlaps.
         */
        overlapGoal: number;

        /**
         * Whether overlap correction should move this to the right.
         */
        overlapGoRight: boolean;
    }

    /**
     * A falling shard of a Brick.
     */
    export interface IBrickShard extends ICharacter { }

    /**
     * A Castle Fireball.
     */
    export interface ICastleFireball extends ICharacter { }

    /**
     * A malicious enemy Character.
     */
    export interface IEnemy extends ICharacter {
        /**
         * Whether this will kill a Player on contact, even if stepped on.
         */
        deadly?: boolean;

        /**
         * Whether this is an Enemy (true for all Enemy Characters).
         */
        enemy?: boolean;

        /**
         * Whether this ignores collisions with Star power Players.
         */
        nostar?: boolean;

        /**
         * Whether this is a Shell.
         */
        shell?: boolean;
    }

    /**
     * A Blooper Character.
     */
    export interface IBlooper extends IEnemy {
        /**
         * How long this Blooper has been squeezing itself to go down.
         */
        squeeze: number;

        /**
         * A general movement counter for moveBlooper.
         */
        counter: number;
    }

    /**
     * A piece of fire emitted by Bowser's mouth.
     */
    export interface IBowserFire extends IEnemy {
        /**
         * A target y-position to navigate to.
         */
        ylev: number;
    }

    /**
     * A BulletBill Character.
     */
    export interface IBulletBill extends IEnemy { }

    /**
     * A CheepCheep Character
     */
    export interface ICheepCheep extends IEnemy {
        /**
         * Whether this is gracefully flying through the air instead of swimming.
         */
        flying: boolean;
    }

    /**
     * A player-emited Fireball Enemy.
     */
    export interface IFireball extends IEnemy { }

    /**
     * A Goomba Enemy.
     */
    export interface IGoomba extends IEnemy { }

    /**
     * A HammerBro Enemy.
     */
    export interface IHammerBro extends IEnemy {
        /**
         * A general counter for movePacing.
         */
        counter: number;

        /**
         * Whether this is falling down a level.
         */
        falling: boolean;
    }

    /**
     * A Bowser Enemy.
     */
    export interface IBowser extends IHammerBro {
        /**
         * How many times this has been hit with a Player's Fireball.
         */
        deathcount: number;

        /**
         * Delays for shooting BowserFires.
         */
        fireTimes: number[];

        /**
         * Delays for jumping into the air.
         */
        jumpTimes: number[];

        /**
         * Whether this should skip throwing Hammers.
         */
        nothrow: boolean;

        /**
         * How many hammers to throw.
         */
        throwAmount?: number;

        /**
         * How long to delay between throwing Hammers.
         */
        throwBetween?: number;

        /**
         * How long to delay before throwing Hammers.
         */
        throwDelay?: number;

        /**
         * How many hammers to throw each cycle.
         */
        throwPeriod?: number;

        /**
         * Whether this is currently throwing Hammers.
         */
        throwing: boolean;
    }

    /**
     * A Koopa Enemy.
     */
    export interface IKoopa extends IEnemy {
        /**
         * Whether this is currently floating through the air.
         */
        floating: boolean;

        /**
         * Whether this is currently flapping wings to jump around.
         */
        jumping: boolean;
    }

    /**
     * A Lakitu Enemy.
     */
    export interface ILakitu extends IEnemy {
        /**
         * A standard counter for movePacing.
         */
        counter: number;

        /**
         * Whether this is fleeing to the left edge of the screen.
         */
        fleeing?: boolean;
    }

    /**
     * A Piranha enemy.
     */
    export interface IPiranha extends IEnemy {
        /**
         * A standard counter for movePiranha.
         */
        counter: number;

        /**
         * How long to wait before switching direction after a pause.
         */
        countermax: number;

        /**
         * What direction this is currently facing, as 1 (up) or -1 (down).
         */
        direction: number;

        /**
         * Whether this was spawned as part of a Pipe.
         */
        onPipe: boolean;
    }

    /**
     * A Podoboo Enemy.
     */
    export interface IPodoboo extends IEnemy {
        /**
         * How often this should jump.
         */
        frequency: number;

        /**
         * How high this should jump.
         */
        jumpHeight: number;

        /**
         * The recorded starting y-location.
         */
        starty: number;
    }

    /**
     * A SpinyEgg Enemy.
     */
    export interface ISpinyEgg extends IEnemy { }

    /**
     * A Spiny Enemy hatched from a SpinyEgg.
     */
    export interface ISpiny extends IEnemy { }

    /**
     * An item Players may interact with, such as power-ups.
     */
    export interface IItem extends ICharacter {
        /**
         * A callback for when a Player interacts with this item.
         * 
         * @param thing   A Player that just triggered this Item.
         * @param other   This Item being triggered.
         */
        action?: (thing: IPlayer, other: IItem) => void;

        /**
         * Whether this is an Item (always true for Items).
         */
        item?: boolean;
    }

    /**
     * A Coin Item that gives a Player a point when touched.
     */
    export interface ICoin extends IItem {
        /**
         * Animation callback for when this is bumped by a Solid.
         *
         * @param thing   The Soin being bumped by other.
         * @param other   The Solid bumping thing.
         */
        animate(thing: ICoin, other: ISolid): void;
    }

    /**
     * A Shell that may be kicked by a Player into Characters.
     */
    export interface IShell extends IItem {
        /**
         * A counter for when this will turn back into its source Enemy.
         */
        counting: number;

        /**
         * How many Enemies this has killed.
         */
        enemyhitcount: number;

        /**
         * How many times a Player has hit this.
         */
        hitcount: number;

        /**
         * Whether a Player is currently landing on this.
         */
        landing: number;

        /**
         * Whether this is about to turn back into its source Enemy.
         */
        peeking: number;

        /**
         * When colliding with another Shell, whether this is to the left.
         */
        shelltoleft: boolean;

        /**
         * Whether this comes from a "smart" Koopa.
         */
        smart?: boolean;

        /**
         * Settings to pass onto an Enemy if turned back into one.
         */
        spawnSettings?: {
            /**
             * Whether this comes from a "smart" Koopa.
             */
            smart?: boolean;
        };
    }

    /**
     * A Star Item that grants a Player temporary invincibility.
     */
    export interface IStar extends IItem {
        /**
         * Whether this is a star (useful for collision checks).
         */
        star: boolean;
    }

    /**
     * A user-controlled Player Character.
     */
    export interface IPlayer extends ICharacter {
        /**
         * Whether this is currently climbing a Solid.
         */
        animatedClimbing?: boolean;

        /**
         * What direction an attached Solid is, as -1 (left) or 1 (right).
         */
        attachedDirection?: number;

        /**
         * Whether this is to the left of a colliding climbable Solid.
         */
        attachedLeft?: boolean;

        /**
         * A Solid this is climbing.
         */
        attachedSolid?: ISolid;

        /**
         * How far this must be from an attached Solid to remove itself.
         */
        attachedOff?: number;

        /**
         * Whether this is currently allowed to jump.
         */
        canjump?: boolean;

        /**
         * Whether this is currently climbing a Solid.
         */
        climbing?: boolean;

        /**
         * Whether this is currently crouching.
         */
        crouching: boolean;

        /**
         * Whether this was just killed and is now dieing.
         */
        dieing?: boolean;

        /**
         * A callback for when this Player shoots a Fireball.
         * 
         * @param player   The Player shooting a Fireball.
         */
        fire: (player: IPlayer) => void;

        /**
         * Retrieval Function for a new user keys description.
         * 
         * @returns A new descriptor Object for a user's keys.
         */
        getKeys: () => IPlayerKeys;

        /**
         * Whether this is currently hopping on an enemy.
         */
        hopping?: boolean;

        /**
         * How many enemies this has jumped on without touching a Solid.
         */
        jumpcount: number;

        /**
         * How many simultaneous enemies this is currently jumping on.
         */
        jumpers?: number;

        /**
         * Whether this is currently jumping through the air.
         */
        jumping?: boolean;

        /**
         * A descriptor for a user's key's statuses.
         */
        keys: IPlayerKeys;

        /**
         * A maximum speed for this Player to run.
         */
        maxspeed: number;

        /**
         * Scratch variable to store maxspeed.
         */
        maxspeedsave?: number;

        /**
         * How many Fireballs this Player has dropped.
         */
        numballs: number;

        /**
         * Whether this is currently paddling through water.
         */
        paddling?: boolean;

        /**
         * Whether this currently has an animation cycle for paddling.
         */
        paddlingCycle?: boolean;

        /**
         * Whether this is currently moving into or out of a Pipe.
         */
        piping?: boolean;

        /**
         * How strong this is, as 1 (normal), 2 (big), or 3 (fiery).
         */
        power: number;

        /**
         * Whether this is currently running.
         */
        running: boolean;

        /**
         * A maximum scrolling speed for a window.
         */
        scrollspeed: number;

        /**
         * Whether this is currently skidding visually.
         */
        skidding?: boolean;

        /**
         * Whether this is increasing in power due to a Mushroom.
         */
        shrooming?: boolean;

        /**
         * An attached SpringBoard being jumped on.
         */
        spring?: ISpringboard;

        /**
         * A counter of how many Star power-ups this has collected that
         * are still active.
         */
        star: number;

        /**
         * Whether this is currently swimming, and possible paddling.
         */
        swimming?: boolean;

        /**
         * Scratch variable for tolx.
         */
        tolxOld?: number;

        /**
         * Scratch variable for toly.
         */
        tolyOld?: number;

        /**
         * Maximum speed to walk at during cutscenes.
         */
        walkspeed: number;
    }

    /**
     * A descriptor for a user's keys' statuses.
     */
    export interface IPlayerKeys {
        /**
         * Whether the user is indicating a crouch.
         */
        crouch: boolean;

        /**
         * Whether the user is indicating a jump.
         */
        jump: boolean;

        /**
         * How strongly the user is indicating a jump.
         */
        jumplev: number;

        /**
         * Whether the left key is being pressed.
         */
        leftDown?: boolean;

        /**
         * Whether the right key is being pressed.
         */
        rightDown?: boolean;

        /**
         * Whether either the left or right keys are being pressed.
         */
        run: number;

        /**
         * Whether the sprint key is being pressed.
         */
        sprint: boolean;

        /**
         * Whether the up key is being pressed.
         */
        up: boolean;
    }

    /**
     * A decorative Scenery Thing.
     */
    export interface IScenery extends IThing { }

    /**
     * A Firework Scenery that may animate an explosion.
     */
    export interface IFirework extends IScenery {
        /**
         * Animates an explosion of the Firework.
         * 
         * @param thing   The exploding Firework.
         */
        animate(thing: IFirework): void;
    }

    /**
     * General-purpose settings for macros.
     */
    export interface IMacroSettings {
        /**
         * The x-location (by default, 0).
         */
        x?: number;

        /**
         * The y-location (by default, 0).
         */
        y?: number;

        [i: string]: any;
    }

    /**
     * Settings for a FillPreThings macro.
     */
    export interface IMacroFillPreThingsSettings extends IMacroSettings {
        /**
         * The name of the Thing to fill, such as "Brick".
         */
        thing: string;

        /**
         * How many times to repeat the Thing horizontally to the
         * right (by default, 1).
         */
        xnum?: number;

        /**
         * How many times to repeat the Thing vertically upwards
         * (by default, 1).
         */
        ynum?: number;

        /**
         * How many units are between the left edges of placed
         * Things horizontally (by default, 0).
         */
        xwidth?: number;

        /**
         * How many units are between the top edges of placed
         * Things vertically (by default, 0).
         */
        yheight?: number;
    }

    /**
     * Settings for a FillPrePattern macro.
     */
    export interface IMacroFillPrePatternSettings extends IMacroSettings {
        /**
         * The name of the pattern to print, from the listing in
         * FSM.settings.maps.patterns.
         */
        pattern: string;

        /**
         * How many times to repeat the overall pattern (by 
         * default, 1).
         */
        repeat?: number;

        /**
         * Numbered items to skip, if any.
         */
        skips?: number[];
    }

    /**
     * Settings for a Floor macro.
     */
    export interface IMacroFloorSettings extends IMacroSettings {
        /**
         * How wide the Floor should be (by default, 8).
         */
        width?: number;
    }

    /**
     * Settings for a Pipe macro.
     */
    export interface IMacroPipeSettings extends IMacroSettings {
        /**
         * How high the Pipe should be, as a Number or "Infinity"
         * (by default, 8).
         */
        height?: number | string;

        /**
         * Whether there should be a Piranha spawning with the
         * Pipe (by default, false).
         */
        piranha?: boolean;

        /**
         * What location the Pipe should transport to (by default,
         * none).
         */
        transport?: any;

        /**
         * What location the Pipe should act as an entrance to (by
         * default, none).
         */
        entrance?: any;
    }

    /**
     * Settings for a PipeCorner macro.
     */
    export interface IMacroPipeCornerSettings extends IMacroSettings {
        /**
         * How high the Pipe should be (by default, 8).
         */
        height: number;

        /**
         * What location the Pipe should transport to (by default,
         * none).
         */
        transport?: any;

        /**
         * Whether there should be a ScrollEnabler placed on top of
         * the PipeVertical (by default, false).
         */
        scrollEnabler?: boolean;

        /**
         * Whether there should be a ScrollBlocker placed on top of
         * the PipeVertical (by default, false).
         */
        scrollBlocker?: boolean;
    }

    /**
     * Settings for a Tree macro.
     */
    export interface IMacroTreeSettings extends IMacroSettings {
        /**
         * How wide the Tree should be (preferably a multiple of 8).
         */
        width: number;

        /**
         * Whether the trunk scenery should be listed in the Solids
         * group instead of Scenery, to keep it in front of clouds
         * (by default, false).
         */
        solidTrunk?: boolean;
    }

    /**
     * Settings for a Shroom macro.
     */
    export interface IMacroShroomSettings extends IMacroSettings {
        /**
         * How wide the Shroom should be (preferably a multiple of 8).
         */
        width: number;

        /**
         * Whether the trunk scenery should be listed in the Solids
         * group instead of Scenery, to keep it in front of clouds
         * (by default, false).
         */
        solidTrunk?: boolean;
    }

    /**
     * Settings for a Water macro.
     */
    export interface IMacroWaterSettings extends IMacroSettings {
        /**
         * How wide the Water should be.
         */
        width: number;
    }

    /**
     * Settings for a Ceiling macro.
     */
    export interface IMacroCeilingSettings extends IMacroSettings {
        /**
         * How wide the ceiling should be.
         */
        width: number;
    }

    /**
     * Settings for a Bridge macro.
     */
    export interface IMacroBridgeSettings extends IMacroSettings {
        /**
         * How wide the bridge should be (by default, 16).
         */
        width?: number;

        /**
         * Whether the first 8 units should be taken up by an infinitely
         * high Stone column (by default, false).
         */
        begin?: boolean;

        /**
         * Whether the last 8 units should be taken up by an infinitely
         * high Stone column (by default, false).
         */
        end?: boolean;
    }

    /**
     *
     */
    export interface IMacroScaleSettings extends IMacroSettings {
        /**
         * How wide the left Platform should be (by default, 24).
         */
        widthLeft?: number;

        /**
         * How wide the right Platform should be (by default, 24).
         */
        widthRight?: number;

        /**
         * How much space there should be between Platforms (by
         * default, 40).
         */
        between?: number;

        /**
         * How far down from y the left Platform should start (by
         * default, 24).
         */
        dropLeft?: number;

        /**
         * How far down from y the right Platform should start (by
         * default, 24).
         */
        dropRight?: number;
    }

    /**
     * Settings for a PlatformGenerator macro.
     */
    export interface IMacroPlatformGeneratorSettings extends IMacroSettings {
        /**
         * What direction to travel, as -1 for up or 1 for down (by 
         * default, 1).
         */
        direction?: number;

        /**
         * How wide the Platforms should be (by default, 16).
         */
        width?: number;
    }

    /**
     * Settings for a WarpWorld macro.
     */
    export interface IMacroWarpWorldSettings extends IMacroSettings {
        /**
         * Names of maps the Pipes should warp to, in order.
         */
        warps: string[];

        /**
         * How far above the Piranhas to place the CustomText labels
         * (by default, 8).
         */
        textHeight?: number;
    }

    /**
     * Settings for a CheepsStart macro.
     */
    export interface IMacroCheepsStartSettings extends IMacroSettings {
        /**
         * How wide the detector should be (by default, 8).
         */
        width?: number;
    }

    /**
     * Settings for a CheepsStop macro.
     */
    export interface IMacroCheepsStopSettings extends IMacroSettings {
        /**
         * How wide the detector should be (by default, 8).
         */
        width?: number;
    }

    /**
     * Settings for a BulletBillsStart macro.
     */
    export interface IMacroBulletBillsStartSettings extends IMacroSettings {
        /**
         * How wide the detector should be (by default, 8).
         */
        width?: number;
    }

    /**
     * Settings for a BulletBillsStop macro.
     */
    export interface IMacroBulletBillsStopSettings extends IMacroSettings {
        /**
         * How wide the detector should be (by default, 8).
         */
        width?: number;
    }

    /**
     * Settings for a LakituStop macro.
     */
    export interface IMacroLakituStopSettings extends IMacroSettings {
        /**
         * How wide the detector should be (by default, 8).
         */
        width?: number;
    }

    /**
     * Settings for a CastleSmall or CastleLarge macro.
     */
    export interface IMacroCastleSettings extends IMacroSettings {
        /**
         * What map or location to shift to after ending theatrics.
         */
        transport: any;

        /**
         * How many CastleWalls should be placed to the right of the castle
         * (by default, 2).
         */
        walls?: number;
    }

    /**
     * Settings for a StartInsideCastle macro.
     */
    export interface IMacroStartInsideCastleSettings extends IMacroSettings {
        /**
         * How wide the starting zone should be (by default, 40).
         */
        width?: number;
    }

    /**
     * Settings for an EndOutsideCastle macro.
     */
    export interface IMacroEndOutsideCastleSettings extends IMacroSettings {
        /**
         * Where to transport to after ending theatrics.
         */
        transport: any;

        /**
         * Whether this should place a large castle instead of a small
         * (by default, false).
         */
        large?: boolean;

        /**
         * How far from the flagpole to the castle (by default, 24 for large
         * castles and 32 for small).
         */
        castleDistance?: number;

        /**
         * For large castles, how many CastleWall Things should be placed
         * after (by default, 2).
         */
        walls?: number;
    }

    /**
     *
     */
    export interface IMacroEndInsideCastleSettings extends IMacroSettings {
        /**
         * Where to transport to after ending theatrics.
         */
        transport: any;

        /**
         * Which NPC to use, as "Toach" or "Peach" (by default, "Toad").
         */
        npc?: string;

        /**
         * Whether Bowser should be in "hard" mode (by default, false).
         */
        hard?: boolean;

        /**
         * What Bowser's spawnType should be (by default, "Goomba").
         */
        spawnType?: string;

        /**
         * Whether Bowser is also throwing hammers (by default, false).
         */
        throwing?: boolean;

        /**
         * Whether a ScrollEnabler should be added above (by default, false).
         */
        topScrollEnabler?: boolean;
    }

    /**
     * Settings for a SectionPass macro.
     */
    export interface IMacroSectionPassSettings extends IMacroSettings {
        /**
         * How wide the detector should be (by default, 8).
         */
        width?: number;

        /**
         * How high the detector should be (by default, 8).
         */
        height?: number;
    }

    /**
     * Settings for a SectionFail macro.
     */
    export interface IMacroSectionFailSettings extends IMacroSettings {
        /**
         * How wide the detector should be (by default, 8).
         */
        width?: number;

        /**
         * How high the detector should be (by default, 8).
         */
        height?: number;
    }

    /**
     * Settings for a SectionDecider macro.
     */
    export interface IMacroSectionDeciderSettings extends IMacroSettings {
        /**
         * Which section to spawn if passed (by default, 0).
         */
        pass?: number;

        /**
         * Which section to spawn if failed (by default, 0).
         */
        fail?: number;
    }

    /**
     * Settings for a Section macro.
     */
    export interface IMacroSectionSettings extends IMacroSettings {
        /**
         * Which of the Area's sections to spawn (by default, 0).
         */
        section?: number;
    }

    /**
     * Settings regarding maps, particularly for AreaSpawnr, MapScreenr,
     * and MapsCreatr.
     */
    export interface IMapCustoms extends GameStartr.IMapCustoms {
        /**
         * Named patterns of Things and positions.
         */
        patterns: {
            [i: string]: [string, number, number];
        };
    }

    /**
     * Stored settings to be stored separately and kept within FullScreenMario.
     */
    export interface IFullScreenMarioStoredSettings extends GameStartr.IGameStartrStoredSettings {
        /**
         * Settings regarding maps, particularly for an IAreaSpawnr, an
         * IMapScreenr, and an IMapsCreatr.
         */
        maps: IMapCustoms;
    }

    /**
     * A free HTML5 remake of Nintendo's original Super Mario Bros, expanded for the
     * modern web. It includes the original 32 levels, a random map generator, a 
     * level editor, and over a dozen custom mods.
     */
    export interface IFullScreenMario extends GameStartr.IGameStartr {
        /**
         * Overriden MapScreenr refers to the IMapScreenr defined in IFullScreenMario.d.ts.
         */
        MapScreener: IMapScreenr;

        /**
         * Stored settings to be stored separately and kept within a GameStartr.
         */
        settings: IFullScreenMarioStoredSettings;

        /**
         * How much to expand each pixel from raw sizing measurements to in-game.
         */
        unitsize: number;

        /**
         * Levels of points to award for hopping on / shelling enemies.
         */
        pointLevels: number[];

        /**
         * Storage for activation Functions.
         */
        activations: Activations;

        /**
         * Storage for animation Functions.
         */
        animations: Animations;

        /**
         * Storage for collision Functions.
         */
        collisions: Collisions;

        /**
         * Storage for custcene Functions.
         */
        cutscenes: Cutscenes;

        /**
         * Storage for death Functions.
         */
        deaths: Deaths;

        /**
         * Storage for input Functions.
         */
        inputs: Inputs;

        /**
         * Storage for macro Functions.
         */
        macros: Macros;

        /**
         * Storage for maintenance Functions.
         */
        maintenance: Maintenance;

        /**
         * Storage for movement Functions.
         */
        movements: Movements;

        /**
         * Storage for physics Functions.
         */
        physics: Physics;

        /**
         * Storage for scoring Functions.
         */
        scoring: Scoring;

        /**
         * Storage for spawn Functions.
         */
        spawns: Spawns;

        /**
         * Storage for transport Functions.
         */
        transports: Transports;

        /**
         * Useful for custom text Things, where "text!" cannot be a Function name.
         */
        customTextMappings: ITextMappings;

        /**
         * The game's player, which (when defined) will always be a Player Thing.
         */
        player: IPlayer;

        /**
         * Container for device motion information, used by this.deviceMotion.
         */
        deviceMotionStatus: IDeviceMotionStatus;

        /**
         * Sets this.ObjectMaker.
         *
         * Because many Thing functions require access to other FSM modules, each is
         * given a reference to this container FSM via properties.thing.GameStarter.
         *
         * @param FSM
         * @param customs   Any optional custom settings.
         */
        resetObjectMaker(FSM: IFullScreenMario, settings: GameStartr.IGameStartrSettings): void;

        /**
         * Sets this.AudioPlayer.
         *
         * @param FSM
         * @param customs   Any optional custom settings.
         */
        resetAudioPlayer(FSM: IFullScreenMario, settings: GameStartr.IGameStartrSettings): void;

        /**
         * Sets this.AreaSpawner.
         *
         * @param FSM
         * @param customs   Any optional custom settings.
         */
        resetAreaSpawner(FSM: IFullScreenMario, settings: GameStartr.IGameStartrSettings): void;

        /**
         * Resets this.ItemsHolder via the parent GameStartr resetItemsHolder.
         *
         * If the screen isn't wide enough to fit the "lives" display, it's hidden.
         *
         * @param FSM
         * @param customs   Any optional custom settings.
         */
        resetItemsHolder(FSM: IFullScreenMario, settings: GameStartr.IGameStartrSettings): void;

        /**
         * Sets this.MathDecider, using its existing MapScreenr as its constants.
         *
         * @param FSM
         * @param customs   Any optional custom settings.
         */
        resetMathDecider(FSM: IFullScreenMario, customs: GameStartr.IMathDecidrCustoms): void;

        /**
         * Sets this.container via the parent GameStartr resetContaienr.
         *
         * The container is given the "Press Start" font, the PixelRender is told
         * to draw the scenery, solid, character, and text groups, and the container
         * width is set to the custom's width.
         *
         * @param FSM
         * @param customs   Any optional custom settings.
         */
        resetContainer(FSM: IFullScreenMario, settings: GameStartr.IGameStartrSettings): void;

        /**
         * Completely restarts the game. Lives are reset to 3, the map goes back
         * to default, and the onGameStart mod trigger is fired.
         */
        gameStart(): void;

        /**
         * Completely ends the game. All Thing groups are clared, sounds are
         * stopped, the screen goes to black, "GAME OVER" is displayed. After a
         * while, the game restarts again via gameStart.
         */
        gameOver(): void;

        /**
         * Slight addition to the GameStartr thingProcess Function. The Thing's hit
         * check type is cached immediately.
         *
         * @param thing   The Thing being processed.
         * @param title   What type Thing this is (the name of the class).
         * @param settings   Additional settings to be given to the Thing.
         * @param defaults   The default settings for the Thing's class.
         * @remarks This is generally called as the onMake call in an ObjectMakr.
         */
        thingProcess(thing: IThing, title: string, settings: any, defaults: any): void;

        /**
         * Generates a key for a Thing based off the current area and the Thing's
         * basic attributes. This should be used for PixelRender.get calls, to
         * cache the Thing's sprite.
         * 
         * @param thing
         * @returns A key that to identify the Thing's sprite.
         */
        generateThingKey(thing: IThing): string;

        /**
         * Adds a Thing via addPreThing based on the specifications in a PreThing.
         * This is done relative to MapScreener.left and MapScreener.floor.
         *
         * @param prething   A PreThing whose Thing is to be added to the game.
         */
        addPreThing(prething: IPreThing): void;

        /**
         * Adds a new Player Thing to the game and sets it as EightBitter.play. Any
         * required additional settings (namely keys, power/size, and swimming) are
         * applied here.
         *
         * @param left   A left edge to place the Thing at (by default, unitsize * 16).
         * @param bottom   A bottom to place the Thing upon (by default, unitsize * 16).
         * @returns A newly created Player in the game.
         */
        addPlayer(left?: number, bottom?: number): IPlayer;

        /**
         * Shortcut to call scrollThing on a Player.
         *
         * @param dx   How far to scroll horizontally.
         * @param dy   How far to scroll vertically.
         */
        scrollPlayer(dx: number, dy?: number): void;

        /**
         * Triggered Function for when the game is paused. Music stops, the pause
         * bleep is played, and the mod event is fired.
         *
         * @param FSM
         */
        onGamePause(FSM: IFullScreenMario): void;

        /**
         * Triggered Function for when the game is played or unpause. Music resumes
         * and the mod event is fired.
         *
         * @param FSM
         */
        onGamePlay(FSM: IFullScreenMario): void;

        /**
         * Externally facing Function to gain some number of lives. ItemsHolder
         * increases the "score" statistic, an audio is played, and the mod event is
         * fired.
         *
         * @param amount   How many lives to gain (by default, 1).
         * @param nosound   Whether the sound should be skipped (by default,
         *                  false).
         */
        gainLife(amount: number, nosound?: boolean): void;

        /**
         * Basic Function for an item to jump slightly into the air, such as from
         * a Player hitting a solid below it.
         *
         * @param thing   An item.
         * @remarks This simply moves the thing up slightly and decreases its
         *          y-velocity, without considering x-direction.
         */
        itemJump(thing: IItem): void;

        /**
         * Generic Function for when a Player jumps on top of an enemy. The enemy
         * is killed, a Player's velocity points upward, and score is gained.
         *
         * @param thing   A Player jumping on other.
         * @param other   An Enemy being jumped upon.
         */
        jumpEnemy(thing: IPlayer, other: IEnemy): void;

        /**
         * Callback for a Player hitting a Mushroom or FireFlower. A player's
         * power and the ItemsHolder's "power" statistic both go up, and the
         * corresponding animations and mod event are triggered.
         *
         * @param thing   A Player powering up.
         * @param other   A Mushroom powering up hte Player.
         */
        playerShroom(thing: IPlayer, other: IItem): void;

        /**
         * Callback for a Player hitting a Mushroom1Up. The game simply calls
         * gainLife and triggers the mod event.
         *
         * @param thing   A Player gaining a life.
         * @param other   The Mushroom1Up giving the life.
         */
        playerShroom1Up(thing: ICharacter, other: IItem): void;

        /**
         * Callback for a Player hitting a Star. A set of animation loops and
         * sounds play, and the mod event is triggered. After some long period time,
         * playerStarDown is called to start the process of removing star power.
         *
         * @param thing   A Player gaining star powers.
         * @param timeout   How long to wait before calling playerStarDown
         *                  (by default, 560).
         */
        playerStarUp(thing: IPlayer, timeout?: number): void;

        /**
         * Trigger to commence reducing a Player's star power. This slows the
         * class cycle, times a playerStarOffCycle trigger, and fires the mod event.
         *
         * @param thing   A Player losing star powers.
         */
        playerStarDown(thing: IPlayer): void;

        /**
         * Trigger to continue reducing a Player's star power. This resumes
         * playing the regular theme, times a playerStarOffFinal trigger, and fires
         * the mod event.
         *
         * @param thing   A Player losing star powers.
         */
        playerStarOffCycle(thing: IPlayer): void;

        /**
         * Trigger to finish reducing a Player's star power. This actually reduces
         * a Player's star attribute, cancels the sprite cycle, adds the previous
         * classes back, and fires the mod event.
         *
         * @param thing   A Player losing star powers.
         */
        playerStarOffFinal(thing: IPlayer): void;

        /**
         * Sizing modifier for a Player, typically called when entering a location
         * or colliding with a Mushroom. This sets a Player's size to the large
         * mode and optionally plays the animation. The mod event is then fired.
         *
         * @param thing   A Player increasing in size.
         * @param noAnimation   Whether to skip the animation (by default,
         *                      false).
         */
        playerGetsBig(thing: IPlayer, noAnimation?: boolean): void;

        /**
         * Animation scheduler for a Player getting big. The shrooming classes are
         * cycled through rapidly while a Player's velocity is paused.
         *
         * @param thing   A Player increasing in size.
         */
        playerGetsBigAnimation(thing: IPlayer): void;

        /**
         * Sizing modifier for a Player, typically called when going down to
         * normal size after being large. This containst eha nimation scheduling
         * to cycle through paddling classes, then flickers a Player. The mod
         * event is fired.
         *
         * @param thing   A Player decreasing in size.
         */
        playerGetsSmall(thing: IPlayer): void;

        /**
         * Visual changer for when a Player collides with a FireFlower. The
         * "fiery" class is added, and the mod event is fired.
         *
         * @param thing   A Player gaining fire powers.
         */
        playerGetsFire(thing: IPlayer): void;

        /**
         * Actually sets the size for a player to small (8x8) via setSize and
         * updateSize.
         *
         * @param thing   A Player decreasing in size.
         */
        setPlayerSizeSmall(thing: IPlayer): void;

        /**
         * Actually sets the size for a player to large (8x16) via setSize and
         * updateSize.
         *
         * @param thing   A Player increasing in size.
         */
        setPlayerSizeLarge(thing: IPlayer): void;

        /**
         * Officially unattaches a player from a solid. The thing's physics flags
         * are reset to normal, the two have their attachment flags set, and the
         * thing is set to be jumping off.
         *
         * @param thing   A Player attached to other.
         * @param other   A Solid thing is attached to.
         */
        unattachPlayer(thing: IPlayer, other: ISolid): void;

        /**
         * Adds an invisible RestingStone underneath a Player. It is hidden and
         * unable to collide until a Player falls to its level, at which point the
         * stone is set underneath a Player to be rested upon.
         *
         * @param thing   A Player respawning into the game.
         */
        playerAddRestingStone(thing: IPlayer): void;

        /**
         * Marks a new overlapping Thing in the first Thing's overlaps Array,
         * creating the Array if needed.
         *
         * @param thing   The Thing that is overlapping another Thing.
         * @param other   The Thing being added to the overlaps Array.
         */
        markOverlap(thing: ICharacterOverlapping, other: ISolid): void;

        /**
         * Activation callback for starting spawnRandomCheep on an interval.
         * MapScreener is notified that spawningCheeps is true.
         *
         * @param thing   A Detector activated to start spawning CheepCheeps.
         */
        activateCheepsStart(thing: IDetector): void;

        /**
         * Activation callback to stop spawning CheepCheeps. MapScreener is notified
         * that spawningCheeps is false.
         *
         * @param thing   A Detector activated to stop spawning CheepCheeps.
         */
        activateCheepsStop(thing: IDetector): void;

        /**
         * Activation callback for starting spawnRandomBulletBill on an interval.
         * MapScreener is notified that spawningBulletBills is true.
         *
         * @param thing   A Detector activated to start spawning BulletBills.
         */
        activateBulletBillsStart(thing: IDetector): void;

        /**
         * Activation callback to stop spawning BulletBills. MapScreener is notified
         * that spawningBulletBills is false.
         *
         * @param thing   A Detector activated to stop spawning BulletBills.
         */
        activateBulletBillsStop(thing: IDetector): void;

        /**
         * Activation callback to tell the area's Lakitu, if it exists, to start
         * fleeing the scene.
         *
         * @param thing   A Detector activated to make the Lakitu flee.
         */
        activateLakituStop(thing: IDetector): void;

        /**
         * Activation callback for a warp world area, triggered by a Player
         * touching a collider on top of it. Piranhas disappear and texts are
         * revealed.
         *
         * @param thing   A Player activating the warp world.
         * @param other   A Detector triggered by thing to activate a warp world.
         */
        activateWarpWorld(thing: ICharacter, other: IDetectCollision): void;

        /**
         * Activation callback for when a Player lands on a RestingStone. The
         * stone "appears" (via opacity), the regular theme plays if it wasn't
         * already, and the RestingStone waits to kill itself when a Player isn't
         * touching it.
         *
         * @param thing   A RestingStone being landed on.
         * @param other   A Player landing on thing.
         */
        activateRestingStone(thing: IRestingStone, other: IPlayer): void;

        /**
         * Generic activation callback for DetectWindow Things. This is typically
         * set as a .movement Function, so it waits until the calling Thing is
         * within the MapScreener's area to call the activate Function and kill
         * itself.
         *
         * @param thing   A DetectWindow that might be activated.
         */
        activateWindowDetector(thing: IDetectWindow): void;

        /**
         * Activation callback for ScrollBlocker Things. These are WindowDetectors
         * that set MapScreener.canscroll to false when they're triggered. If the
         * latest scrollWindow call pushed it too far to the left, it scrolls back
         * the other way.
         *
         * @param thing   A ScrollBlocker that might be activated.
         */
        activateScrollBlocker(thing: IScrollBlocker): void;

        /**
         * Activation callback for ScrollBlocker Things. These are DetectCollision
         * that set MapScreener.canscroll to true when they're triggered.
         *
         * @param thing   An activated ScrollEnabler.
         */
        activateScrollEnabler(thing: IDetectCollision): void;

        /**
         * Activates the "before" component of a stretchable section. The creation
         * commands of the section are loaded onto the screen as is and a
         * DetectWindow is added to their immediate right that will trigger the
         * equivalent activateSectionStretch.
         *
         * @param thing   An activated SectionDecider.
         */
        activateSectionBefore(thing: ISectionDetector): void;

        /**
         * Activates the "stretch" component of a stretchable section. The creation
         * commands of the section are loaded onto the screen and have their widths
         * set to take up the entire width of the screen. A DetectWindow is added
         * to their immediate right that will trigger the equivalent
         * activateSectionAfter.
         *
         * @param thing   An activated SectionDetector.
         */
        activateSectionStretch(thing: ISectionDetector): void;

        /**
         * Activates the "after" component of a stretchable sectin. The creation
         * commands of the stretch are loaded onto the screen as is.
         *
         * @param thing   An activated SectioNDetector.
         */
        activateSectionAfter(thing: ISectionDetector): void;

        /**
         * Makes one Thing look towards another, chainging lookleft and moveleft in
         * the process.
         *
         * @param thing   A Character looking towards other.
         * @param other   A Thing being looked at by thing.
         */
        lookTowardsThing(thing: ICharacter, other: IThing): void;

        /**
         * Makes one Thing look towards a Player, chainging lookleft and moveleft
         * in the process.
         *
         * @param thing   A Character looking towards the Player.
         * @param big   Whether to always change lookleft and moveleft,
         *              even if lookleft is already accurate (by
         *              default, false).
         */
        lookTowardsPlayer(thing: ICharacter, big?: boolean): void;

        /**
         * Determines how loud a sound should be at an x-location. This
         * is louder closer to a Player, and nothing to the right of the
         * visible screen.
         *
         * @param FSM
         * @param xloc   The x-location of the sound's source.
         * @returns How loud the sound should be, in [0,1].
         */
        getVolumeLocal(FSM: IFullScreenMario, xloc: number): number;

        /**
         * Determines the name of the default theme for the current area,
         * which is the first word in the area's setting (split on spaces).
         *
         * @param FSM
         * @returns The default theme for the current area.
         */
        getAudioThemeDefault(FSM: IFullScreenMario): string;

        /**
         * Sets the game state to a new map, resetting all Things and inputs in the
         * process. The mod events are fired.
         *
         * @param name   The name of the map (by default, the currently
         *               played one).
         * @param location   The name of the location within the map (by
         *                   default, 0 for the first in Array form).
         * @remarks Most of the work here is done by setLocation.
         */
        setMap(name?: string | IFullScreenMario, location?: string | number): void;

        /**
         * Sets the game state to a location within the current map, resetting all
         * Things, inputs, the current Area, PixelRender, and MapScreener in the
         * process. The location's entry Function is called to bring a new Player
         * into the game. The mod events are fired.
         *
         * @param name   The name of the location within the map (by
         *               default, 0 for the first in Array form).
         */
        setLocation(name?: string | number): void;

        /**
         * The onMake callback for Areas. Attributes are copied as specified in the
         * prototype, and the background is set based on the setting.
         *
         * @remarks The scope for this will be an Area.
         */
        initializeArea(): void;

        /**
         * Sets an area's background as a function of its setting.
         *
         * @param area   An Area having its background set.
         * @remarks In the future, it might be more elegant to make Areas inherit
         * from base Area types (Overworld, etc.) so this inelegant switch
         * statement doesn't have to be used.
         */
        setAreaBackground(area: IArea): void;

        /**
         * Determines the absolute height of a y-location, which is the distance
         * from the absolute base (bottom of the user's viewport) to a specific
         * height above the floor.
         *
         * @param yloc   A height to find the distance to the floor from.
         * @param correctUnitsize   Whether the yloc accounts for unitsize
         *                          expansion (e.g. 48 rather than 12, for
         *                          unitsize=4).
         * @returns The absolute height of the y-location.
         */
        getAbsoluteHeight(yloc: number, correctUnitsize?: boolean): number;

        /**
         * Adds a PreThing to the map and stretches it to fit a width equal to the
         * current map's outermost boundaries.
         *
         * @param prethingRaw   A raw PreThing descriptor.
         * @returns A strethed Thing, newly added via addThing.
         */
        mapAddStretched(prethingRaw: string | MapsCreatr.IPreThingSettings): IThing;

        /**
         * Analyzes a PreThing to be placed to the right of the current map's
         * boundaries (after everything else).
         *
         * @param prethingRaw   A raw PreThing descriptor.
         */
        mapAddAfter(prethingRaw: string | MapsCreatr.IPreThingSettings): void;
    }
}
