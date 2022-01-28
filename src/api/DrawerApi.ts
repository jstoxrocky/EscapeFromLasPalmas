import Hero from './Hero';
import Exhaust from './Exhaust';
import Comet from './Comet';
import Gui from './Gui';
import Foreground from './Foreground';

interface DrawerApi {

  drawDistanceTravelled: (
    gui: Gui,
    score: number,
  ) => void;

  drawHero: (
    gui: Gui,
    hero: Hero,
  ) => void;

  drawHeadlights: (
    gui: Gui,
    hero: Hero,
    foreground: Foreground,
  ) => void;

  drawExhaust: (
    ctx: CanvasRenderingContext2D,
    exhaustClouds: Exhaust[],
  ) => void;

  drawComets: (
    gui: Gui,
    comets: Comet[],
  ) => void;

  drawForeground: (
    gui: Gui,
    foreground: Foreground,
  ) => void;

  drawMontage: (
    gui: Gui,
    montageImages: HTMLImageElement[]
  ) => (i: number) => void;

  drawIntro: (
    gui: Gui,
  ) => void;

  getGameOverDrawers: (
    gui: Gui,
    score: number,
  ) => [
    () => void,
    () => void,
    () => void,
    () => void,
    number,
    number,
  ];

  drawBackgroundImage: (
    gui: Gui,
  ) => void;

  breakCopyIntoPhrases: (
    ctx: CanvasRenderingContext2D,
    copy: string,
    font: string,
    width: number
  ) => string[];
}

export default DrawerApi;
