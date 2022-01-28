import Hero from './Hero';
import Exhaust from './Exhaust';
import Comet from './Comet';
import Foreground from './Foreground';

interface GameState {
  hero: Hero;
  carExhaust: Exhaust[];
  cometExhaust: Exhaust[];
  comets: Comet[];
  foreground: Foreground;
  cometRand: () => number;
}

export default GameState;
