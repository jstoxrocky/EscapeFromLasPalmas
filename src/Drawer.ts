import DrawerApi from './api/DrawerApi';
import ImgIndex from './api/ImageIndex';
import BaseDrawer from './BaseDrawer';
import {canvasWidth, canvasHeight} from './screensize';
import defaultCopy from './defaultCopy';

const Drawer: DrawerApi = {

  drawHero: (gui, hero) => {
    const img = gui.assets[hero.imageIndex];
    gui.ctx.drawImage(img, hero.loc.x, hero.loc.y);
    if (hero.isBraking) {
      const x = hero.loc.x + 5;
      const y = hero.loc.y + hero.height / 2;
      const radiusSmall = 10;
      const radiusLarge = 20;
      const alphaSmall = 0.35;
      const alphaLarge = 0.15;
      const colorSmall = `rgb(255, 0, 0, ${alphaSmall})`
      const colorLarge = `rgb(255, 0, 0, ${alphaLarge})`
      BaseDrawer.drawCircle(gui.ctx, x, y, radiusSmall, colorSmall);
      BaseDrawer.drawCircle(gui.ctx, x, y, radiusLarge, colorLarge);
    }
  },

  drawExhaust: (gui, exhaustClouds) => {
    exhaustClouds.forEach(exhaust => {
      BaseDrawer.drawCircle(gui, exhaust.loc.x, exhaust.loc.y, exhaust.radius, exhaust.color);
    });
  },

  drawComets: (gui, comets) => {
    comets.forEach(comet => {
      const cometInImageWidth = 100;
      const ratio = comet.radius * 2 / cometInImageWidth;
      const imageWidth = 130;
      const imageHeight = 346;
      const img = gui.assets[ImgIndex.Comet];
      const xAdjustment = imageWidth * ratio * 0.5;
      const yAdjustment = imageHeight * ratio * 0.80;
      const imageX = comet.loc.x - xAdjustment;
      const imageY = comet.loc.y - yAdjustment;
      const targetWidth = imageWidth * ratio;
      const targetHeight = imageHeight * ratio;

      // Rotate
      gui.ctx.translate(comet.loc.x, comet.loc.y);
      gui.ctx.rotate(comet.rotation);
      gui.ctx.drawImage(img, imageX - comet.loc.x, imageY - comet.loc.y, targetWidth, targetHeight);
      gui.ctx.rotate(-comet.rotation);
      gui.ctx.translate(-comet.loc.x, -comet.loc.y);

      // Drawer.drawCircle(gui.ctx, comet.loc.x, comet.loc.y, comet.radius, 'green');
    });
  },

  drawForeground: (gui, foreground) => {
    const planes = foreground.rear.concat(foreground.mid).concat(foreground.fore);
    planes.forEach(plane => {
      const img = gui.nightImages[plane.imageIndex];
      BaseDrawer.drawImage(gui, img, plane.loc.x, plane.loc.y);
    })
  },

  drawHeadlights: (gui, hero, foreground) => {
    const headlightX = hero.loc.x + hero.width;
    const headlightY = hero.loc.y + hero.height / 2;
    const headlightXRange = 500;
    const headlightUpperYRange = headlightY - 250
    const headlightLowerYRange = headlightY + 70

    gui.ctx.save();
    gui.ctx.beginPath();
    gui.ctx.moveTo(headlightX, headlightY);
    gui.ctx.lineTo(headlightX + headlightXRange, headlightUpperYRange);
    gui.ctx.lineTo(headlightX + headlightXRange, headlightLowerYRange);
    gui.ctx.clip();

    foreground.fore.forEach(plane => {
      const img = gui.dayImages[plane.imageIndex];
      BaseDrawer.drawImage(gui, img, plane.loc.x, plane.loc.y);
    })

    gui.ctx.restore();
  },

  drawBackgroundImage: gui => {
    const img = gui.assets[ImgIndex.Background];
    BaseDrawer.drawFullWidthDeadCenteredImage(gui, img);
  },

  drawDistanceTravelled: (gui, distanceTravelled) => {
    const align = 'right';
    const copy = `${distanceTravelled}m`;
    const fontSize = 25;
    const x = canvasWidth - 10;
    const y = fontSize + 10;
    BaseDrawer.drawText(gui.ctx, {...defaultCopy, copy, x, y, fontSize, align });
  },

  
  drawMontage: (gui, montageImages) => {
    const draw = (i: number) => BaseDrawer.drawFullWidthDeadCenteredImage(gui, montageImages[i]);
    return draw;
  },

  drawIntro: (gui) => {
    const heightOfAThird = canvasHeight * 0.33;

    // Car
    const img = gui.assets[ImgIndex.Large];
    const targetCarWidth = canvasWidth * 0.9;
    
    // Copy
    const titleCopy = '1994 4Runner';

    // Origins and heights
    const topBufferOrigin = 0;
    const topBufferHeight = heightOfAThird * 0.1;
    const titleOrigin = topBufferOrigin + topBufferHeight;
    const titleHeight = heightOfAThird - topBufferHeight;
    const carOrigin = titleOrigin + titleHeight;

    // Font sizes
    const titleFontSize = titleHeight * 0.2;
    
    // Clear canvas
    BaseDrawer.clearScreen(gui);

    // Draw car
    BaseDrawer.drawCenteredImage(gui, img, carOrigin, targetCarWidth);
    BaseDrawer.drawCenteredText(gui, titleCopy, titleOrigin, titleHeight, titleFontSize);
  },

  getGameOverDrawers: (gui, score) => {
    const fontFace = 'PressStart';
    const heightOfAThird = canvasHeight * 0.33;

    // Car
    const img = gui.assets[ImgIndex.Large];
    const targetCarWidth = canvasWidth * 0.9;
    const ratio = targetCarWidth / img.width;
    const targetCarHeight = img.height * ratio; // Apply same ration to height
    
    // Origins and heights
    const topBufferOrigin = 0;
    const topBufferHeight = heightOfAThird * 0.1;
    const ripOrigin = topBufferOrigin + topBufferHeight;
    const ripHeight = heightOfAThird * 0.6;
    const dateOrigin = ripOrigin + ripHeight;
    const dateHeight = heightOfAThird - topBufferHeight - ripHeight;
    const carOrigin = dateOrigin + dateHeight;
    const carHeight = targetCarHeight;
    const scoreOrigin = carOrigin + carHeight;
    const scoreHeight = dateHeight;
    const startOrigin = scoreOrigin + scoreHeight;
    const startHeight = canvasHeight - startOrigin;

    // Font sizes
    const ripFontSize = ripHeight * 0.9;
    const dateFontSize = dateHeight * 0.3;
    const scoreFontSize = scoreHeight * 0.25;

    // Font
    const scoreFont = `${scoreFontSize}px ${fontFace}`;

    // Copy
    const ripCopy = `RIP`;
    const dateCopy = `1994 - ${new Date().getFullYear()}`
    const scoreCopy = `You were killed by flying molten lava after travelling ${score}m`
    const scorePhrases = Drawer.breakCopyIntoPhrases(gui.ctx, scoreCopy, scoreFont, canvasWidth * 0.75);

    const drawRip = () => BaseDrawer.drawCenteredText(gui, ripCopy, ripOrigin, ripHeight, ripFontSize);
    const drawCar = () => BaseDrawer.drawCenteredImage(gui, img, carOrigin, targetCarWidth);
    const drawDate = () => BaseDrawer.drawCenteredText(gui, dateCopy, dateOrigin, dateHeight, dateFontSize);
    const drawScore = () => BaseDrawer.drawCenteredPhrases(gui, scorePhrases, scoreOrigin, scoreHeight, scoreFontSize);
    return [drawRip, drawCar, drawDate, drawScore, startOrigin, startHeight];   
  },

  breakCopyIntoPhrases: (
    ctx: CanvasRenderingContext2D,
    copy: string,
    font: string,
    width: number
  ): string[] => {
    ctx.font = font
    const space = " "
    const phraseLimit = width;
    const loop = (words: string[], phrase: string[], phrases: string[]): string[] => {
      const [word, ...tail] = words;
      if (typeof word === 'undefined') {
        return phrases.concat([phrase.join(space)]);
      }
      const newPhrase = phrase.concat([word]);
      if (ctx.measureText(newPhrase.join(space)).width < phraseLimit) {
        return loop(tail, newPhrase, phrases)
      }
      return loop(tail, [], phrases.concat([newPhrase.join(space)]));
    }
    return loop(copy.split(space), [], [])
  }
};



export default Drawer;
