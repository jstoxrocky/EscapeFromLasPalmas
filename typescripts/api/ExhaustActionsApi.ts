import Exhaust from './Exhaust';
import Updatable from "./Updatable";
import Location from "./Location";

interface ExhaustActionsApi extends Updatable<Exhaust> {
    new: (loc: Location, radius: number) => Exhaust;
    maybeNew: (loc: Location, isJumping: boolean) => Exhaust[];
    updateAll: (exhaustClouds: Exhaust[], loc: Location, isJumping: boolean) => Exhaust[];
}

export default ExhaustActionsApi;
