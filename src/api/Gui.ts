interface Gui {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  assets: HTMLImageElement[];
  nightImages: HTMLImageElement[];
  dayImages: HTMLImageElement[];
  fonts: FontFace[];
}

export default Gui;
