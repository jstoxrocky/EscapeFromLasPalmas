import CometCompanionApi from './api/CometCompanionApi';
import Comet from './api/Comet';

// comet
//// -> 20%

// rotat up/down
// reduce image size to w130 h346

const IMAGE_HEIGHT = 346

const CometCompanion: CometCompanionApi = {
  getRandomInt: (max, cometRand) => Math.floor(cometRand() * max),

  generate: (xLimit, yLimit, cometRand) => {
    const randNum = 1 + CometCompanion.getRandomInt(2, cometRand);
    return [...Array(randNum).keys()].map(() => CometCompanion.new(xLimit, yLimit, cometRand));
  },

  new: (xLimit, yLimit, cometRand) => {
    const x = cometRand() * xLimit;
    const radius = cometRand() * 10 + 10; // between 10 and 20 (20 - 40d)
    const y = -radius;
    const loc = { x, y };
    const colorRand = cometRand();
    const color = colorRand <= 0.33 ? '#FFAA00' : colorRand <= 0.66 ? '#FC9303' : '#FF7B00';
    
    const dx = -1 * (cometRand() + 0.5);
    const dy = 10

    const rotation = Math.atan(Math.abs(dx) / dy);
    
    return {
      loc,
      radius,
      color,
      dy,
      dx,
      yLimit,
      rotation
    };
  },

  update: (comet) => {
    const y = comet.loc.y + comet.dy;
    const x = comet.loc.x + comet.dx;
    const loc = { ...comet.loc, y, x };
    return { ...comet, loc };
  },

  updateAll: (comets) => {
    const loop: (
      comets: Comet[],
      acc: Comet[]
    ) => Comet[] = (comets, acc) => {
      const [comet, ...tail] = comets;
      if (typeof comet === 'undefined') {
        return acc;
      }
      if (comet.loc.y <= comet.yLimit + IMAGE_HEIGHT) {
        return loop(tail, acc.concat([CometCompanion.update(comet)]));
      }
      return loop(tail, acc);
    };
    return loop(comets, []);
  },
};

export default CometCompanion;
