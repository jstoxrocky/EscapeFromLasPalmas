import Location from './Location';
import ImageIndex from './ImageIndex';

interface Hero {
  loc: Location;
  width: number;
  height: number;
  color: string;
  dx: number;
  xLimit: number;
  swayCounter: number;
  isIdling: boolean;
  isBraking: boolean;
  imageIndex: ImageIndex;
  drift: number;
  distanceTravelled: number;
}

export default Hero;
