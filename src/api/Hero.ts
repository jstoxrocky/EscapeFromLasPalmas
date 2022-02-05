import Location from './Location';
import ImageIndex from './ImageIndex';

interface Hero {
  loc: Location;
  width: number;
  color: string;
  dx: number;
  swayCounter: number;
  isIdling: boolean;
  isBraking: boolean;
  drift: number;
  distanceTravelled: number;
}

export default Hero;
