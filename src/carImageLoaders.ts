import carImages from "./carImages";
import carIndex from "./commandCenter";

const carImageUrls: string[] = carImages[carIndex];

const carImageLoaders = carImageUrls.map(url => new Promise<HTMLImageElement>(resolve => {
  const img = new Image();
  img.onload = () => resolve(img);
  img.src = url;
}));

const loadCarImages = Promise.all(carImageLoaders);

export default loadCarImages;
