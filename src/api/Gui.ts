interface Gui {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  assets: HTMLImageElement[];
  nightImages: HTMLImageElement[];
  dayImages: HTMLImageElement[];
  carImages: HTMLImageElement[];
  fonts: FontFace[];
}

export default Gui;
