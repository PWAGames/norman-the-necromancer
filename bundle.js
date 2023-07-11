define("sprites", [], { "norman_arms_up": [0, 18, 16, 15], "skeleton": [11, 33, 13, 15], "norman_arms_down": [16, 18, 16, 15], "villager_1": [32, 18, 14, 15], "villager_3": [58, 18, 13, 15], "villager_4": [71, 18, 14, 15], "archer": [85, 18, 13, 15], "monk": [98, 18, 10, 15], "skull": [72, 61, 8, 7], "health_pip": [18, 52, 2, 2], "wall": [16, 54, 16, 16], "floor": [0, 54, 16, 8], "p_green_skull": [22, 48, 4, 4], "champion": [67, 33, 22, 20], "reticle": [48, 50, 7, 7], "p_green_1": [22, 52, 2, 2], "p_green_2": [24, 52, 1, 1], "p_green_3": [25, 53, 1, 1], "p_green_4": [24, 53, 1, 1], "p_green_5": [25, 52, 1, 1], "p_bone_1": [65, 54, 6, 6], "p_bone_2": [71, 55, 5, 5], "p_bone_3": [76, 56, 4, 4], "shell_knight_up": [142, 18, 18, 17], "p_star_1": [11, 51, 3, 3], "p_star_2": [11, 48, 3, 3], "p_star_3": [11, 49, 1, 1], "p_star_4": [11, 52, 1, 1], "wizard": [108, 18, 14, 17], "the_king": [131, 35, 29, 31], "the_king_on_foot": [109, 35, 22, 22], "royal_guard": [36, 33, 16, 17], "shell_knight_down": [122, 18, 20, 11], "health_orb": [111, 57, 5, 5], "piper": [24, 33, 12, 14], "ceiling": [0, 62, 16, 8], "health_orb_empty": [111, 62, 5, 5], "cast_orb": [116, 57, 5, 5], "cast_orb_empty": [116, 62, 5, 5], "norman_icon": [55, 53, 10, 11], "yellow_orb": [121, 57, 5, 5], "yellow_orb_empty": [121, 62, 5, 5], "p_red_skull": [18, 48, 4, 4], "p_red_1": [20, 52, 1, 1], "p_red_2": [21, 52, 1, 1], "p_red_3": [18, 52, 1, 2], "p_red_4": [21, 53, 1, 1], "p_skull": [14, 48, 4, 4], "p_purple_1": [14, 52, 2, 2], "p_purple_2": [16, 52, 1, 1], "p_purple_3": [17, 52, 1, 1], "p_purple_4": [16, 53, 1, 1], "p_purple_5": [17, 53, 1, 1], "rat": [122, 29, 20, 6], "status_enraged": [53, 64, 7, 6], "status_shielded": [60, 64, 5, 6], "status_bleeding": [49, 64, 4, 6], "font": [0, 0, 160, 18], "royal_guard_shielded": [52, 33, 15, 17], "pink_frame": [65, 60, 7, 8], "rage_knight": [89, 33, 14, 15], "rage_knight_enraged": [89, 48, 15, 20], "portal": [80, 53, 9, 15], "p_blue_1": [83, 54, 2, 2], "p_blue_2": [82, 57, 1, 1], "p_blue_3": [82, 56, 1, 1], "ice": [104, 58, 7, 8], "p_skull_yellow": [26, 48, 4, 4], "p_lightning_2": [104, 48, 3, 3], "p_lightning_1": [104, 51, 3, 3], "p_lightning_3": [104, 54, 3, 3], "p_lightning_4": [106, 50, 1, 1], "p_lightning_5": [106, 51, 1, 1], "p_lightning_6": [106, 54, 1, 1], "p_ice_1": [58, 50, 3, 3], "p_ice_2": [61, 50, 2, 2], "p_ice_3": [61, 52, 1, 1], "p_dust_1": [26, 53, 1, 1], "p_dust_2": [27, 52, 2, 2], "p_dust_3": [26, 52, 1, 1], "door": [32, 50, 16, 20], "big_skeleton": [0, 33, 11, 20], "villager_2": [46, 18, 12, 15] });
define("font", [], {
    "glyphWidth": 5,
    "glyphHeight": 6,
    "lineHeight": 14,
    "glyphWidthOverrides": {
        "mMWTVw/$%": 6,
        "I1f-=*+?{}\"": 4,
        "lj[]()|'`,": 3,
        "i:.!": 2
    }
});
define("helpers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shuffled = exports.sleep = exports.randomFloat = exports.randomInt = exports.vectorToAngle = exports.distance = exports.randomElement = exports.removeFromArray = exports.angleBetweenPoints = exports.vectorFromAngle = exports.clamp = exports.overlaps = exports.Rectangle = exports.Point = exports.DEG_360 = exports.DEG_270 = exports.DEG_90 = exports.DEG_180 = void 0;
    exports.DEG_180 = Math.PI;
    exports.DEG_90 = exports.DEG_180 / 2;
    exports.DEG_270 = exports.DEG_180 + exports.DEG_90;
    exports.DEG_360 = exports.DEG_180 * 2;
    function Point(x, y) {
        return { x, y };
    }
    exports.Point = Point;
    function Rectangle(x, y, w, h) {
        return { x, y, w, h };
    }
    exports.Rectangle = Rectangle;
    function overlaps(a, b) {
        return (a.x < b.x + b.w &&
            a.y < b.y + b.h &&
            a.x + a.w > b.x &&
            a.y + a.h > b.y);
    }
    exports.overlaps = overlaps;
    function clamp(val, min, max) {
        return val < min ? min : val > max ? max : val;
    }
    exports.clamp = clamp;
    function vectorFromAngle(radians) {
        return [Math.cos(radians), Math.sin(radians)];
    }
    exports.vectorFromAngle = vectorFromAngle;
    function angleBetweenPoints(p1, p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x);
    }
    exports.angleBetweenPoints = angleBetweenPoints;
    function removeFromArray(array, element) {
        let index = array.indexOf(element);
        if (index >= 0)
            array.splice(index, 1);
    }
    exports.removeFromArray = removeFromArray;
    function randomElement(items) {
        return items[randomInt(items.length)];
    }
    exports.randomElement = randomElement;
    function distance(p1, p2) {
        return Math.hypot(p2.x - p1.x, p2.y - p1.y);
    }
    exports.distance = distance;
    function vectorToAngle(x, y) {
        return Math.atan2(y, x);
    }
    exports.vectorToAngle = vectorToAngle;
    function randomInt(max) {
        return Math.random() * max | 0;
    }
    exports.randomInt = randomInt;
    function randomFloat(max = 1) {
        return Math.random() * max;
    }
    exports.randomFloat = randomFloat;
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    exports.sleep = sleep;
    function shuffled(array) {
        array = [...array];
        let m = array.length;
        while (m) {
            let i = randomInt(m--);
            [array[m], array[i]] = [array[i], array[m]];
        }
        return array;
    }
    exports.shuffled = shuffled;
});
define("engine", ["require", "exports", "font", "helpers"], function (require, exports, font_json_1, helpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updateParticles = exports.ParticleEmitter = exports.particleEmitters = exports.randomFromRange = exports.tween = exports.updateTweens = exports.linear = exports.init = exports.write = exports.drawNineSlice = exports.drawSpriteSlice = exports.drawSceneSprite = exports.drawSprite = exports.clear = exports.ctx = exports.canvas = void 0;
    // Unpack font metrics
    let metrics = {};
    for (let k in font_json_1.glyphWidthOverrides) {
        for (let c of k) {
            metrics[c] = font_json_1.glyphWidthOverrides[k];
        }
    }
    window.frameText = ""
    window.lastFrameText = ""
    let spritesImage = new Image();
    // spritesImage.src = spriteSrc;
    spritesImage.src = "./sprites.png";
    exports.canvas = c;
    exports.ctx = exports.canvas.getContext("2d");
    function clear() {
        if (window.frameText != window.lastFrameText) {
            console.log(window.frameText)
        }
        window.lastFrameText = window.frameText
        window.frameText = ""
        exports.ctx.clearRect(0, 0, exports.canvas.width, exports.canvas.height);
    }
    exports.clear = clear;
    function drawSprite([sx, sy, sw, sh], x, y) {
        drawSpriteSlice(sx, sy, sw, sh, x, y, sw, sh);
    }
    exports.drawSprite = drawSprite;
    /**
     * A scene sprite is drawn with their bottom left corner at the requested
     * X coordinate and the Y coordinate treated as a negative, so that a positive
     * Y value appears to move them upwards.
     * @param sprite
     * @param x
     * @param y
     */
    function drawSceneSprite(sprite, x, y) {
        drawSprite(sprite, x, -y - sprite[3]);
    }
    exports.drawSceneSprite = drawSceneSprite;
    function drawSpriteSlice(sx, sy, sw, sh, dx, dy, dw, dh) {
        exports.ctx.drawImage(spritesImage, sx, sy, sw, sh, dx | 0, dy | 0, dw, dh);
    }
    exports.drawSpriteSlice = drawSpriteSlice;
    function drawNineSlice(sprite, x, y, w, h) {
        let [sx, sy, sw, sh] = sprite;
        //     |--c--|
        //     x1    x2     x3
        //  y1 +-----+------+-----+
        //     |     |      |     |
        //  y2 +-----+------+-----| -
        //     |     |      |     | |
        //     |     |      |     | |h1
        //     |     |      |     | |
        //  y3 +-----+------|-----+ -
        //     |     |      |     |
        //     +-----+------+-----+
        //           |--w1--|
        let c = 3;
        if (w <= c || h <= c)
            return;
        let sx1 = sx;
        let sx2 = sx + c;
        let sx3 = sx + sw - c;
        let sy1 = sy;
        let sy2 = sy + c;
        let sy3 = sy + sh - c;
        let sw1 = sx3 - sx2;
        let sh1 = sy3 - sy2;
        let dx1 = x;
        let dx2 = x + c;
        let dx3 = x + w - c;
        let dy1 = y;
        let dy2 = y + c;
        let dy3 = y + h - c;
        let dw1 = dx3 - dx2;
        let dh1 = dy3 - dy2;
        drawSpriteSlice(sx1, sy1, c, c, dx1, dy1, c, c); // Top left corner
        drawSpriteSlice(sx3, sy1, c, c, dx3, dy1, c, c); // Top right corner
        drawSpriteSlice(sx1, sy3, c, c, dx1, dy3, c, c); // Bottom left corner
        drawSpriteSlice(sx3, sy3, c, c, dx3, dy3, c, c); // Bottom right corner
        drawSpriteSlice(sx2, sy1, sw1, c, dx2, dy1, dw1, c); // Top
        drawSpriteSlice(sx2, sy3, sw1, c, dx2, dy3, dw1, c); // Bottom
        drawSpriteSlice(sx1, sy2, c, sh1, dx1, dy2, c, dh1); // Left
        drawSpriteSlice(sx3, sy2, c, sh1, dx3, dy2, c, dh1); // Right
        drawSpriteSlice(sx2, sy2, sw1, sh1, dx2, dy2, dw1, dh1); // Center
    }
    exports.drawNineSlice = drawNineSlice;
    let textX = 0;
    let textY = 0;
    /**
     * Write a string of text from the pixel font onto the screen.
     * @param text
     * @param x
     * @param y
     */
    function write(text, x = textX, y = textY) {
        textX = x | 0;
        textY = y | 0;
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (char === "\n") {
                textX = x;
                textY += font_json_1.lineHeight;
            }
            else {
                let code = char.charCodeAt(0) - 32;
                let sx = (code % 32) * font_json_1.glyphWidth;
                let sy = (code / 32 | 0) * font_json_1.glyphHeight;
                let dx = x + (textX - x) * 2;
                let dy = y + (textY - y) * 2;
                exports.ctx.drawImage(spritesImage, sx, sy, font_json_1.glyphWidth, font_json_1.glyphHeight, dx, dy, font_json_1.glyphWidth * 2, font_json_1.glyphHeight * 2);
                textX += metrics[char] ?? font_json_1.glyphWidth;
            }
        }
        window.frameText += text
    }
    exports.write = write;
    function resize() {
        let { width: w, height: h } = exports.canvas;
        let scale = Math.min(innerWidth / w, innerHeight / h, 3);
        exports.canvas.style.width = exports.canvas.width * scale + "px";
        exports.canvas.style.height = exports.canvas.height * scale + "px";
        exports.ctx.imageSmoothingEnabled = false;
    }
    function init(width, height, update) {
        exports.canvas.width = width;
        exports.canvas.height = height;
        (onresize = resize)();
        let t0 = 0;
        (function loop(t1 = 0) {
            requestAnimationFrame(loop);
            update(t1 - t0);
            t0 = t1;
        })();
        onfocus = () => t0 = performance.now();
    }
    exports.init = init;
    let tweens = [];
    let linear = x => x;
    exports.linear = linear;
    function updateTweens(dt) {
        tweens = tweens.filter(tween => {
            tween.elapsed += dt;
            let progress = (0, helpers_1.clamp)(tween.elapsed / tween.duration, 0, 1);
            let t = tween.ease(progress);
            let value = tween.startValue + (tween.endValue - tween.startValue) * t;
            tween.callback(value, t);
            return progress < 1;
        });
    }
    exports.updateTweens = updateTweens;
    function tween(startValue, endValue, duration, callback, ease = exports.linear) {
        tweens.push({
            startValue,
            endValue,
            duration,
            callback,
            ease,
            elapsed: 0,
        });
    }
    exports.tween = tween;
    const defaultRange = [0, 0];
    function randomFromRange([base, spread]) {
        return base + Math.random() * spread;
    }
    exports.randomFromRange = randomFromRange;
    exports.particleEmitters = [];
    class ParticleEmitter {
        static pool = [];
        particles = new Set;
        x = 0;
        y = 0;
        w = 0;
        h = 0;
        variants = [];
        frequency = 0;
        velocity = defaultRange;
        angle = defaultRange;
        duration = defaultRange;
        bounce = defaultRange;
        friction = defaultRange;
        mass = defaultRange;
        clock = 0;
        done = false;
        constructor(props = {}) {
            Object.assign(this, props);
            exports.particleEmitters.push(this);
        }
        extend(options) {
            return Object.assign(this, options);
        }
        remove() {
            this.done = true;
        }
        update(dt) {
            let t = dt / 1000;
            this.clock += this.frequency;
            while (!this.done && this.clock > 0) {
                this.clock -= 1;
                this.emit();
            }
            for (let p of this.particles) {
                if ((p.elapsed += dt) >= p.duration) {
                    this.particles.delete(p);
                    ParticleEmitter.pool.push(p);
                }
                else {
                    p.x += p.vx * t;
                    p.y += p.vy * t;
                    p.vy -= p.mass * t;
                    if (p.y <= 0) {
                        p.y = 0;
                        p.vy *= -p.bounce;
                        p.vx *= p.friction;
                    }
                }
            }
            if (this.done && this.particles.size === 0) {
                (0, helpers_1.removeFromArray)(exports.particleEmitters, this);
            }
        }
        emit() {
            let p = ParticleEmitter.pool.pop() || {};
            let velocity = randomFromRange(this.velocity);
            let angle = randomFromRange(this.angle);
            let [vx, vy] = (0, helpers_1.vectorFromAngle)(angle);
            p.x = randomFromRange([this.x, this.w]);
            p.y = randomFromRange([this.y, this.h]);
            p.vx = vx * velocity;
            p.vy = vy * velocity;
            p.elapsed = 0;
            p.duration = randomFromRange(this.duration);
            p.bounce = randomFromRange(this.bounce);
            p.friction = randomFromRange(this.friction);
            p.mass = randomFromRange(this.mass);
            p.variant = randomFromRange([0, this.variants.length]) | 0;
            this.particles.add(p);
        }
        burst(count) {
            for (let i = 0; i < count; i++) {
                this.emit();
            }
            return this;
        }
    }
    exports.ParticleEmitter = ParticleEmitter;
    function updateParticles(dt) {
        for (let emitter of exports.particleEmitters) {
            emitter.update(dt);
        }
    }
    exports.updateParticles = updateParticles;
});
define("game", ["require", "exports", "helpers"], function (require, exports, helpers_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = exports.ShopItem = exports.WIN = exports.LOSE = exports.SHOPPING = exports.PLAYING = exports.INTRO = exports.Behaviour = exports.GameObject = exports.RARE = exports.COMMON = exports.MAX_STREAK = void 0;
    exports.MAX_STREAK = 10;
    exports.COMMON = 0;
    exports.RARE = 1;
    class GameObject {
        // Physics
        x = 0;
        y = 0;
        vx = 0;
        vy = 0;
        mass = 0;
        bounce = 0;
        friction = 0;
        hop = 0;
        // Display
        sprite = [0, 0, 0, 0];
        emitter;
        // Logic
        tags = 0;
        collisionMask = 0;
        hp = 0;
        maxHp = 0;
        souls = 0;
        corpseChance = 0;
        despawnOnCollision = false;
        despawnOnBounce = false;
        groupId = 0;
        // Behaviours
        behaviours = [];
        updateSpeed = 0;
        updateClock = 0;
        is(mask) {
            return (this.tags & mask) > 0;
        }
        bounds() {
            return (0, helpers_2.Rectangle)(this.x, this.y, this.sprite[2], this.sprite[3]);
        }
        center() {
            return (0, helpers_2.Point)(this.x + this.sprite[2] / 2, this.y + this.sprite[3] / 2);
        }
        update(dt) {
            this.onFrame(dt);
            this.updateClock -= dt;
            if (this.updateClock <= 0) {
                this.updateClock = this.updateSpeed;
                this.onUpdate();
            }
            if (this.emitter) {
                this.emitter.x = this.x;
                this.emitter.y = this.y;
            }
        }
        addBehaviour(behaviour = new Behaviour(this), index = this.behaviours.length) {
            let { constructor } = Object.getPrototypeOf(behaviour);
            if (constructor !== Behaviour && this.getBehaviour(constructor))
                return behaviour;
            this.behaviours.splice(index, 0, behaviour);
            behaviour.onAdded();
            return behaviour;
        }
        removeBehaviour(behaviour) {
            (0, helpers_2.removeFromArray)(this.behaviours, behaviour);
            behaviour.onRemoved();
        }
        getBehaviour(constructor) {
            return this.behaviours.find(behaviour => behaviour instanceof constructor);
        }
        onFrame(dt) {
            for (let behaviour of this.behaviours) {
                behaviour.onFrame(dt);
            }
        }
        onUpdate() {
            for (let behaviour of this.behaviours) {
                if (++behaviour.timer >= behaviour.turns) {
                    behaviour.timer = 0;
                    if (behaviour.onUpdate())
                        break;
                }
            }
        }
        onDamage(damage) {
            for (let behaviour of this.behaviours) {
                behaviour.onDamage(damage);
            }
        }
        onDeath(death) {
            for (let behaviour of this.behaviours) {
                behaviour.onDeath(death);
            }
        }
        onBounce() {
            for (let behaviour of this.behaviours) {
                behaviour.onBounce();
            }
            if (this.despawnOnBounce) {
                game.despawn(this);
            }
        }
        onCollision(target) {
            for (let behaviour of this.behaviours) {
                behaviour.onCollision(target);
            }
            if (this.despawnOnCollision) {
                game.despawn(this);
            }
        }
    }
    exports.GameObject = GameObject;
    class Behaviour {
        object;
        constructor(object) {
            this.object = object;
        }
        turns = 1;
        timer = 0;
        sprite;
        onAdded() { }
        onRemoved() { }
        onUpdate() { }
        onBounce() { }
        onDamage(damage) { }
        onDeath(death) { }
        onFrame(dt) { }
        onCollision(target) { }
    }
    exports.Behaviour = Behaviour;
    exports.INTRO = 0;
    exports.PLAYING = 1;
    exports.SHOPPING = 2;
    exports.LOSE = 3;
    exports.WIN = 4;
    function ShopItem(cost, name, description, purchase) {
        return { cost, name, description, purchase };
    }
    exports.ShopItem = ShopItem;
    class Game {
        stage = { width: 400, height: 200, floor: 0, ceiling: 200 };
        objects = [];
        player = undefined;
        rituals = [];
        state = exports.INTRO;
        souls = 0;
        streak = 0;
        level = 0;
        dialogue = [];
        spell = {
            targetAngle: 0,
            targetRadius: 15,
            basePower: 180,
            shotsPerRound: 1,
            shotOffsetAngle: 0.1,
            maxCasts: 3,
            casts: 3,
            castRechargeRate: 1000,
            castRechargeTimer: 0,
        };
        ability = {
            cooldown: 10_000,
            timer: 10_000,
        };
        constructor(player) {
            this.player = player;
            this.spawn(player);
            window.game = this;
        }
        spawn(object, x = object.x, y = object.y) {
            object.x = x;
            object.y = y;
            this.objects.push(object);
        }
        despawn(object) {
            object.emitter?.remove();
            for (let behaviour of Array.from(object.behaviours)) {
                object.removeBehaviour(behaviour);
            }
            (0, helpers_2.removeFromArray)(this.objects, object);
        }
        getStreakMultiplier() {
            return this.streak / exports.MAX_STREAK;
        }
        addSouls(amount) {
            this.souls += amount + amount * this.getStreakMultiplier();
        }
        addRitual(ritual) {
            this.rituals.push(ritual);
            ritual.onActive?.();
        }
        canAddRitual(ritual) {
            if (ritual.exclusiveTags) {
                for (let other of this.rituals) {
                    if (ritual.exclusiveTags & other.tags) {
                        return false;
                    }
                }
            }
            if (ritual.requiredTags) {
                for (let other of this.rituals) {
                    if (ritual.requiredTags & other.tags) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        }
        update(dt) {
            this.updateAbility(dt);
            this.updateSpell(dt);
            this.updateObjects(dt);
            this.updatePhysics(dt);
            this.updateRituals(dt);
        }
        updateAbility(dt) {
            game.ability.timer += dt;
            game.player.emitter.frequency = game.ability.timer >= game.ability.cooldown ? 0.1 : 0;
        }
        updateSpell(dt) {
            if (this.spell.casts < this.spell.maxCasts) {
                this.spell.castRechargeTimer += dt;
                if (this.spell.castRechargeTimer > this.spell.castRechargeRate) {
                    this.spell.casts += 1;
                    this.spell.castRechargeTimer = 0;
                }
            }
        }
        updateRituals(dt) {
            for (let ritual of this.rituals) {
                ritual.onFrame?.(dt);
            }
        }
        updateObjects(dt) {
            for (let object of this.objects) {
                object.update(dt);
            }
        }
        updatePhysics(dt) {
            let d = dt / 1000;
            // Velocities
            for (let object of this.objects) {
                object.x += object.vx * d;
                object.y += object.vy * d;
            }
            // Bounces
            for (let object of this.objects) {
                let lower = this.stage.floor;
                let upper = this.stage.ceiling - object.sprite[3];
                if (object.y < lower || object.y > upper) {
                    object.y = (0, helpers_2.clamp)(object.y, lower, upper);
                    if (Math.abs(object.vy) >= 10) {
                        object.onBounce();
                    }
                    object.vy *= -object.bounce;
                }
                if (object.y === lower || object.y === upper) {
                    object.vx *= (1 - object.friction);
                }
                if (object.mass && object.y > 0) {
                    object.vy -= object.mass * d;
                }
            }
            // Collisions
            for (let object of this.objects) {
                for (let target of this.objects) {
                    if (object.collisionMask & target.tags) {
                        if ((0, helpers_2.overlaps)(object.bounds(), target.bounds())) {
                            object.onCollision(target);
                        }
                    }
                }
            }
        }
        onLevelStart() {
            for (let ritual of game.rituals) {
                ritual.onLevelStart?.();
            }
        }
        onLevelEnd() {
            for (let ritual of game.rituals) {
                ritual.onLevelEnd?.();
            }
        }
        onShopEnter() {
            for (let ritual of game.rituals) {
                ritual.onShopEnter?.();
            }
        }
        onCast(spell, recursive = false) {
            for (let ritual of game.rituals) {
                if (recursive && ritual.recursive == false)
                    continue;
                ritual.onCast?.(spell);
            }
        }
        getCastingPoint() {
            let { spell, player } = this;
            let center = player.center();
            let [vx, vy] = (0, helpers_2.vectorFromAngle)(spell.targetAngle);
            return {
                x: center.x + vx * spell.targetRadius,
                y: center.y + vy * spell.targetRadius,
            };
        }
    }
    exports.Game = Game;
});
define("fx", ["require", "exports", "sprites", "engine", "helpers"], function (require, exports, sprites, engine_1, helpers_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resurrect = exports.dust = exports.royalty = exports.cloud = exports.trail = exports.bones = void 0;
    function bones() {
        return new engine_1.ParticleEmitter({
            duration: [10_000, 5_000],
            friction: [0.6, 0],
            velocity: [5, 20],
            angle: [helpers_3.DEG_90 - 0.5, 1],
            bounce: [0.1, 0.5],
            mass: [60, 0],
            variants: [
                [sprites.p_bone_1],
                [sprites.p_bone_2],
                [sprites.p_bone_3],
            ],
        });
    }
    exports.bones = bones;
    function trail() {
        return new engine_1.ParticleEmitter({
            duration: [500, 1000],
            velocity: [1, 10],
            angle: [Math.PI, -0.5],
            bounce: [0, 0],
            frequency: 2,
            mass: [3, 0],
            friction: [0.5, 0],
            variants: [
                [sprites.p_green_1, sprites.p_green_2, sprites.p_green_3],
                [sprites.p_green_2, sprites.p_green_3, sprites.p_green_4],
                [sprites.p_green_1, sprites.p_green_2, sprites.p_green_3],
            ],
        });
    }
    exports.trail = trail;
    function cloud(area, variants) {
        return new engine_1.ParticleEmitter({
            ...area,
            duration: [500, 1000],
            velocity: [1, 10],
            angle: [helpers_3.DEG_90 - 0.2, 0.4],
            bounce: [0, 0],
            frequency: 2,
            mass: [-2, 0],
            variants,
        });
    }
    exports.cloud = cloud;
    function royalty() {
        return trail().extend({
            frequency: 0.5,
            variants: [
                [sprites.p_star_1, sprites.p_star_2, sprites.p_star_3],
                [sprites.p_star_2, sprites.p_star_3, sprites.p_star_4],
                [sprites.p_star_1, sprites.p_star_3],
            ],
        });
    }
    exports.royalty = royalty;
    function dust() {
        return new engine_1.ParticleEmitter({
            x: 0,
            y: 0,
            w: game.stage.width,
            h: game.stage.height,
            angle: [0, helpers_3.DEG_360],
            duration: [5000, 10000],
            velocity: [1, 3],
            bounce: [0, 0],
            frequency: 0.1,
            variants: [
                [sprites.p_dust_1, sprites.p_dust_2],
                [sprites.p_dust_2, sprites.p_dust_1, sprites.p_dust_3, sprites.p_dust_1]
            ]
        });
    }
    exports.dust = dust;
    function resurrect(unit) {
        return cloud(unit.bounds(), [
            [sprites.p_green_1, sprites.p_green_2, sprites.p_green_3],
            [sprites.p_green_2, sprites.p_green_3, sprites.p_green_4],
            [sprites.p_green_1, sprites.p_green_3, sprites.p_green_5],
        ]).extend({ frequency: 0 });
    }
    exports.resurrect = resurrect;
});
define("sounds", ["require", "exports", "helpers"], function (require, exports, helpers_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useLevelSynths = exports.useShopSynths = exports.play = exports.synths = exports.BPM = void 0;
    function freq(step) {
        // fn = f0 * a^n where:
        // f0 = the frequency of one fixed note which must be defined. A common choice is setting the A above middle C (A4) at f0 = 440 Hz. 
        // n = the number of half steps away from the fixed note you are. If you are at a higher note, n is positive. If you are on a lower note, n is negative.
        // fn = the frequency of the note n half steps away.
        // a = (2)1/12 = the twelth root of 2 = the number which when multiplied by itself 12 times equals 2 = 1.059463094359...
        return 440 * Math.pow(Math.pow(2, 1 / 12), step);
    }
    let ctx = new AudioContext();
    // Rest
    const __ = -24000;
    // Note lengths
    const W = 1; // Whole
    const H = 2; // Half
    const Q = 4; // Quarter
    const E = 8; // Eighth
    const S = 16; // Sixteenth
    // Notes
    const A3 = -12;
    const Bb3 = -11;
    const B3 = -10;
    const C3 = -9;
    const Db3 = -8;
    const D3 = -7;
    const Eb3 = -6;
    const E3 = -5;
    const F3 = -4;
    const Gb3 = -3;
    const G3 = -2;
    const Ab4 = -1;
    const A4 = 0;
    const Bb4 = 1;
    const B4 = 2;
    const C4 = 3;
    const Db4 = 4;
    const D4 = 5;
    const Eb4 = 6;
    const E4 = 7;
    const F4 = 8;
    const Gb4 = 9;
    const G4 = 10;
    const Ab5 = 11;
    const A5 = 12;
    const Bb5 = 13;
    const B5 = 14;
    const C5 = 15;
    const Db5 = 16;
    const D5 = 17;
    const Eb5 = 18;
    const E5 = 19;
    const F5 = 20;
    const Gb5 = 21;
    const G5 = 22;
    // Waves
    const ORGAN = [-0.8, 1, 0.8, 0.8, -0.8, -0.8, -1];
    // Tempo
    exports.BPM = 240;
    const A_HARMONIC_MINOR = [
        A3, B3, C3, D3, F3, E3, Ab4, A4,
        A4, B4, C4, D4, F4, E4, Ab5, A5,
    ];
    let masterGain = new GainNode(ctx, { gain: 0 });
    masterGain.connect(ctx.destination);
    function createReverb(duration = 3, decay = 2) {
        let convolver = new ConvolverNode(ctx, {});
        let rate = ctx.sampleRate;
        let length = rate * duration;
        let impulse = ctx.createBuffer(2, length, rate);
        let left = impulse.getChannelData(0);
        let right = impulse.getChannelData(1);
        for (let i = 0; i < length; i++) {
            left[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
            right[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
        }
        convolver.buffer = impulse;
        return convolver;
    }
    function Synth() {
        let volume = new GainNode(ctx, { gain: 1 });
        volume.connect(masterGain);
        let gain = new GainNode(ctx, { gain: 0 });
        gain.connect(volume);
        let filter = new BiquadFilterNode(ctx, {
            type: "lowpass",
            frequency: 500,
        });
        filter.connect(gain);
        let osc = new OscillatorNode(ctx);
        osc.connect(filter);
        return {
            gain,
            osc,
            filter,
            volume,
            play(time, frequency) {
                gain.gain.setValueAtTime(0.2, time);
                osc.frequency.setValueAtTime(frequency, time);
            },
            start() {
                this.osc.start();
                this.enter();
            },
            enter() {
                volume.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 1);
            },
            exit() {
                volume.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
            },
        };
    }
    function Organ(duration = 1, decay = 1) {
        let synth = Synth();
        synth.osc.setPeriodicWave(ctx.createPeriodicWave(ORGAN, ORGAN));
        let reverb = createReverb(duration, decay);
        reverb.connect(synth.gain);
        synth.filter.connect(reverb);
        synth.filter.type = "highpass";
        synth.filter.frequency.value = 200;
        return synth;
    }
    function Kick() {
        let synth = Synth();
        synth.filter.type = "lowpass";
        synth.filter.frequency.value = 80;
        synth.osc.frequency.value = 150;
        synth.play = time => {
            synth.osc.frequency.setValueAtTime(150, time);
            synth.gain.gain.setValueAtTime(1, time);
            synth.filter.frequency.setValueAtTime(80, time);
            synth.osc.frequency.exponentialRampToValueAtTime(0.001, time + 0.5);
            synth.gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
            synth.filter.frequency.linearRampToValueAtTime(0.001, time + 0.5);
        };
        return synth;
    }
    function Lead() {
        let synth = Synth();
        let convolver = createReverb(3, 1);
        convolver.connect(synth.gain);
        synth.filter.connect(convolver);
        synth.osc.type = "sawtooth";
        synth.play = (time, frequency) => {
            synth.osc.frequency.setValueAtTime(frequency, time);
            synth.gain.gain.setValueAtTime(0.25, time);
            synth.gain.gain.setTargetAtTime(0, time + 0.05, 0.2);
        };
        return synth;
    }
    function sequence(pattern, retune = 0, synth) {
        let time = ctx.currentTime;
        function loop() {
            let looper = new OscillatorNode(ctx);
            looper.start(time);
            for (let i = 0; i < pattern.length; i += 2) {
                let note = pattern[i];
                let hold = 60 / exports.BPM * 1 / (pattern[i + 1] / 4);
                let hz = freq(note + retune);
                synth.play(time, hz, hold);
                time += hold;
            }
            looper.stop(time);
            looper.onended = () => {
                loop();
            };
        }
        loop();
    }
    let init = false;
    function createPattern(beats = 4, lengths = [W, H, Q, E], notes = A_HARMONIC_MINOR) {
        let time = beats;
        let pattern = [];
        while (time > 0) {
            let length = (0, helpers_4.randomElement)(lengths);
            let note = (0, helpers_4.randomElement)(notes);
            let duration = 1 / length;
            if (time - duration < 0)
                continue;
            time -= duration;
            pattern.push(note, length);
        }
        return pattern;
    }
    // prettier-ignore
    const BASS_MELODY = [2, 4, 5, 8, -12, 8, -1, 4, -12, 4, -10, 8, -4, 4, -4, 8, 0, 4, 2, 4, -9, 4, 12, 4, 12, 8, 12, 8, 0, 8, 12, 4, 3, 8, 5, 4, -12, 4, -12, 4, 2, 4, 5, 8, -12, 8, -1, 4, -12, 4, -10, 8, -4, 4, -4, 8, 0, 4, 2, 4, -9, 4, 12, 4, 12, 8, 12, 8, 0, 8, 12, 4, 3, 8, 5, 4, -12, 4, -12, 4, 2, 4, 5, 8, -12, 8, -1, 4, -12, 4, -10, 8, -4, 4, -4, 8, 0, 4, 2, 4, -9, 4, 12, 4, 12, 8, 12, 8, 0, 8, 12, 4, 3, 8, 5, 4, -12, 4, -12, 4, 12, 4, -4, 8, 2, 8, -1, 4, -9, 8, -7, 4, -10, 4, -7, 4, 7, 4, -1, 4, -7, 4, -4, 8, -5, 8, 2, 4, -5, 8, -4, 4, -12, 4, -1, 4, 2, 4, 2, 4, 5, 8, -12, 8, -1, 4, -12, 4, -10, 8, -4, 4, -4, 8, 0, 4, 2, 4, -9, 4, 12, 4, 12, 8, 12, 8, 0, 8, 12, 4, 3, 8, 5, 4, -12, 4, -12, 4, 2, 4, 5, 8, -12, 8, -1, 4, -12, 4, -10, 8, -4, 4, -4, 8, 0, 4, 2, 4, -9, 4, 12, 4, 12, 8, 12, 8, 0, 8, 12, 4, 3, 8, 5, 4, -12, 4, -12, 4, 2, 4, 5, 8, -12, 8, -1, 4, -12, 4, -10, 8, -4, 4, -4, 8, 0, 4, 2, 4, -9, 4, 12, 4, 12, 8, 12, 8, 0, 8, 12, 4, 3, 8, 5, 4, -12, 4, -12, 4, -5, 8, -5, 8, -12, 8, -5, 4, 0, 4, -5, 4, -5, 8, -5, 4, -12, 4, -12, 4, -12, 8, 0, 8, 0, 8, 0, 4, -5, 8, -12, 8, 0, 8, -12, 4, 0, 8, -5, 4, 0, 4, -12, 8];
    function createBassline() {
        let a = createPattern(4, [E, Q], [A_HARMONIC_MINOR, A3, A3, A3, A3, A3].flat());
        let b = createPattern(4, [E, Q], A_HARMONIC_MINOR);
        return [a, a, a, b].flat();
        //return BASS_MELODY;
    }
    exports.synths = {
        kick: Kick(),
        ambientOrgan: Organ(6, 1),
        bass: Lead(),
        kingsOrgan1: Organ(3, 0.25),
        kingsOrgan2: Organ(3, 1),
        kingsBass: Organ(),
    };
    function play() {
        if (init)
            return;
        init = true;
        let kingsBass = [
            A4, W / 2,
            B4, W / 2,
            C4, W / 2,
            B4, W / 2,
        ];
        sequence([A4, H, __, H], -36, exports.synths.kick);
        sequence([A4, E, A3, E], -36, exports.synths.ambientOrgan);
        sequence(createBassline(), -24, exports.synths.bass);
        {
            // King's Theme
            let p1 = [A4, H, B4, H, C4, H, B4, H];
            let p2 = [A4, H, B4, H, C4, H, D4, H];
            let p = [p1, p1, p1, p2].flat();
            sequence(p, 0, exports.synths.kingsOrgan1);
            sequence(p, -12, exports.synths.kingsOrgan2);
            sequence(kingsBass, -36, exports.synths.kingsBass);
        }
        let t = ctx.currentTime;
        masterGain.gain.linearRampToValueAtTime(0.5, t + 5);
        useLevelSynths();
    }
    exports.play = play;
    let normalLevelSynths = [exports.synths.kick, exports.synths.bass];
    let bossLevelSynths = [exports.synths.kingsBass, exports.synths.kingsOrgan1, exports.synths.kingsOrgan2];
    function useShopSynths() {
        exports.synths.kick.exit();
    }
    exports.useShopSynths = useShopSynths;
    function useLevelSynths() {
        if (game.level === 0)
            exports.synths.ambientOrgan.start();
        if (game.level === 1)
            exports.synths.bass.start();
        if (game.level === 2)
            exports.synths.kick.start();
        if (game.level === 9) {
            for (let synth of normalLevelSynths)
                synth.exit();
            for (let synth of bossLevelSynths)
                synth.start();
        }
        else {
            for (let synth of normalLevelSynths)
                synth.enter();
        }
    }
    exports.useLevelSynths = useLevelSynths;
});
define("tags", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PLAYER = exports.SPELL = exports.CORPSE = exports.UNDEAD = exports.LIVING = exports.MOBILE = void 0;
    exports.MOBILE = 1 << 0;
    exports.LIVING = 1 << 1;
    exports.UNDEAD = 1 << 2;
    exports.CORPSE = 1 << 3;
    exports.SPELL = 1 << 4;
    exports.PLAYER = 1 << 5;
});
define("levels", ["require", "exports", "tags", "objects", "helpers"], function (require, exports, tags_1, objects_1, helpers_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updateLevel = exports.nextLevel = exports.isComplete = exports.isLevelFinished = void 0;
    // Signals (positive signals are spawn counters)
    const END_OF_LEVEL = 99;
    const END_OF_WAVE = 98;
    // Spawn IDs
    const VILLAGER = 0;
    const ARCHER = 1;
    const MONK = 2;
    const CHAMPION = 3;
    const PIPER = 4;
    const RAGE_KNIGHT = 5;
    const ROYAL_GUARD = 6;
    const SHELL_KNIGHT = 7;
    const WIZARD = 8;
    const THE_KING = 9;
    const RAT = 10;
    const MOB = 11;
    const BANDIT = 12;
    const LOOKUP = [
        objects_1.Villager,
        objects_1.Archer,
        objects_1.Monk,
        objects_1.Champion,
        objects_1.Piper,
        objects_1.RageKnight,
        objects_1.RoyalGuard,
        objects_1.ShellKnight,
        objects_1.Wizard,
        objects_1.TheKing,
        objects_1.Rat,
        objects_1.Villager,
        objects_1.Bandit,
    ];
    const DELAYS = {
        [RAT]: () => (0, helpers_5.randomInt)(500),
        [VILLAGER]: () => (0, helpers_5.randomInt)(200),
        [BANDIT]: () => (0, helpers_5.randomInt)(200),
        [MOB]: () => -(0, helpers_5.randomInt)(500),
    };
    const LEVELS = [
        // Level 1
        4, VILLAGER, END_OF_WAVE,
        4, VILLAGER, END_OF_WAVE,
        2, VILLAGER, 1, ARCHER, END_OF_WAVE,
        2, VILLAGER, 1, ARCHER, 4, VILLAGER, END_OF_LEVEL,
        // Level 2
        2, ARCHER, 4, VILLAGER, END_OF_WAVE,
        3, ARCHER, 4, VILLAGER, END_OF_WAVE,
        8, VILLAGER, 2, ARCHER, END_OF_WAVE,
        1, CHAMPION, END_OF_LEVEL,
        // Level 3
        1, MONK, END_OF_WAVE,
        4, BANDIT, END_OF_WAVE,
        2, BANDIT, 1, MONK, END_OF_WAVE,
        2, ARCHER, 1, MONK, END_OF_WAVE,
        4, VILLAGER, 2, BANDIT, 2, ARCHER, 1, MONK, END_OF_LEVEL,
        // Level 4
        1, SHELL_KNIGHT, END_OF_WAVE,
        4, VILLAGER, 3, BANDIT, END_OF_WAVE,
        1, SHELL_KNIGHT, 1, MONK, 1, END_OF_WAVE,
        2, ARCHER, 1, MONK, 1, SHELL_KNIGHT, END_OF_WAVE,
        8, VILLAGER, END_OF_WAVE,
        1, SHELL_KNIGHT, 1, CHAMPION, 1, SHELL_KNIGHT, END_OF_LEVEL,
        // Level 5 - Pied Piper (Miniboss)
        1, RAT, END_OF_WAVE,
        3, RAT, END_OF_WAVE,
        7, RAT, 1, PIPER, END_OF_LEVEL,
        // Level 6
        4, BANDIT, END_OF_WAVE,
        1, RAGE_KNIGHT, END_OF_WAVE,
        4, BANDIT, 1, CHAMPION, 2, ARCHER, END_OF_WAVE,
        4, BANDIT, 1, RAGE_KNIGHT, END_OF_WAVE,
        2, RAGE_KNIGHT, 1, MONK, END_OF_WAVE,
        1, WIZARD, END_OF_LEVEL,
        // Level 7 - Angry Mob
        20, MOB, 1, RAGE_KNIGHT, 20, MOB, 1, RAGE_KNIGHT, 20, MOB, END_OF_WAVE,
        20, MOB, 1, RAGE_KNIGHT, 20, MOB, 1, RAGE_KNIGHT, 20, MOB, END_OF_WAVE,
        3, CHAMPION, END_OF_LEVEL,
        // Level 8
        10, BANDIT, 1, MONK, 10, BANDIT, 1, MONK, END_OF_WAVE,
        10, BANDIT, 1, WIZARD, 1, SHELL_KNIGHT, END_OF_WAVE,
        5, BANDIT, 3, ARCHER, 3, RAGE_KNIGHT, END_OF_WAVE,
        1, CHAMPION, 1, WIZARD, 1, CHAMPION, END_OF_LEVEL,
        // Level 9 - Guards Approaching
        1, VILLAGER, END_OF_WAVE,
        2, ROYAL_GUARD, END_OF_WAVE,
        2, ARCHER, END_OF_WAVE,
        10, ROYAL_GUARD, END_OF_WAVE,
        10, ROYAL_GUARD, 2, MONK, 10, ROYAL_GUARD, END_OF_WAVE,
        2, ROYAL_GUARD, 1, SHELL_KNIGHT, 1, CHAMPION, 1, MONK, END_OF_WAVE,
        2, ROYAL_GUARD, 1, SHELL_KNIGHT, 1, CHAMPION, 1, WIZARD, END_OF_LEVEL,
        // Level 10 - The King (Boss Fight)
        1, THE_KING, END_OF_LEVEL,
    ];
    let timer = 0;
    let cursor = 0;
    function isLevelFinished() {
        return LEVELS[cursor] === END_OF_LEVEL && isCleared();
    }
    exports.isLevelFinished = isLevelFinished;
    function isComplete() {
        return cursor >= LEVELS.length - 1;
    }
    exports.isComplete = isComplete;
    let nextLevel = () => {
        cursor++;
        game.level++;
        game.onLevelStart();
    };
    exports.nextLevel = nextLevel;
    function updateLevel(dt) {
        let cmd = LEVELS[cursor];
        if ((timer -= dt) > 0) { }
        else if (cmd === END_OF_WAVE)
            isCleared() && cursor++;
        else if (cmd === END_OF_LEVEL) { }
        else if (cmd) {
            LEVELS[cursor]--; // Decrement quantity
            let id = LEVELS[cursor + 1];
            let unit = LOOKUP[id]();
            game.spawn(unit);
            timer = unit.updateSpeed + (DELAYS[id]?.() || 0);
        }
        else {
            cursor += 2;
        }
    }
    exports.updateLevel = updateLevel;
    function isCleared() {
        return !game.objects.some(object => object.is(tags_1.LIVING));
    }
});
define("shop", ["require", "exports", "actions", "game", "helpers", "levels", "sounds"], function (require, exports, actions_1, game_1, helpers_6, levels_1, sounds_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createRitualItems = exports.restockShop = exports.exitShop = exports.enterShop = exports.selectShopIndex = exports.buy = exports.shop = void 0;
    exports.shop = {
        rituals: [],
        items: [],
        selectedIndex: 0,
        ready: false,
    };
    function buy() {
        let item = exports.shop.items[exports.shop.selectedIndex];
        if (item && item.cost <= game.souls) {
            game.souls -= item.cost;
            (0, helpers_6.removeFromArray)(exports.shop.items, item);
            item.purchase();
            selectShopIndex(exports.shop.selectedIndex);
        }
    }
    exports.buy = buy;
    function selectShopIndex(step) {
        exports.shop.selectedIndex = (0, helpers_6.clamp)(exports.shop.selectedIndex + step, 0, exports.shop.items.length - 1);
    }
    exports.selectShopIndex = selectShopIndex;
    function enterShop() {
        game.state = game_1.SHOPPING;
        setTimeout(function(){
            exports.shop.ready = true;
        }, 400 * 1.5)
        restockShop();
        game.onShopEnter();
        (0, sounds_1.useShopSynths)();
    }
    exports.enterShop = enterShop;
    function exitShop() {
        game.state = game_1.PLAYING;
        exports.shop.ready = false;
        (0, levels_1.nextLevel)();
        (0, sounds_1.useLevelSynths)();
    }
    exports.exitShop = exitShop;
    function restockShop() {
        let exp = Math.pow(game.level + 1, 2);
        let items = [
            game.player.hp < game.player.maxHp &&
                (0, game_1.ShopItem)(10 * game.level, "Heal", `Heal 1*`, () => (0, actions_1.Damage)(game.player, -1)),
            (0, game_1.ShopItem)(10 * exp, "Renew", `+1* max hp`, () => {
                game.player.maxHp++;
                game.player.hp++;
            }),
            (0, game_1.ShopItem)(10 * exp, "Recharge", "+1\x7F max casts", () => game.spell.maxCasts++),
            ...createRitualItems(),
            (0, game_1.ShopItem)(0, "Continue", "Begin the next level", () => exitShop()),
        ];
        exports.shop.items = items.filter(item => item);
    }
    exports.restockShop = restockShop;
    function createRitualItems() {
        let rituals = (0, helpers_6.shuffled)(exports.shop.rituals.filter(ritual => game.canAddRitual(ritual)));
        let commons = rituals.filter(r => r.rarity !== game_1.RARE);
        let rares = rituals.filter(r => r.rarity === game_1.RARE);
        let pool = rares.slice(0, 1).concat(commons.slice(0, 2));
        return pool.map((ritual) => {
            return {
                name: ritual.name,
                description: ritual.description,
                cost: ritual.rarity === game_1.RARE ? 200 + (0, helpers_6.randomInt)(100) : 75 + (0, helpers_6.randomInt)(100),
                purchase() {
                    (0, helpers_6.removeFromArray)(exports.shop.rituals, ritual);
                    game.addRitual(ritual);
                },
            };
        });
    }
    exports.createRitualItems = createRitualItems;
});
define("renderer", ["require", "exports", "sprites", "engine", "helpers", "game", "shop", "behaviours"], function (require, exports, sprites, engine_2, helpers_7, game_2, shop_1, behaviours_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.render = exports.screenToSceneCoords = exports.screenshake = void 0;
    const ICON_SOULS = "$";
    let screenShakeTimer = 0;
    function screenshake(time) {
        screenShakeTimer = time;
    }
    exports.screenshake = screenshake;
    let sceneOrigin = (0, helpers_7.Point)(0, 150);
    function screenToSceneCoords(x, y) {
        let r = engine_2.canvas.getBoundingClientRect();
        let sx = (x - r.x) * (engine_2.canvas.width / r.width) | 0;
        let sy = (y - r.y) * (engine_2.canvas.height / r.height) | 0;
        return { x: sx, y: sceneOrigin.y - sy };
    }
    exports.screenToSceneCoords = screenToSceneCoords;
    function render(dt) {
        (0, engine_2.clear)();
        engine_2.ctx.save();
        if (screenShakeTimer > 0) {
            screenShakeTimer -= dt;
            engine_2.ctx.translate((0, helpers_7.randomInt)(2), (0, helpers_7.randomInt)(2));
        }
        engine_2.ctx.translate(sceneOrigin.x, sceneOrigin.y);
        drawBackground();
        drawParticles();
        drawObjects();
        if (game.state === game_2.PLAYING)
            drawReticle();
        engine_2.ctx.restore();
        drawHud();
        if (game.state === game_2.SHOPPING) {
            drawShop();
        }
    }
    exports.render = render;
    function drawShop() {
        (0, engine_2.write)("Rituals\n\n", 160, 20);
        let selected = shop_1.shop.items[shop_1.shop.selectedIndex];
        for (let item of shop_1.shop.items) {
            if (game.souls < item.cost) {
                engine_2.ctx.globalAlpha = 0.6;
            }
            (0, engine_2.write)(`${item === selected ? ">" : " "}${item.name} $${item.cost}\n`);
            engine_2.ctx.globalAlpha = 1;
        }
        (0, engine_2.write)("\n" + selected?.description + "\n");
    }
    function drawHud() {
        if (game.dialogue.length) {
            (0, engine_2.write)(game.dialogue[0], 75, 50);
        }
        if (game.state === game_2.INTRO)
            return;
        (0, engine_2.drawSprite)(sprites.norman_icon, 0, 0);
        for (let i = 0; i < game.player.maxHp; i++) {
            let sprite = i < game.player.hp ? sprites.health_orb : sprites.health_orb_empty;
            (0, engine_2.drawSprite)(sprite, 11 + i * 4, 0);
        }
        for (let i = 0; i < game.spell.maxCasts; i++) {
            let sprite = i < game.spell.casts ? sprites.cast_orb : sprites.cast_orb_empty;
            (0, engine_2.drawSprite)(sprite, 11 + i * 4, 6);
        }
        let souls = game.souls | 0;
        if (souls) {
            let multiplier = game.getStreakMultiplier();
            let bonus = multiplier ? `(+${multiplier * 100 + "%"})` : "";
            (0, engine_2.write)(`${ICON_SOULS}${souls} ${bonus}`, engine_2.canvas.width / 2 - 30, 0);
        }
        (0, engine_2.write)(`${game.level + 1}-10`, engine_2.canvas.width - 30, 2);
        if (game.state === game_2.PLAYING) {
            let x = 150;
            let y = engine_2.canvas.height - 12;
            let progress = (0, helpers_7.clamp)(game.ability.timer / game.ability.cooldown, 0, 1);
            (0, engine_2.drawNineSlice)(sprites.pink_frame, x, y, 52 * (1 - progress) | 0, 10);
            (0, engine_2.write)("Resurrect", x + 10, y + 2);
            if (progress === 1)
                (0, engine_2.write)(" (Space)");
            else
                (0, engine_2.write)(" (" + (((1 - progress) * game.ability.cooldown) / 1000 | 0) + "s)");
            (0, engine_2.drawSprite)(sprites.skull, x + 1, y + 1);
        }
    }
    function drawOrbs(x, y, value, maxValue, sprite, emptySprite) {
        let x0 = x - (maxValue * 4) / 2;
        for (let i = 0; i < maxValue; i++) {
            (0, engine_2.drawSceneSprite)(i < value ? sprite : emptySprite, x0 + i * 4, y);
        }
    }
    function drawObjects() {
        for (let object of game.objects) {
            (0, engine_2.drawSceneSprite)(object.sprite, object.x, object.y + object.hop);
            if (object.getBehaviour(behaviours_1.Frozen)) {
                (0, engine_2.drawNineSlice)(sprites.ice, object.x, -object.sprite[3], object.sprite[2], object.sprite[3]);
            }
            if (object.maxHp > 1 && object !== game.player) {
                if (object.maxHp < 10) {
                    let { x } = object.center();
                    drawOrbs(x, -6, object.hp, object.maxHp, sprites.health_orb, sprites.health_orb_empty);
                }
                else {
                    (0, engine_2.drawSceneSprite)(sprites.health_orb, object.x, -6);
                    (0, engine_2.write)(`${object.hp}/${object.maxHp}`, object.x + 6, 0);
                }
            }
            let { x } = object;
            for (let behaviour of object.behaviours) {
                if (behaviour.sprite) {
                    (0, engine_2.drawSceneSprite)(behaviour.sprite, x, -12);
                    x += behaviour.sprite[2] + 1;
                }
            }
        }
    }
    function drawBackground() {
        for (let i = 0; i < game.stage.width / 16; i++) {
            let sprite = i % 5 ? sprites.wall : sprites.door;
            (0, engine_2.drawSceneSprite)(sprite, i * 16, 0);
            (0, engine_2.drawSceneSprite)(sprites.floor, i * 16, -sprites.floor[3]);
            (0, engine_2.drawSceneSprite)(sprites.ceiling, i * 16, game.stage.ceiling);
        }
    }
    function drawReticle() {
        let { x, y } = game.getCastingPoint();
        let sprite = sprites.reticle;
        (0, engine_2.drawSceneSprite)(sprite, x - sprite[2] / 2, y - sprite[3] / 2);
    }
    function drawParticles() {
        for (let emitter of engine_2.particleEmitters) {
            for (let particle of emitter.particles) {
                let variant = emitter.variants[particle.variant];
                let progress = particle.elapsed / particle.duration;
                let sprite = variant[progress * variant.length | 0];
                (0, engine_2.drawSceneSprite)(sprite, particle.x, particle.y);
            }
        }
    }
});
define("behaviours", ["require", "exports", "fx", "sprites", "actions", "engine", "game", "renderer", "helpers", "objects"], function (require, exports, fx, sprites, actions_2, engine_3, game_3, renderer_1, helpers_8, objects_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LightningStrike = exports.Frozen = exports.Invulnerable = exports.HitStreak = exports.Summon = exports.Seeking = exports.Enraged = exports.Bleeding = exports.Damaging = exports.March = exports.DespawnTimer = exports.Attack = void 0;
    class Attack extends game_3.Behaviour {
        onCollision(target) {
            let dealDamage = this.object.hp;
            let takeDamage = target.hp;
            (0, actions_2.Damage)(target, dealDamage, this.object);
            (0, actions_2.Damage)(this.object, takeDamage, target);
        }
    }
    exports.Attack = Attack;
    class DespawnTimer extends game_3.Behaviour {
        duration;
        elapsed = 0;
        constructor(object, duration) {
            super(object);
            this.duration = duration;
        }
        onFrame(dt) {
            if ((this.elapsed += dt) >= this.duration) {
                game.despawn(this.object);
            }
        }
    }
    exports.DespawnTimer = DespawnTimer;
    class March extends game_3.Behaviour {
        step;
        constructor(object, step) {
            super(object);
            this.step = step;
        }
        onUpdate() {
            // Can't march if you're flying
            if (this.object.y > 0)
                return;
            // Animate the march with a little hop
            (0, engine_3.tween)(this.object.x, this.object.x + this.step, 200, (x, t) => {
                this.object.x = x;
                this.object.hop = Math.sin(t * Math.PI) * 2;
                if (t === 1 && this.object.mass >= 100)
                    (0, renderer_1.screenshake)(50);
            });
            // Despawn units that march offscreen
            if ((this.step < 0 && this.object.x < 0) ||
                (this.step > 0 && this.object.x > game.stage.width)) {
                game.despawn(this.object);
            }
        }
    }
    exports.March = March;
    class Damaging extends game_3.Behaviour {
        amount = 1;
        onCollision(target) {
            (0, actions_2.Damage)(target, this.amount, this.object);
        }
    }
    exports.Damaging = Damaging;
    class Bleeding extends game_3.Behaviour {
        sprite = sprites.status_bleeding;
        turns = 3;
        amount = 1;
        emitter = fx.cloud({ x: 0, y: 0, w: 0, h: 0 }, [
            [sprites.health_orb, sprites.health_pip],
            [sprites.health_pip]
        ]).extend({
            mass: [10, 30],
            velocity: [10, 30],
            frequency: 0,
        });
        onUpdate() {
            this.emitter.extend(this.object.center());
            this.emitter?.burst(1);
            (0, actions_2.Damage)(this.object, 1, this.object);
        }
    }
    exports.Bleeding = Bleeding;
    class Enraged extends game_3.Behaviour {
        mask;
        sprite = sprites.status_enraged;
        emitter = fx.cloud({ x: 0, y: 0, w: 0, h: 0 }, [
            [sprites.health_orb, sprites.health_pip],
            [sprites.health_pip]
        ]).extend({
            mass: [10, 30],
            velocity: [10, 30],
            frequency: 0,
        });
        constructor(object, mask) {
            super(object);
            this.mask = mask;
        }
        onDamage(damage) {
            if (damage.dealer && damage.dealer.is(this.mask)) {
                (0, actions_2.Damage)(this.object, -damage.amount, this.object);
                damage.amount = 0;
                this.emitter.extend(this.object.bounds()).burst(4);
            }
        }
    }
    exports.Enraged = Enraged;
    class Seeking extends game_3.Behaviour {
        onFrame() {
            let projectile = this.object;
            let target;
            let minDist = 100;
            for (let object of game.objects) {
                if (object.is(this.object.collisionMask)) {
                    let dist = (0, helpers_8.distance)(projectile, object);
                    if (dist < minDist) {
                        target = object;
                        minDist = dist;
                    }
                }
            }
            if (target) {
                let currentAngle = (0, helpers_8.vectorToAngle)(projectile.vx, projectile.vy);
                let desiredAngle = (0, helpers_8.angleBetweenPoints)(projectile, target.center());
                let angle = currentAngle + (desiredAngle - currentAngle) / 20;
                let magnitude = Math.hypot(projectile.vx, projectile.vy);
                let [vx, vy] = (0, helpers_8.vectorFromAngle)(angle);
                projectile.vx = vx * magnitude;
                projectile.vy = vy * magnitude;
            }
        }
    }
    exports.Seeking = Seeking;
    class Summon extends game_3.Behaviour {
        create;
        summonSpeed;
        summonTimer = 0;
        summonCounter = 0;
        constructor(object, create, summonSpeed) {
            super(object);
            this.create = create;
            this.summonSpeed = summonSpeed;
        }
        onSummon(object) { }
        onFrame(dt) {
            if ((this.summonTimer += dt) > this.summonSpeed) {
                this.summonTimer = 0;
                this.summonCounter++;
                let object = this.create();
                game.spawn(object, this.object.x, this.object.y);
                this.onSummon(object);
            }
        }
    }
    exports.Summon = Summon;
    class HitStreak extends game_3.Behaviour {
        static counters = {};
        hit = false;
        counter = undefined;
        onCollision = () => this.hit = true;
        onAdded = () => {
            this.counter = HitStreak.counters[this.object.groupId] ||= { total: 0, hits: 0 };
            this.counter.total++;
        };
        onRemoved() {
            if (this.hit)
                this.counter.hits++;
            if (--this.counter.total)
                return;
            if (this.counter.hits) {
                game.streak = (0, helpers_8.clamp)(game.streak + 1, 0, game_3.MAX_STREAK);
            }
            else {
                game.streak = 0;
            }
        }
    }
    exports.HitStreak = HitStreak;
    class Invulnerable extends game_3.Behaviour {
        sprite = sprites.status_shielded;
        onDamage(damage) {
            if (damage.amount > 0)
                damage.amount = 0;
        }
    }
    exports.Invulnerable = Invulnerable;
    class Frozen extends game_3.Behaviour {
        freezeTimer = 10;
        onUpdate() {
            if (this.freezeTimer-- <= 0) {
                this.object.removeBehaviour(this);
            }
            return true;
        }
    }
    exports.Frozen = Frozen;
    class LightningStrike extends game_3.Behaviour {
        onCollision(target) {
            let bolts = 3;
            for (let i = 0; i < bolts; i++) {
                let bolt = (0, objects_2.LightningSpell)();
                //bolt.addBehaviour(new Seeking(bolt));
                bolt.vy = -200;
                bolt.vx = (0, helpers_8.randomInt)(20) - 10;
                bolt.y = (0, helpers_8.clamp)(50 + (0, helpers_8.randomInt)(100), 0, game.stage.ceiling - 10);
                bolt.x = target.x + (0, helpers_8.randomInt)(50) - 25;
                game.spawn(bolt);
            }
        }
    }
    exports.LightningStrike = LightningStrike;
});
define("objects", ["require", "exports", "sprites", "fx", "sounds", "game", "tags", "helpers", "behaviours", "actions"], function (require, exports, sprites, fx, sfx, game_4, tags_2, helpers_9, behaviours_2, actions_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Portal = exports.Wizard = exports.RoyalGuardOrb = exports.RoyalGuard = exports.RageKnight = exports.Rat = exports.Piper = exports.Archer = exports.Monk = exports.ShellKnight = exports.Champion = exports.TheKing = exports.Bandit = exports.Villager = exports.SkeletonLord = exports.Skeleton = exports.LightningSpell = exports.BleedSpell = exports.Spell = exports.Player = exports.Corpse = void 0;
    function Corpse() {
        let unit = new game_4.GameObject();
        unit.sprite = sprites.skull;
        unit.mass = 100;
        unit.tags = tags_2.CORPSE;
        return unit;
    }
    exports.Corpse = Corpse;
    function Player() {
        let player = new game_4.GameObject();
        player.x = 5;
        player.tags = tags_2.PLAYER | tags_2.UNDEAD;
        player.sprite = sprites.norman_arms_down;
        player.collisionMask = tags_2.LIVING;
        player.updateSpeed = 1000;
        player.hp = player.maxHp = 5;
        player.emitter = fx.resurrect(player);
        player.onCollision = unit => {
            (0, actions_3.Damage)(player, unit.hp);
            (0, actions_3.Die)(unit);
        };
        player.onDeath = () => window.location = window.location;
        return player;
    }
    exports.Player = Player;
    function Spell() {
        let object = new game_4.GameObject();
        object.sprite = sprites.p_green_skull;
        object.tags = tags_2.SPELL;
        object.collisionMask = tags_2.MOBILE | tags_2.LIVING;
        object.mass = 100;
        object.emitter = fx.trail();
        object.friction = 0.1;
        object.despawnOnCollision = true;
        object.despawnOnBounce = true;
        object.addBehaviour(new behaviours_2.Damaging(object));
        return object;
    }
    exports.Spell = Spell;
    function BleedSpell() {
        let spell = Spell();
        spell.sprite = sprites.p_red_skull;
        spell.emitter.extend({
            variants: [
                [sprites.p_red_3, sprites.p_red_2, sprites.p_red_1],
                [sprites.p_red_4, sprites.p_red_3, sprites.p_red_2],
                [sprites.p_red_3, sprites.p_red_2, sprites.p_red_1],
            ],
            frequency: 5,
            angle: [helpers_9.DEG_180, 0],
            mass: [20, 50],
        });
        spell.addBehaviour().onCollision = target => target.addBehaviour(new behaviours_2.Bleeding(target));
        return spell;
    }
    exports.BleedSpell = BleedSpell;
    function LightningSpell() {
        let spell = Spell();
        spell.sprite = sprites.p_skull_yellow;
        spell.emitter.frequency = 0.8;
        spell.emitter.variants = [
            [sprites.p_lightning_1, sprites.p_lightning_2, sprites.p_lightning_3, sprites.p_lightning_4],
            [sprites.p_lightning_1, sprites.p_lightning_2, sprites.p_lightning_3, sprites.p_lightning_5],
            [sprites.p_lightning_2, sprites.p_lightning_3, sprites.p_lightning_6],
            [sprites.p_lightning_4, sprites.p_lightning_5, sprites.p_lightning_6],
            [sprites.p_purple_5],
        ];
        return spell;
    }
    exports.LightningSpell = LightningSpell;
    function Skeleton() {
        let unit = new game_4.GameObject();
        unit.sprite = sprites.skeleton;
        unit.tags = tags_2.UNDEAD | tags_2.MOBILE;
        unit.collisionMask = tags_2.LIVING;
        unit.hp = unit.maxHp = 1;
        unit.updateSpeed = 1000;
        unit.behaviours.push(new behaviours_2.March(unit, 16));
        unit.behaviours.push(new behaviours_2.Attack(unit));
        return unit;
    }
    exports.Skeleton = Skeleton;
    function SkeletonLord() {
        let unit = Skeleton();
        unit.sprite = sprites.big_skeleton;
        unit.hp = unit.maxHp = 3;
        unit.updateSpeed = 1500;
        return unit;
    }
    exports.SkeletonLord = SkeletonLord;
    function Villager() {
        let unit = new game_4.GameObject();
        unit.sprite = (0, helpers_9.randomElement)([
            sprites.villager_1,
            sprites.villager_2,
            sprites.villager_3,
            sprites.villager_4,
        ]);
        unit.friction = 0.8;
        unit.mass = 75;
        unit.x = game.stage.width;
        unit.tags = tags_2.LIVING | tags_2.MOBILE;
        unit.hp = unit.maxHp = 1;
        unit.updateSpeed = 600;
        unit.addBehaviour(new behaviours_2.March(unit, -16));
        unit.corpseChance = 0.75;
        unit.souls = 5;
        return unit;
    }
    exports.Villager = Villager;
    function Bandit() {
        let unit = Villager();
        unit.hp = unit.maxHp = 2;
        return unit;
    }
    exports.Bandit = Bandit;
    function TheKing() {
        let unit = Villager();
        unit.sprite = sprites.the_king;
        unit.updateSpeed = 5000;
        unit.hp = unit.maxHp = 100;
        unit.behaviours = [];
        unit.mass = 1000;
        unit.emitter = fx.royalty().extend({
            frequency: 0.2,
            angle: [helpers_9.DEG_90, 0.5],
            w: unit.sprite[2],
            h: unit.sprite[3],
        });
        let phase = 1;
        let marching = new behaviours_2.March(unit, -32);
        let summons = new behaviours_2.Summon(unit, RoyalGuard, 2000);
        let enraged = new behaviours_2.Enraged(unit, tags_2.SPELL);
        let invulnerable = new behaviours_2.Invulnerable(unit);
        let boss = new game_4.Behaviour(unit);
        unit.addBehaviour(marching);
        unit.addBehaviour(boss);
        boss.onDamage = ({ amount }) => {
            let willDie = unit.hp - amount <= 0;
            if (phase === 1 && willDie) {
                phase = 2;
                unit.addBehaviour(summons);
                unit.addBehaviour(enraged);
                unit.addBehaviour(invulnerable);
                marching.step *= -1;
            }
            else if (phase === 3 && willDie) {
                sfx.synths.kick.enter();
                phase = 4;
                unit.hp = unit.maxHp;
                unit.sprite = sprites.the_king_on_foot;
                unit.updateSpeed = unit.updateClock = 1000;
                marching.step /= 2;
                let t = 0;
                unit.addBehaviour().onFrame = dt => {
                    if ((t += dt) > 300) {
                        t = 0;
                        game.spawn(Corpse(), (0, helpers_9.randomInt)(game.stage.width), game.stage.ceiling);
                    }
                };
            }
        };
        summons.onSummon = () => {
            if (summons.summonCounter >= 5) {
                phase = 3;
                unit.removeBehaviour(enraged);
                unit.removeBehaviour(invulnerable);
                unit.removeBehaviour(summons);
                marching.step *= -1;
            }
        };
        return unit;
    }
    exports.TheKing = TheKing;
    function Champion() {
        let unit = Villager();
        unit.sprite = sprites.champion;
        unit.updateSpeed = 1000;
        unit.hp = unit.maxHp = 10;
        unit.souls = 25;
        return unit;
    }
    exports.Champion = Champion;
    function ShellKnight() {
        let unit = Villager();
        unit.sprite = sprites.shell_knight_up;
        unit.updateSpeed = 1000;
        unit.hp = unit.maxHp = 5;
        unit.souls = 15;
        let shell = unit.addBehaviour();
        let shelled = false;
        let timer = 0;
        shell.onUpdate = () => {
            shelled = timer++ % 4 > 1;
            unit.sprite = shelled ? sprites.shell_knight_down : sprites.shell_knight_up;
            shell.sprite = shelled ? sprites.status_shielded : undefined;
        };
        shell.onDamage = (dmg) => {
            if (shelled) {
                dmg.amount = Math.min(0, dmg.amount);
            }
        };
        return unit;
    }
    exports.ShellKnight = ShellKnight;
    function Monk() {
        let unit = Villager();
        unit.sprite = sprites.monk;
        unit.updateSpeed = 600;
        unit.hp = unit.maxHp = 3;
        unit.souls = 10;
        let heal = new game_4.Behaviour(unit);
        heal.turns = 5;
        heal.onUpdate = () => {
            for (let object of game.objects) {
                if (object.is(tags_2.LIVING)) {
                    (0, actions_3.Damage)(object, -1, unit);
                }
            }
            fx.cloud(unit.bounds(), [
                [sprites.p_star_1, sprites.p_star_2, sprites.p_star_3],
                [sprites.p_star_2, sprites.p_star_3, sprites.p_star_4],
                [sprites.p_star_1, sprites.p_star_3],
            ]).burst(10).remove();
        };
        unit.addBehaviour(heal);
        return unit;
    }
    exports.Monk = Monk;
    function Archer() {
        let unit = Villager();
        unit.sprite = sprites.archer;
        unit.updateSpeed = 300;
        unit.hp = unit.maxHp = 2;
        return unit;
    }
    exports.Archer = Archer;
    function Piper() {
        let unit = Villager();
        unit.sprite = sprites.piper;
        unit.updateSpeed = 500;
        unit.hp = unit.maxHp = 15;
        unit.addBehaviour(new behaviours_2.Summon(unit, Rat, 2000));
        unit.souls = 100;
        return unit;
    }
    exports.Piper = Piper;
    function Rat() {
        let unit = Villager();
        unit.sprite = sprites.rat;
        unit.updateSpeed = 200;
        unit.souls = 5;
        unit.corpseChance = 0;
        return unit;
    }
    exports.Rat = Rat;
    function RageKnight() {
        let unit = Villager();
        unit.sprite = sprites.rage_knight;
        unit.updateSpeed = 500;
        unit.hp = unit.maxHp = 5;
        let raging = unit.addBehaviour();
        let march = unit.getBehaviour(behaviours_2.March);
        let enraged = new behaviours_2.Enraged(unit, tags_2.SPELL);
        let angry = false;
        let step = march.step;
        raging.turns = 5;
        raging.onUpdate = () => {
            angry = !angry;
            if (angry) {
                unit.addBehaviour(enraged);
            }
            else {
                unit.removeBehaviour(enraged);
            }
            unit.sprite = angry ? sprites.rage_knight_enraged : sprites.rage_knight;
            march.step = angry ? 0 : step;
        };
        unit.souls = 20;
        return unit;
    }
    exports.RageKnight = RageKnight;
    function RoyalGuard() {
        let unit = Villager();
        unit.sprite = sprites.royal_guard;
        unit.hp = unit.maxHp = 4;
        unit.souls = 10;
        let march = unit.getBehaviour(behaviours_2.March);
        let shielded = false;
        let shield = unit.addBehaviour();
        shield.turns = 3;
        shield.onUpdate = () => {
            shielded = !shielded;
            march.step = shielded ? 0 : -16;
            unit.sprite = shielded ? sprites.royal_guard_shielded : sprites.royal_guard;
        };
        shield.onDamage = dmg => {
            if (!shielded || !dmg.dealer?.is(tags_2.SPELL))
                return;
            if (dmg.dealer.vx > 0) {
                dmg.amount = 0;
                let orb = RoyalGuardOrb();
                orb.vx = dmg.dealer.vx *= -1;
                orb.vy = dmg.dealer.vy *= -0.25;
                orb.mass = dmg.dealer.mass;
                game.spawn(orb, dmg.dealer.x - orb.sprite[2] - 1, dmg.dealer.y);
            }
        };
        // Looks more natural if the shield comes up first
        unit.behaviours.reverse();
        return unit;
    }
    exports.RoyalGuard = RoyalGuard;
    function RoyalGuardOrb() {
        let unit = new game_4.GameObject();
        unit.sprite = sprites.yellow_orb;
        unit.tags = tags_2.SPELL;
        unit.collisionMask = tags_2.MOBILE | tags_2.PLAYER;
        unit.hp = 1;
        unit.despawnOnBounce = true;
        unit.despawnOnCollision = true;
        unit.addBehaviour(new behaviours_2.Damaging(unit));
        unit.addBehaviour(new behaviours_2.DespawnTimer(unit, 3000));
        unit.friction = 0.9;
        unit.emitter = fx.royalty();
        return unit;
    }
    exports.RoyalGuardOrb = RoyalGuardOrb;
    function Wizard() {
        let unit = Villager();
        unit.sprite = sprites.wizard;
        unit.hp = unit.maxHp = 15;
        unit.souls = 10;
        unit.addBehaviour(new behaviours_2.Summon(unit, Portal, 3000));
        return unit;
    }
    exports.Wizard = Wizard;
    function Portal() {
        let unit = new game_4.GameObject();
        unit.sprite = sprites.portal;
        unit.tags = tags_2.LIVING;
        unit.hp = unit.maxHp = 3;
        unit.souls = 10;
        // Prevent the player from farming portals for souls
        unit.addBehaviour(new behaviours_2.DespawnTimer(unit, 3000 * 10));
        unit.addBehaviour(new behaviours_2.Summon(unit, () => (0, helpers_9.randomElement)([Villager, Bandit, Archer])(), 3000));
        unit.emitter = fx.cloud(unit.bounds(), [
            [sprites.p_blue_1, sprites.p_blue_2, sprites.p_blue_3],
            [sprites.p_blue_2, sprites.p_blue_3],
            [sprites.p_blue_3],
        ]).extend({
            frequency: 0.2,
        });
        return unit;
    }
    exports.Portal = Portal;
});
define("actions", ["require", "exports", "sprites", "fx", "helpers", "objects", "tags"], function (require, exports, sprites, fx, helpers_10, objects_3, tags_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Resurrect = exports.Cast = exports.Die = exports.Damage = void 0;
    function Damage(object, amount, dealer) {
        let damage = { amount, dealer };
        object.onDamage(damage);
        object.hp = (0, helpers_10.clamp)(object.hp - damage.amount, 0, object.maxHp);
        if (!object.hp)
            Die(object, dealer);
    }
    exports.Damage = Damage;
    function Die(object, killer) {
        let death = {
            object,
            killer,
            souls: object.souls,
        };
        if (object.is(tags_3.MOBILE)) {
            let center = object.center();
            fx
                .bones()
                .extend(center)
                .burst(2 + (0, helpers_10.randomInt)(3))
                .remove();
            for (let ritual of game.rituals) {
                ritual.onDeath?.(death);
            }
            if ((0, helpers_10.randomFloat)() <= object.corpseChance) {
                game.spawn((0, objects_3.Corpse)(), center.x, center.y);
            }
            game.addSouls(death.souls);
        }
        object.onDeath(death);
        game.despawn(object);
    }
    exports.Die = Die;
    let castAnimationTimeout = 0;
    let castGroupId = 1;
    function Cast() {
        let { spell, player } = game;
        if (spell.casts === 0)
            return;
        spell.casts--;
        player.sprite = sprites.norman_arms_up;
        clearTimeout(castAnimationTimeout);
        castAnimationTimeout = setTimeout(() => player.sprite = sprites.norman_arms_down, 500);
        let power = spell.basePower;
        let targetAngle = spell.targetAngle - (spell.shotsPerRound * spell.shotOffsetAngle / 2);
        let groupId = castGroupId++;
        for (let j = 0; j < spell.shotsPerRound; j++) {
            let projectile = (0, objects_3.Spell)();
            let angle = targetAngle + j * spell.shotOffsetAngle;
            let [vx, vy] = (0, helpers_10.vectorFromAngle)(angle);
            let { x, y } = game.getCastingPoint();
            projectile.x = x - projectile.sprite[2] / 2;
            projectile.y = y - projectile.sprite[3] / 2;
            projectile.vx = vx * power;
            projectile.vy = vy * power;
            projectile.groupId = groupId;
            game.spawn(projectile);
            game.onCast(projectile);
        }
    }
    exports.Cast = Cast;
    function Resurrect() {
        if (game.ability.timer < game.ability.cooldown) {
            return;
        }
        game.ability.timer = 0;
        for (let ritual of game.rituals) {
            ritual.onResurrect?.();
        }
        let corpses = game.objects.filter(object => object.is(tags_3.CORPSE));
        for (let corpse of corpses) {
            game.despawn(corpse);
            let unit = (0, objects_3.Skeleton)();
            game.spawn(unit, corpse.x, 0);
            fx.resurrect(unit).burst(10).remove();
            for (let ritual of game.rituals) {
                ritual.onResurrection?.(unit);
            }
        }
    }
    exports.Resurrect = Resurrect;
});
define("rituals", ["require", "exports", "fx", "sprites", "behaviours", "engine", "game", "helpers", "objects", "tags", "shop"], function (require, exports, fx, sprites, behaviours_3, engine_4, game_5, helpers_11, objects_4, tags_4, shop_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hardened = exports.Avarice = exports.Giants = exports.Chilly = exports.Electrodynamics = exports.Studious = exports.Salvage = exports.Allegiance = exports.Bleed = exports.Impatience = exports.Tearstone = exports.Seer = exports.Drunkard = exports.Rain = exports.Ceiling = exports.Knockback = exports.Weightless = exports.Hunter = exports.Doubleshot = exports.Bouncing = exports.Streak = void 0;
    // Ritual tags
    const NONE = 0;
    const BOUNCING = 1 << 0;
    const SPLITTING = 1 << 1;
    const EXPLOSIVE = 1 << 2;
    const HOMING = 1 << 3;
    const WARDSTONES = 1 << 4;
    const CASTING_RATE = 1 << 5;
    const CURSE = 1 << 6;
    exports.Streak = {
        tags: NONE,
        name: "Streak",
        description: "",
        onCast: spell => spell.addBehaviour(new behaviours_3.HitStreak(spell)),
    };
    exports.Bouncing = {
        tags: BOUNCING,
        name: "Bouncing",
        description: "Spells bounce",
        onCast(spell) {
            spell.addBehaviour(new behaviours_3.DespawnTimer(spell, 3000));
            spell.despawnOnBounce = false;
            spell.bounce = 0.5;
        },
    };
    exports.Doubleshot = {
        tags: SPLITTING,
        exclusiveTags: SPLITTING,
        rarity: game_5.RARE,
        name: "Doubleshot",
        description: "Cast 2 spells",
        onActive() {
            game.spell.shotsPerRound = 2;
        },
    };
    exports.Hunter = {
        tags: HOMING,
        rarity: game_5.RARE,
        name: "Hunter",
        description: "Spells seek targets",
        onCast(projectile) {
            projectile.addBehaviour(new behaviours_3.Seeking(projectile));
        },
    };
    exports.Weightless = {
        tags: NONE,
        name: "Weightless",
        description: "Spells are not affected by gravity",
        onCast(spell) {
            spell.mass = 0;
            spell.friction = 0;
            spell.bounce = 1;
        },
    };
    class KnockbackSpell extends game_5.Behaviour {
        onCollision(target) {
            // Knockback shouldn't work on the king
            if (target.mass < 1000) {
                (0, engine_4.tween)(target.x, target.x + 16, 200, x => target.x = x);
            }
            // Throw objects into the air
            //for (let object of game.objects) {
            //  if (this.object.collisionMask & object.tags) {
            //    let dist = distance(this.object, object);
            //    let scale = 1 - clamp(dist / 50, 0, 1);
            //    let [vx] = vectorFromAngle(angleBetweenPoints(this.object, object));
            //    object.vx = vx * 50 * scale;
            //    object.vy = 100 * scale;
            //  }
            //}
        }
    }
    exports.Knockback = {
        tags: NONE,
        name: "Knockback",
        description: "Spells knock backwards",
        onCast(spell) {
            spell.addBehaviour(new KnockbackSpell(spell));
        },
    };
    exports.Ceiling = {
        tags: NONE,
        requiredTags: BOUNCING,
        name: "Ceiling",
        description: "Adds a ceiling",
        onActive() {
            game.stage.ceiling = 48;
        },
    };
    class RainSpell extends game_5.Behaviour {
        split = false;
        onFrame() {
            if (!this.split && this.object.vy < 0) {
                this.split = true;
                let p0 = this.object;
                let p1 = (0, objects_4.Spell)();
                let p2 = (0, objects_4.Spell)();
                p1.x = p2.x = p0.x;
                p1.y = p2.y = p0.y;
                p1.vx = p2.vx = p0.vx;
                p1.vy = p2.vy = p0.vy;
                p1.vx -= 20;
                p2.vx += 20;
                p1.groupId = p2.groupId = p0.groupId;
                game.onCast(p1, true);
                game.onCast(p2, true);
                game.spawn(p1);
                game.spawn(p2);
            }
        }
    }
    exports.Rain = {
        tags: SPLITTING,
        exclusiveTags: SPLITTING,
        rarity: game_5.RARE,
        name: "Rain",
        description: "Spells split when they drop",
        recursive: false,
        onCast(spell) {
            spell.addBehaviour(new RainSpell(spell));
        },
    };
    exports.Drunkard = {
        tags: NONE,
        name: "Drunkard",
        description: "2x damage, wobbly aim",
        onCast(spell) {
            spell.vx += (0, helpers_11.randomInt)(100) - 50;
            spell.vy += (0, helpers_11.randomInt)(100) - 50;
            spell.getBehaviour(behaviours_3.Damaging).amount *= 2;
        },
    };
    exports.Seer = {
        tags: NONE,
        name: "Seer",
        description: "Spells pass through the dead",
        onCast(spell) {
            spell.collisionMask = tags_4.LIVING;
        }
    };
    exports.Tearstone = {
        tags: NONE,
        name: "Tearstone",
        description: "2x damage when < half HP",
        onCast(spell) {
            if (game.player.hp < game.player.maxHp / 2) {
                spell.getBehaviour(behaviours_3.Damaging).amount *= 3;
            }
        }
    };
    exports.Impatience = {
        tags: NONE,
        name: "Impatience",
        description: "Resurrection recharges 2x faster",
        onActive() {
            game.ability.cooldown /= 2;
        }
    };
    exports.Bleed = {
        tags: CURSE,
        name: "Bleed",
        description: "Inflicts bleed on hits",
        onCast(spell) {
            spell.sprite = sprites.p_red_skull;
            spell.emitter.extend({
                variants: [
                    [sprites.p_red_3, sprites.p_red_2, sprites.p_red_1],
                    [sprites.p_red_4, sprites.p_red_3, sprites.p_red_2],
                    [sprites.p_red_3, sprites.p_red_2, sprites.p_red_1],
                ],
                frequency: 5,
                angle: [helpers_11.DEG_180, 0],
                mass: [20, 50],
            });
            let inflict = spell.addBehaviour();
            inflict.onCollision = target => {
                target.addBehaviour(new behaviours_3.Bleeding(target));
            };
        }
    };
    exports.Allegiance = {
        tags: NONE,
        name: "Allegiance",
        description: "Summon your honour guard after resurrections",
        onResurrect() {
            for (let i = 0; i < 3; i++) {
                let unit = (0, objects_4.SkeletonLord)();
                unit.updateSpeed = 200;
                game.spawn(unit, i * -15, 0);
            }
        },
    };
    exports.Salvage = {
        tags: NONE,
        name: "Salvage",
        description: "Corpses become souls at the end of levels",
        onLevelEnd() {
            let corpses = game.objects.filter(object => object.is(tags_4.CORPSE));
            for (let corpse of corpses) {
                let emitter = fx.bones().extend({
                    ...corpse.center(),
                    variants: [[sprites.p_green_skull]],
                    duration: [100, 1000],
                });
                emitter.burst(5);
                emitter.remove();
                game.despawn(corpse);
                game.addSouls(5);
            }
        },
    };
    exports.Studious = {
        tags: NONE,
        rarity: game_5.RARE,
        name: "Studious",
        description: "Rituals are 50% cheaper",
        onShopEnter() {
            for (let item of shop_2.shop.items) {
                item.cost = item.cost / 2 | 0;
            }
        },
    };
    exports.Electrodynamics = {
        tags: NONE,
        rarity: game_5.RARE,
        name: "Electrodynamics",
        description: "Lightning strikes after hits",
        onCast(spell) {
            spell.addBehaviour(new behaviours_3.LightningStrike(spell));
        },
    };
    exports.Chilly = {
        tags: NONE,
        name: "Chilly",
        description: "10% chance to freeze enemies",
        onCast(spell) {
            if ((0, helpers_11.randomFloat)() <= 0.1) {
                spell.emitter.variants = [[sprites.p_ice_1, sprites.p_ice_2, sprites.p_ice_3]];
                spell.sprite = sprites.p_skull;
                spell.getBehaviour(behaviours_3.Damaging).amount = 0;
                // Frozen has to be added before other behaviours, so that it can prevent
                // them from updating
                spell.addBehaviour().onCollision = target => {
                    // King can't be frozen
                    if (target.mass < 1000) {
                        target.addBehaviour(new behaviours_3.Frozen(target), 0);
                    }
                };
            }
        },
    };
    exports.Giants = {
        tags: NONE,
        name: "Giants",
        description: "20% chance to resurrect giant skeletons",
        onResurrection(object) {
            if ((0, helpers_11.randomFloat)() < 0.2) {
                game.despawn(object);
                game.spawn((0, objects_4.SkeletonLord)(), object.x, object.y);
            }
        },
    };
    exports.Avarice = {
        tags: NONE,
        name: "Avarice",
        description: "+1 soul for each corpse you resurrect",
        onResurrection() {
            game.addSouls(1);
        },
    };
    exports.Hardened = {
        tags: NONE,
        name: "Hardened",
        description: "Undead have +1 HP*",
        onResurrection(object) {
            object.hp = object.maxHp += 1;
        }
    };
});
define("index", ["require", "exports", "sprites", "engine", "game", "renderer", "actions", "helpers", "objects", "levels", "rituals", "shop", "fx", "sounds", "behaviours"], function (require, exports, sprites, engine_5, game_6, renderer_2, actions_4, helpers_12, objects_5, levels_2, rituals_1, shop_3, fx_1, sounds_2, behaviours_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let player = (0, objects_5.Player)();
    player.sprite = sprites.skull;
    let game = new game_6.Game(player);
    let paused = false;
    const ARROW_UP = 38;
    const ARROW_DOWN = 40;
    const SPACE = 32;
    const ENTER = 13;
    const KEY_P = 80;
    const INTRO_DIALOGUE = [
        "Norman wasn't a particularly popular necromancer...",
        "         The other villagers hunted him.",
        "     Sometimes they even finished the job (@)",
        "  But like any self-respecting necromancer...",
        "        Norman just brought himself back.",
    ];
    const OUTRO_DIALOGUE = [
        "",
        "It was over.",
        "Norman was able to study peacefully.",
        "But he knew that eventually, they'd be back.",
        "THE END",
    ];
    let castTimerId = 0
    let pointerDownState = -1
    function getShopLine(shopModule, scenePos) {
        const fontLineHeight = require('font').lineHeight // 7
        const sceneOriginY = 150
        const shopY = 20
        const shopTextY = sceneOriginY - shopY
        const shopItemCount = shopModule.shop.items.length
        let shopLine = Math.floor((shopTextY - scenePos.y) / fontLineHeight)
        shopLine -= 2 // "Rituals\n\n" takes up top two lines
        return shopLine
    }
    onpointerdown = () => {
        pointerDownState = game.state
        if (game.state === game_6.INTRO) {
            return
        }
        (0, actions_4.Cast)();
        castTimerId = setInterval((0, actions_4.Cast), 400)
    };
    onpointerup = ({ clientX, clientY }) => {
        clearInterval(castTimerId)
        if (game.state != pointerDownState) {
            return
        }
        if (game.state === game_6.INTRO) {
            (0, sounds_2.play)();
            game.state = game_6.PLAYING;
            game.player.sprite = sprites.norman_arms_down;
            return
        } else if (game.state === game_6.SHOPPING) {
            const shopModule = require('shop')
            if (!shopModule.shop.ready) {
                return
            }
            const p1 = (0, renderer_2.screenToSceneCoords)(clientX, clientY);
            let shopLine = getShopLine(shopModule, p1)
            console.log({ clientX, clientY }, p1, shopLine)
            const shopItemCount = shopModule.shop.items.length
            if (0 <= shopLine && shopLine < shopItemCount) {
                shopModule.shop.selectedIndex = shopLine
                shopModule.buy()
            }
            return
        }
    };
    onpointermove = ({ clientX, clientY }) => {
        let p1 = player.center();
        let p2 = (0, renderer_2.screenToSceneCoords)(clientX, clientY);
        game.spell.targetAngle = (0, helpers_12.angleBetweenPoints)(p1, p2);
        if (game.state === game_6.SHOPPING) {
            const shopModule = require('shop')
            if (!shopModule.shop.ready) {
                return
            }
            let shopLine = getShopLine(shopModule, p2)
            console.log({ clientX, clientY }, p2, shopLine)
            const shopItemCount = shopModule.shop.items.length
            if (0 <= shopLine && shopLine < shopItemCount) {
                shopModule.shop.selectedIndex = shopLine
            }
            return
        }
    };
    onkeydown = ({ which: key }) => {
        if (game.state === game_6.PLAYING) {
            if (key === SPACE)
                (0, actions_4.Resurrect)();
            if (key === KEY_P)
                paused = !paused;
        }
        else if (game.state === game_6.SHOPPING) {
            if (key === ARROW_UP)
                (0, shop_3.selectShopIndex)(-1);
            if (key === ARROW_DOWN)
                (0, shop_3.selectShopIndex)(+1);
            if (key === ENTER)
                (0, shop_3.buy)();
        }
    };
    let normanIsBouncing = false;
    function update(dt) {
        updateDialogue(dt);
        (0, renderer_2.render)(dt);
        if (paused)
            return;
        if (game.state === game_6.PLAYING) {
            (0, levels_2.updateLevel)(dt);
        }
        if (game.state !== game_6.INTRO) {
            game.update(dt);
        }
        (0, engine_5.updateTweens)(dt);
        (0, engine_5.updateParticles)(dt);
        if (game.state === game_6.PLAYING && (0, levels_2.isLevelFinished)()) {
            if ((0, levels_2.isComplete)()) {
                onWin();
            }
            else {
                game.onLevelEnd();
                (0, shop_3.enterShop)();
            }
        }
        if (game.level === 2 && !normanIsBouncing) {
            game.player.addBehaviour(new behaviours_4.March(game.player, 0));
            game.player.updateClock = 100;
            game.player.updateSpeed = 60_000 / sounds_2.BPM * 2;
            normanIsBouncing = true;
        }
    }
    function onWin() {
        game.state = game_6.WIN;
        game.dialogue = OUTRO_DIALOGUE;
    }
    let dialogueTimer = 0;
    function updateDialogue(dt) {
        if ((dialogueTimer += dt) > 4000) {
            game.dialogue.shift();
            dialogueTimer = 0;
            // If the player watched the whole dialogue, remind them to click to start
            if (game.state === game_6.INTRO && game.dialogue.length === 0) {
                game.dialogue.push("                (Click to begin)");
            }
        }
    }
    game.addRitual(rituals_1.Streak);
    shop_3.shop.rituals = [
        rituals_1.Bouncing,
        rituals_1.Ceiling,
        rituals_1.Rain,
        rituals_1.Doubleshot,
        rituals_1.Hunter,
        rituals_1.Weightless,
        rituals_1.Knockback,
        rituals_1.Drunkard,
        rituals_1.Seer,
        rituals_1.Tearstone,
        rituals_1.Impatience,
        rituals_1.Bleed,
        rituals_1.Salvage,
        rituals_1.Studious,
        rituals_1.Electrodynamics,
        rituals_1.Chilly,
        rituals_1.Giants,
        rituals_1.Avarice,
        rituals_1.Hardened,
        rituals_1.Allegiance,
    ];
    game.dialogue = INTRO_DIALOGUE;
    (0, engine_5.init)(game.stage.width, game.stage.height, update);
    (0, fx_1.dust)().burst(200);
});
