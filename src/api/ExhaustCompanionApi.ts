import Exhaust from './Exhaust';
import Updatable from './Updatable';
import Location from './Location';
import AlphaColor from '../AlphaColor';

interface ExhaustCompanionApi extends Updatable<Exhaust> {
  new: (loc: Location, radius: number, dx: number, dy: number, alphaColor: AlphaColor) => Exhaust;
  maybeNewCarExhaust: (loc: Location, isIdling: boolean) => Exhaust[];
  maybeNewCometExhaust: (loc: Location) => Exhaust[];
  updateAll: (exhaustClouds: Exhaust[]) => Exhaust[];
  highLikelihoodOfSmoke: () => number[];
  lowLikelihoodOfSmoke: () => number[];
  calcAlpha: (age: number) => number;
}

export default ExhaustCompanionApi;
