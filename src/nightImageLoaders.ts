const nightImageUrls: string[] = [
    '../assets/foreground/night.png',
    '../assets/foreground/night_v1.png',
    '../assets/foreground/night_v2.png',
    '../assets/foreground/night_v3.png',
    '../assets/foreground/night_v4.png',
    '../assets/foreground/night_v5.png',
    '../assets/foreground/night_v6.png',
    '../assets/foreground/night_v7.png',
];
  
  const nightImageLoaders = nightImageUrls.map(url => new Promise<HTMLImageElement>(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = url;
  }));
  
  const loadNightImages = Promise.all(nightImageLoaders);
  
  export default loadNightImages;
  