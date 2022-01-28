import Gui from "./api/Gui";
import {canvasWidth, canvasHeight} from './screensize';

interface GuiCompanion {
    new: (
        canvas: HTMLCanvasElement,
        assets: HTMLImageElement[],
        nightImages: HTMLImageElement[],
        dayImages: HTMLImageElement[],
        fonts: FontFace[],
    ) => Gui
}

const checkContext = (maybeCtx: CanvasRenderingContext2D | null) => {
    if (!maybeCtx) {
        throw new Error('Failed to get 2D context');
    } else {
        return maybeCtx;
    }
};

const guiCompanion: GuiCompanion = {
    new: (
        canvas,
        assets,
        nightImages,
        dayImages,
        fonts,
    ) => {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        document.fonts.add(fonts[0]);
        const ctx = checkContext(canvas.getContext('2d'));
        return {
            canvas,
            ctx,
            assets,
            nightImages,
            dayImages,
            fonts,
        };
    },
}

export default guiCompanion;
