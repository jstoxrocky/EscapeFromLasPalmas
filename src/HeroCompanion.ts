import HeroCompanionApi from './api/HeroCompanionApi';
import { canvasWidth, canvasHeight } from './screensize';
import carIndex from './commandCenter';
import offsets from './offsets';

const JUMP_VELOCITY = 10;
const WOBBLE_SPEED = 5;
const WOBBLE_SWING = 5;
const GRAVITY = -0.8;
const LEFT_BUFFER = 5;
const BOTTOM_BUFFER = 100;
const DRIFT = 0.1;

const HeroCompanion: HeroCompanionApi = {
  new: () => ({
    loc: { x: LEFT_BUFFER - offsets[carIndex].extension.left, y: canvasHeight - offsets[carIndex].bottom - BOTTOM_BUFFER },
    dx: 0,
    width: offsets[carIndex].width,
    color: '#959088',
    swayCounter: 0,
    isIdling: true,
    isBraking: false,
    drift: 0,
    distanceTravelled: 0,
  }),

  update: (hero) => {
    const prevSway = HeroCompanion.calcSway(hero.swayCounter);
    const leftThreshold = LEFT_BUFFER;
    const isAtLeft = hero.loc.x - offsets[carIndex].extension.left <= leftThreshold + prevSway;
    const isAtRight = (hero.loc.x + offsets[carIndex].extension.right) > canvasWidth;
    const isBraking = hero.dx < 0;
    const isIdling = hero.dx == 0;
    const drift = hero.drift + DRIFT;
    const distanceTravelled = drift + hero.loc.x / 20;

    if (isAtRight) {
      const dx = 0;
      const x = canvasWidth - offsets[carIndex].extension.right;
      const loc = { ...hero.loc, x };
      const isIdling = false;
      const swayCounter = 360;
      return {
        ...hero, loc, dx, isIdling, isBraking, drift, distanceTravelled, swayCounter
      };
    } if (isAtLeft && (isIdling || isBraking)) {
      const swayCounter = (hero.swayCounter + 1) % 360;
      const nextSway = HeroCompanion.calcSway(swayCounter);
      const dx = 0;
      const nextX = leftThreshold + nextSway;
      const x = nextX >= 0 ? nextX - offsets[carIndex].extension.left: 0 - offsets[carIndex].extension.left;
      const loc = { ...hero.loc, x };
      const isIdling = true;
      return {
        ...hero, loc, dx, swayCounter, isIdling, isBraking, drift, distanceTravelled
      };
    } else {
      // Apply gravity
      const dx = hero.dx + GRAVITY;
      const nextX = hero.loc.x + dx;
      const x = nextX >= 0 ? nextX : 0;
      const loc = { ...hero.loc, x };
      const isIdling = false;
      const swayCounter = 360;
      return {
        ...hero, loc, dx, isIdling, isBraking, drift, distanceTravelled, swayCounter
      };
    }
  },

  rev: (hero) => ({ ...hero, dx: JUMP_VELOCITY }),

  calcSway: (swayCounter) => (
    Math.sin(WOBBLE_SPEED * (Math.PI / 180) * swayCounter) * WOBBLE_SWING
  ),
};

export default HeroCompanion;
