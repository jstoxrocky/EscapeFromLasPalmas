import Exhaust from './Exhaust';
import Updatable from './Updatable';
import Location from './Location';

interface ExhaustCompanionApi extends Updatable<Exhaust> {
  new: (loc: Location, radius: number, dx: number, dy: number, color: string) => Exhaust;
  maybeNewCarExhaust: (loc: Location, isIdling: boolean) => Exhaust[];
  maybeNewCometExhaust: (loc: Location) => Exhaust[];
  updateAll: (exhaustClouds: Exhaust[]) => Exhaust[];
  getRadius: (isIdling: boolean) => number[];
  exhaustColor: (age: number) => string;
  smokeColor: (age: number) => string;
}

export default ExhaustCompanionApi;
