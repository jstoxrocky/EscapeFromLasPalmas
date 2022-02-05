import Location from './Location';
import AlphaColor from '../AlphaColor';

interface Exhaust {
  loc: Location;
  radius: number;
  alphaColor: AlphaColor;
  dx: number;
  dy: number;
  age: number;
}

export default Exhaust;
