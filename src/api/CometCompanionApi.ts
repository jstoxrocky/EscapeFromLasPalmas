import Comet from './Comet';
import Updatable from './Updatable';

interface CometCompanionApi extends Updatable<Comet> {
  new: (xLimit: number, yLimit: number, cometRand: () => number) => Comet;
  updateAll: (comets: Comet[]) => Comet[];
  getRandomInt: (max: number, cometRand: () => number) => number;
  generate: (xLimit: number, yLimit: number, cometRand: () => number) => Comet[];
}

export default CometCompanionApi;
