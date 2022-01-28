import HeroCompanionApi from './api/HeroCompanionApi';

const JUMP_VELOCITY = 10;
const WOBBLE_SPEED = 5;
const WOBBLE_SWING = 5;
const GRAVITY = -0.8;
const LEFT_BUFFER = 5;
const BOTTOM_BUFFER = 70; // 0
const HEIGHT = 80;
const DRIFT = 0.1;

const HeroCompanion: HeroCompanionApi = {
  new: (xLimit, yLimit, imageIndex) => ({
    loc: { y: yLimit - HEIGHT - BOTTOM_BUFFER, x: LEFT_BUFFER },
    dx: 0,
    width: 80,
    height: HEIGHT,
    color: '#959088',
    xLimit,
    swayCounter: 0,
    isIdling: true,
    isBraking: false,
    imageIndex,
    drift: 0,
    distanceTravelled: 0,
  }),

  update: (hero) => {
    const prevSway = HeroCompanion.calcSway(hero.swayCounter);
    const leftThreshold = LEFT_BUFFER;
    const isAtLeft = hero.loc.x <= leftThreshold + prevSway;
    const rightBuffer = hero.width;
    const rightThreshold = hero.xLimit - rightBuffer;
    const isAtRight = hero.loc.x > rightThreshold;
    const isBraking = hero.dx < 0;
    const isIdling = hero.dx == 0;
    const drift = hero.drift + DRIFT;
    const distanceTravelled = drift + hero.loc.x / 20;

    if (isAtRight) {
      const dx = 0;
      const x = rightThreshold;
      const loc = { ...hero.loc, x };
      const isIdling = false;
      return {
        ...hero, loc, dx, isIdling, isBraking, drift, distanceTravelled
      };
    } if (isAtLeft && (isIdling || isBraking)) {
      const swayCounter = (hero.swayCounter + 1) % 360;
      const nextSway = HeroCompanion.calcSway(swayCounter);
      const dx = 0;
      const nextX = leftThreshold + nextSway;
      const x = nextX >= 0 ? nextX : 0
      const loc = { ...hero.loc, x };
      const isIdling = true;
      return {
        ...hero, loc, dx, swayCounter, isIdling, isBraking, drift, distanceTravelled
      };
    } else {
      // Apply gravity
      const dx = hero.dx + GRAVITY;
      const nextX = hero.loc.x + dx;
      const x = nextX >= 0 ? nextX : 0
      const loc = { ...hero.loc, x };
      const isIdling = false;
      return {
        ...hero, loc, dx, isIdling, isBraking, drift, distanceTravelled
      };
    }
  },

  rev: (hero) => ({ ...hero, dx: JUMP_VELOCITY }),

  calcSway: (swayCounter) => (
    Math.sin(WOBBLE_SPEED * (Math.PI / 180) * swayCounter) * WOBBLE_SWING
  ),
};

export default HeroCompanion;
