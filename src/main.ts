import Collision from './Collision';
import Controller from './Controller';
import Gui from './api/Gui';
import loadImages from './imageLoaders';
import loadNightImages from './nightImageLoaders';
import loadDayImages from './dayImageLoaders';
import loadMontageImages from './montageImageLoaders';
import loadCarImages from './carImageLoaders';
import loadFonts from './fonts';
import Screen from './api/Screen';
import GameState from './api/GameState';
import Setter from './api/Setter';
import GuiCompanion from  './GuiCompanion';
import GameStateCompanion from  './GameStateCompanion';

const canvas = <HTMLCanvasElement>document.getElementById('game');
let state: GameState;
const setState: Setter<GameState> = s => { state = s }
let gui: Gui;
let screen = Screen.ClickToStart; 
const setScreen: Setter<Screen> = s => { screen = s}
let pausedFrameId = 0;

loadImages.then(images => {
  loadCarImages.then(carImages => {
    loadNightImages.then(nightImages => {
      loadDayImages.then(dayImages => {
        loadMontageImages.then(montageImages => {
          loadFonts.then(fonts => {
            gui = GuiCompanion.new(canvas, images, nightImages, dayImages, carImages, fonts);
            const asyncs = Controller.getMontageDrawers(gui, montageImages);
            playMontage(asyncs);
          });
        });
      });
    });
  });
});

const animate = () => {
  const frameId = requestAnimationFrame(animate);
  // Add comets
  if (Controller.addCometTime(frameId, pausedFrameId)) { Controller.addComets(state, setState) }

  // Update
  GameStateCompanion.update(state, setState);

  // Draw
  Controller.draw(state, gui);

  // Collision detection
  if (Collision.detected(state)) {
    cancelAnimationFrame(frameId);
    pausedFrameId = frameId;
    setScreen(Screen.Locked);
    Controller.drawGameOver(setScreen, gui, state.hero.distanceTravelled);
  }
};

const playMontage: (
  ps: (() => Promise<void>)[],
) => void = ps => {
  const [p, ...tail] = ps;
  if (typeof p === 'undefined') {
    return;
  }
  p().then(() => {
    if (screen != Screen.Playing) {
      playMontage(tail);
    }
  });
};

canvas.addEventListener('click', () => {
  switch (screen) {
    case Screen.Locked:
      break;
    case Screen.ClickToStart:
      Controller.startNewGame(setState, setScreen);
      animate();
      break;
    case Screen.Playing:
      Controller.revEngine(state, setState)
      break;
    default:
      break;
  }
});
