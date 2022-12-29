import GameState from './api/GameState';
import CometActions from './CometCompanion';
import HeroCompanion from './HeroCompanion';
import Gui from './api/Gui';
import Drawer from './Drawer';
import BaseDrawer from './BaseDrawer';
import Screen from './api/Screen';
import Setter from './api/Setter';
import {canvasWidth, canvasHeight} from './screensize';
import GamestateCompanion from  './GameStateCompanion';

const Controller = {

  getMontageDrawers: (
    gui: Gui,
    montageImages: HTMLImageElement[],
  ) => {
    const draw = Drawer.drawMontage(gui, montageImages);
    const imgHeight = montageImages[0].height;
    
    const showProduction = async (): Promise<void>  => {
      BaseDrawer.clearScreen(gui);
      const copy = "joey stockermans 2022"
      const origin = canvasHeight * 0.33;
      const divHeight = canvasHeight * 0.33;
      const fontSize = divHeight * 0.12;    
      BaseDrawer.drawCenteredText(gui, copy, origin, divHeight, fontSize);
      showSkip();
      await delay(2);
    };

    const showSkip = (): void => {
      const copy = "skip";
      const imageOrigin = (canvasHeight - imgHeight) / 2;
      const skipOrigin = imageOrigin + imgHeight;
      const divHeight = canvasHeight - skipOrigin;
      const fontSize = divHeight * 0.12;
      BaseDrawer.drawCenteredText(gui, copy, skipOrigin, divHeight, fontSize, {"color": "#929082"});
    };

    const showTitle = async (): Promise<void>  => {
      BaseDrawer.clearScreen(gui);
      await delay(1);

      const copy = "Escape from Las Palmas"
      const origin = canvasHeight * 0.33;
      const divHeight = canvasHeight * 0.33;
      const fontSize = divHeight * 0.12;    
      BaseDrawer.drawCenteredText(gui, copy, origin, divHeight, fontSize);
      await delay(2);
    };

    const showStart = async (): Promise<void>  => {
      const copy = "Press start"
      const origin = canvasHeight * 0.66;
      const divHeight = canvasHeight * 0.33;
      const fontSize = divHeight * 0.12;
      BaseDrawer.drawCenteredText(gui, copy, origin, divHeight, fontSize);
    };

    const nextScene = async (i: number): Promise<void> => {
      BaseDrawer.clearScreen(gui);
      showSkip();
      await delay(1);
      draw(i);
      await delay(2);
    };

    return [
      showProduction,
      () => nextScene(0),
      () => nextScene(1),
      () => nextScene(2),
      () => nextScene(3),
      () => nextScene(4),
      () => nextScene(5),
      () => nextScene(6),
      showTitle,
      showStart,
    ]
  },

  drawGameOver: (
    setScreen: Setter<Screen>,
    gui: Gui,
    distanceTravelled: number,
  ) => {
    const [
      drawRip,
      drawCar,
      drawScore,
      startOrigin,
      startHeight
    ] = Drawer.getGameOverDrawers(gui, Math.floor(distanceTravelled));

    const play = async () => {
      await delay(1);
      BaseDrawer.clearScreen(gui);
      drawRip();
      drawCar();
      drawScore();

      await delay(1);
      setScreen(Screen.ClickToStart);
      const copy = "Ok";
      const startFontSize = startHeight * 0.2;
      BaseDrawer.drawCenteredText(gui, copy, startOrigin, startHeight, startFontSize);
    }

    play(); 
  },

  draw: (
    state: GameState,
    gui: Gui
  ) => {
    BaseDrawer.clearScreen(gui);
    Drawer.drawBackgroundImage(gui);
    Drawer.drawForeground(gui, state.foreground);
    Drawer.drawDistanceTravelled(gui, Math.floor(state.hero.distanceTravelled));
    Drawer.drawHero(gui, state.hero);
    Drawer.drawHeadlights(gui, state.hero, state.foreground);
    Drawer.drawExhaust(gui.ctx, state.carExhaust.concat(state.cometExhaust));
    Drawer.drawComets(gui, state.comets);
  },

  startNewGame: (
    setState: Setter<GameState>,
    setScreen: Setter<Screen>
  ) => {
    const state = GamestateCompanion.new();
    setState(state);
    setScreen(Screen.Playing)
  },

  revEngine: (
    state: GameState,
    setState: Setter<GameState>
  ) => {
    const hero = HeroCompanion.rev(state.hero);
    setState({...state, hero})
  },

  addComets: (
    state: GameState,
    setState: Setter<GameState>
  ) => {
    const comets = state.comets.concat(
      CometActions.generate(canvasWidth, canvasHeight, state.cometRand),
    );
    setState({ ...state, comets });
  },

  addCometTime: (frameId: number, pausedFrameId: number) => {
    return (frameId - pausedFrameId >= 200) && (frameId % 125 === 0);
  }
};

const delay = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000))

export default Controller;
