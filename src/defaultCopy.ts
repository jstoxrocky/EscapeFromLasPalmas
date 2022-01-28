import { canvasWidth } from './screensize';

interface DefaultCopy {
    x: number,
    color: string,
    align: CanvasTextAlign,
}

const defaultCopy: DefaultCopy = {
    x: canvasWidth / 2,
    color: "#fffce3",
    align: "center",
}

export default defaultCopy;
