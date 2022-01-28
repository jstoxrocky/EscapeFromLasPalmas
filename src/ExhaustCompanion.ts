import ExhaustCompanionApi from './api/ExhaustCompanionApi';

const R = 100;
const G = 150;
const B = 200;
const REV_RADIUS = 25;
const REV_DISPLAY_THRESHOLD = 0.01;
const IDLE_RADIUS = 10;
const IDLE_DISPLAY_THRESHOLD = 0.75;
const MAX_AGE = 100;
const ALPHA_MULTIPLIER = 0.00133;
const SPEED = -10;
const GROW_RATE = 1;

const ExhaustCompanion: ExhaustCompanionApi = {
  new: (loc, radius, dx, dy, color) => ({
    loc,
    radius,
    color,
    dx,
    dy,
    age: 0,
  }),

  maybeNewCarExhaust: (loc, isIdling) => {
    const maybeRadius = ExhaustCompanion.getRadius(isIdling);
    return maybeRadius.map((radius) => ExhaustCompanion.new(loc, radius, SPEED, Math.random() - 0.5, ExhaustCompanion.exhaustColor(0)));
  },

  maybeNewCometExhaust: (loc) => {
    const maybeRadius = ExhaustCompanion.getRadius(false);
    const color = ExhaustCompanion.smokeColor(0);
    return maybeRadius.map(radius => ExhaustCompanion.new(loc, radius, 1, -15, color));
  },

  update: (exhaust) => {
    const x = exhaust.loc.x + exhaust.dx;
    const y = exhaust.loc.y + exhaust.dy;
    const loc = { ...exhaust.loc, x, y };
    const age = exhaust.age + 1;
    const radius = exhaust.radius + GROW_RATE;
    const color = ExhaustCompanion.exhaustColor(age);
    return {
      ...exhaust, loc, age, color, radius,
    };
  },

  updateAll: (exhaustClouds) => {
      return exhaustClouds.flatMap(exhaust => {
        const agePred = exhaust.age > MAX_AGE;
        const xPred = exhaust.loc.x + exhaust.radius < 0;
        const yPred = exhaust.loc.y + exhaust.radius < 0;
        return agePred || xPred || yPred ? [] : [ExhaustCompanion.update(exhaust)]
      });
  },

  getRadius: (isIdling) => {
    if (isIdling) {
      return Math.random() > IDLE_DISPLAY_THRESHOLD
        ? [IDLE_RADIUS * Math.random()]
        : [];
    }
    return Math.random() > REV_DISPLAY_THRESHOLD
      ? [REV_RADIUS * Math.random()]
      : [];
  },

  exhaustColor: (age) => `rgb(${R}, ${G}, ${B}, ${(MAX_AGE - age * 4) * ALPHA_MULTIPLIER})`,

  smokeColor: (age) => `rgb(255, 0, 0, ${(MAX_AGE - age * 4) * ALPHA_MULTIPLIER})`,
};

export default ExhaustCompanion;
