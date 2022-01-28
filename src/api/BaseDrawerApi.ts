import Gui from './Gui';
import Copy from './Copy';
import Drawable from './Drawable';

interface BaseDrawerApi {
    drawCircle: (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        radius: number,
        color: string
    ) => void;

    drawText: (
        ctx: CanvasRenderingContext2D,
        copy: Copy,
        options?: object,
    ) => void;

    drawCenteredText: (
        gui: Gui,
        copy: string,
        origin: number,
        divHeight: number,
        fontSize: number,
        options?: object,
    ) => void;

    drawDeadCenteredText: (
        gui: Gui,
        copy: string,
        fontSize: number,
        options?: object,
    ) => void;

    drawCenteredPhrases: (
        gui: Gui,
        copy: string[],
        origin: number,
        divHeight: number,
        fontSize: number,
        options?: object,
    ) => void;

    drawStretchedImage: (
        gui: Gui,
        drawable: Drawable,
        options?: object,
    ) => void;

    drawImage: (
        gui: Gui,
        img: HTMLImageElement,
        x: number,
        y: number,
        options?: object,
    ) => void;

    drawCenteredImage: (
        gui: Gui,
        img: HTMLImageElement,
        origin: number,
        targetWidth: number,
        options?: object,
    ) => void;

    drawDeadCenteredImage: (
        gui: Gui,
        img: HTMLImageElement,
        targetWidth: number,
        options?: object,
    ) => void;

    drawFullWidthDeadCenteredImage: (
        gui: Gui,
        img: HTMLImageElement,
        options?: object,
    ) => void;

    clearScreen: (
        gui: Gui,
    ) => void;

    eraseScreen: (
        gui: Gui,
        xOrigin: number,
        yOrigin: number,
        xLimit: number,
        yLimit: number,
    ) => void;

    eraseAllScreen: (
        gui: Gui,
    ) => void;

    fillDefaultBackground: (
        gui: Gui,
    ) => void;

    fillBackground: (
        gui: Gui,
        color: string,
    ) => void;
}

export default BaseDrawerApi;
