const montageImageUrls: string[] = [
    '../assets/montage/01.png',
    '../assets/montage/02.png',
    '../assets/montage/03.png',
    '../assets/montage/04.png',
    '../assets/montage/05.png',
    '../assets/montage/06.png',
    '../assets/montage/07.png',
];
  
  const montageImageLoaders = montageImageUrls.map(url => new Promise<HTMLImageElement>(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = url;
  }));
  
  const loadMontageImages = Promise.all(montageImageLoaders);
  
  export default loadMontageImages;
  