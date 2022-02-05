import BaseDrawerApi from "./api/BaseDrawerApi";
import Copy from "./api/Copy";
import Drawable from "./api/Drawable"
import {canvasWidth, canvasHeight} from './screensize';
import defaultCopy from './defaultCopy';

const BaseDrawer: BaseDrawerApi = {
    drawCircle: (ctx, x, y, radius, color) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
    },

    drawText: (ctx, copy: Copy, options = {}) => {
        const finalCopy = {...copy, ...options};
        const fontFace = 'PressStart';
        ctx.fillStyle = finalCopy.color;
        ctx.font = `${finalCopy.fontSize}px ${fontFace}`;
        ctx.textAlign = finalCopy.align;
        ctx.fillText(finalCopy.copy, finalCopy.x, finalCopy.y);
    },

    drawCenteredText: (gui, copy, origin, divHeight, fontSize, options = {}) => {
        const y = origin + (divHeight / 2) + (fontSize / 2); 
        BaseDrawer.drawText(gui.ctx, {...defaultCopy, copy, y, fontSize }, options);
    },

    drawDeadCenteredText: (gui, copy, fontSize, options = {}) => {
        const y = (canvasHeight + fontSize) / 2;
        BaseDrawer.drawText(gui.ctx, {...defaultCopy, copy, y, fontSize }, options);
    },

    drawCenteredPhrases: (gui, phrases, origin, divHeight, fontSize, options = {}) => {
        const baseY = origin + (divHeight / 2) + (fontSize / 2);
        const lineSpacingMultiplier = 1.1;
        phrases.forEach((copy, index) => {
            const y = baseY + index * fontSize * lineSpacingMultiplier;
            BaseDrawer.drawText(gui.ctx, {...defaultCopy, copy, y, fontSize }, options);
        });
    },

    drawStretchedImage: (gui, drawable, options = {}) => {
        const finalDrawable = {...drawable, ...options }
        gui.ctx.drawImage(
            finalDrawable.img,
            finalDrawable.x,
            finalDrawable.y,
            finalDrawable.targetWidth,
            finalDrawable.targetHeight
        );
    },

    drawImage: (gui, img, x, y, options = {}) => {
        const drawable = {img, x, y, targetWidth: img.width, targetHeight: img.height }
        BaseDrawer.drawStretchedImage(gui, drawable, options);
    },

    drawCenteredImage: (gui, img, origin, targetWidth, options = {}) => {
        const ratio = targetWidth / img.width;
        const targetHeight = img.height * ratio; // Apply same ration to height
        const x = (canvasWidth - targetWidth) / 2;
        const y = origin
        const drawable = {img, x, y, targetWidth, targetHeight }
        BaseDrawer.drawStretchedImage(gui, drawable, options);
    },

    drawDeadCenteredImage: (gui, img, targetWidth, options = {}) => {
        const ratio = targetWidth / img.width;
        const targetHeight = img.height * ratio; // Apply same ration to height
        const origin = (canvasHeight - targetHeight) / 2;
        BaseDrawer.drawCenteredImage(gui, img, origin, targetWidth, options);
    },

    drawFullWidthDeadCenteredImage: (gui, img, options = {}) => {
        BaseDrawer.drawDeadCenteredImage(gui, img, canvasWidth, options);
    },

    clearScreen: (gui) => {
        BaseDrawer.eraseAllScreen(gui)
        BaseDrawer.fillBackground(gui, '#12110b');
    },

    eraseScreen: (gui) => {
        gui.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    },

    eraseAllScreen: (gui) => {
        BaseDrawer.eraseScreen(gui, 0, 0, canvasWidth, canvasHeight);
    },

    fillDefaultBackground: (gui) => {
        BaseDrawer.fillBackground(gui, '#12110b');
    },

    fillBackground: (gui, color) => {
        gui.ctx.fillStyle = color;
        gui.ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    },
}

export default BaseDrawer;
