import ForegroundCompanionApi from './api/ForegroundCompanionApi';
import Plane from './api/Plane';

const SPEED = -5;
const WIDTH = 762;
const HEIGHT = 375;
const MID_OFFSET = 25;
const REAR_OFFSET = 50;
const TOP_BUFFER = -50; // 20

// day
// reszie from 2036 -> 1016
// size 75%

// night
// size 75%
// brightness -100
// saturation 80

// background
// brightnes -15

const ForegroundCompanion: ForegroundCompanionApi = {
  new: (canvasHeight) => {
    const defaultImageIndex = 0;
    const forePlane = { loc: { x: 0, y: canvasHeight - HEIGHT + TOP_BUFFER }, imageIndex: defaultImageIndex };
    const midPlane = { loc: { x: 0, y: canvasHeight - HEIGHT + TOP_BUFFER - MID_OFFSET }, imageIndex: defaultImageIndex };
    const rearPlane = { loc: { x: 0, y: canvasHeight - HEIGHT + TOP_BUFFER - REAR_OFFSET }, imageIndex: defaultImageIndex };
    return {
      fore: [forePlane, {...forePlane, loc: {...forePlane.loc, x: WIDTH }}],
      mid: [midPlane, {...midPlane, loc: {...midPlane.loc, x: WIDTH }}],
      rear: [rearPlane, {...rearPlane, loc: {...rearPlane.loc, x: WIDTH }}],
    };
  },

  update: (foreground) => {
    const loop: (
      planes: Plane[],
      acc: Plane[],
      speed: number,
      getImageIndex: () => number,
    ) => Plane[] = (planes, acc, speed) => {
      const [plane, ...tail] = planes;
      if (typeof plane === 'undefined') {
        return acc;
      }
      const nextX = plane.loc.x + speed;
      if (nextX > -WIDTH) {
        const loc = {...plane.loc, x: nextX };
        return loop(tail, acc.concat([{...plane, loc }]), speed, getImageIndex);
      }

      const imageIndex = getImageIndex();
      const loc = {...plane.loc, x: nextX + (2 * WIDTH) };
      return loop(tail, acc.concat([{...plane, imageIndex, loc }]), speed, getImageIndex);
    };

    const fireThreshold = 0.6
    const getImageIndex: () => number = () => Math.random() > fireThreshold ? 1 + Math.floor(Math.random() * 7) : 0;
    const getDefaultImageIndex: () => number = () => 0;

    return {
      fore: loop(foreground.fore, [], SPEED, getImageIndex),
      mid: loop(foreground.mid, [], SPEED * 0.5, getDefaultImageIndex),
      rear: loop(foreground.rear, [], SPEED * 0.25, getDefaultImageIndex),
    };
  },
};

export default ForegroundCompanion;
