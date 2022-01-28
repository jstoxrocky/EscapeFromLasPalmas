const imageUrls: string[] = [
  '../assets/car/small.png',
  '../assets/car/large.png',
  '../assets/misc/background.png',
  '../assets/misc/comet.png',
];

const imageLoaders = imageUrls.map(url => new Promise<HTMLImageElement>(resolve => {
  const img = new Image();
  img.onload = () => resolve(img);
  img.src = url;
}));

const loadImages = Promise.all(imageLoaders);

export default loadImages;
