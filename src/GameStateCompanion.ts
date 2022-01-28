import GameState from "./api/GameState";
import HeroCompanion from './HeroCompanion';
import {canvasWidth, canvasHeight} from './screensize';
import ImageIndex from './api/ImageIndex';
import getRng from  './sfc32';
import ForegroundCompanion from './ForegroundCompanion';
import ExhaustCompanion from './ExhaustCompanion';
import CometActions from './CometCompanion';
import Setter from './api/Setter';

interface GameStateCompanion {
    new: () => GameState;
    update: (state: GameState, setState: Setter<GameState>) => void;
}

const gamestateCompanion: GameStateCompanion  = {
    new: () => ({
        hero: HeroCompanion.new(canvasWidth, canvasHeight, ImageIndex.Small),
        carExhaust: [],
        cometExhaust: [],
        comets: [],
        foreground: ForegroundCompanion.new(canvasHeight),
        cometRand: getRng(0xDEADBEEF),
    }),

    update: (state: GameState, setState: Setter<GameState>) => {
        const hero = HeroCompanion.update(state.hero);
        
        const comets = CometActions.updateAll(state.comets);
        const newCometExhaust = comets.flatMap(comet => ExhaustCompanion.maybeNewCometExhaust(comet.loc));
        const cometExhaust = ExhaustCompanion.updateAll(state.cometExhaust).concat(newCometExhaust)
        const newCarExhaust = ExhaustCompanion.maybeNewCarExhaust(
          { ...state.hero.loc, y: state.hero.loc.y + state.hero.height / 2 },
          state.hero.isIdling,
        );
        const carExhaust = ExhaustCompanion.updateAll(state.carExhaust).concat(newCarExhaust)    
        const foreground = ForegroundCompanion.update(state.foreground);
        setState({
          ...state, hero, carExhaust, cometExhaust, comets, foreground,
        });
    },
}

export default gamestateCompanion;
