import Location from './Location';

interface Comet {
  loc: Location;
  radius: number;
  color: string;
  dy: number;
  dx: number;
  yLimit: number;
  rotation: number;
}

export default Comet;
