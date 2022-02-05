import ExhaustCompanionApi from './api/ExhaustCompanionApi';
import AlphaColor from './AlphaColor';

const R = 100;
const G = 150;
const B = 200;
const REV_RADIUS = 25;
const HIGH_EXHAUST_DISPLAY_THRESHOLD = 0.01;
const IDLE_RADIUS = 10;
const LOW_EXHAUST_DISPLAY_THRESHOLD = 0.75;
const MAX_AGE = 100;
const ALPHA_MULTIPLIER = 0.00133;
const COMET_SPEED = -15;
const COMET_EXHAUST_DRIFT = 1;
const EXHAUST_SPEED = -10;
const GROW_RATE = 1;

const ExhaustCompanion: ExhaustCompanionApi = {
  new: (loc, radius, dx, dy, alphaColor) => ({
    loc,
    radius,
    alphaColor,
    dx,
    dy,
    age: 0,
  }),

  maybeNewCarExhaust: (loc, isIdling) => {
    const age = 0;
    const alpha = ExhaustCompanion.calcAlpha(age);
    const alphaColor = new AlphaColor(R, G, B, alpha)
    const maybeRadius = isIdling ? ExhaustCompanion.lowLikelihoodOfSmoke(): ExhaustCompanion.highLikelihoodOfSmoke();
    const dy = Math.random() - 0.5;
    return maybeRadius.map((radius) => ExhaustCompanion.new(loc, radius, EXHAUST_SPEED, dy, alphaColor));
  },

  maybeNewCometExhaust: (loc) => {
    const age = 0;
    const alpha = ExhaustCompanion.calcAlpha(age);
    const alphaColor = new AlphaColor(R, G, B, alpha)
    const maybeRadius = ExhaustCompanion.highLikelihoodOfSmoke();
    return maybeRadius.map(radius => ExhaustCompanion.new(loc, radius, COMET_EXHAUST_DRIFT, COMET_SPEED, alphaColor));
  },

  update: (exhaust) => {
    const x = exhaust.loc.x + exhaust.dx;
    const y = exhaust.loc.y + exhaust.dy;
    const loc = { ...exhaust.loc, x, y };
    const age = exhaust.age + 1;
    const alpha = ExhaustCompanion.calcAlpha(age);
    const alphaColor = new AlphaColor(exhaust.alphaColor.r, exhaust.alphaColor.g, exhaust.alphaColor.b, alpha)
    const radius = exhaust.radius + GROW_RATE;
    return {
      ...exhaust, loc, age, alphaColor, radius,
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

  highLikelihoodOfSmoke: () => {
    return Math.random() > HIGH_EXHAUST_DISPLAY_THRESHOLD
      ? [REV_RADIUS * Math.random()]
      : [];
  },

  lowLikelihoodOfSmoke: () => {
    return Math.random() > LOW_EXHAUST_DISPLAY_THRESHOLD
      ? [IDLE_RADIUS * Math.random()]
      : [];
  },

  calcAlpha: (age: number) => (MAX_AGE - age * 4) * ALPHA_MULTIPLIER,
};

export default ExhaustCompanion;
