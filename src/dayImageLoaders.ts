const dayImageUrls: string[] = [
    '../assets/foreground/day.png',
    '../assets/foreground/day_v1.png',
    '../assets/foreground/day_v2.png',
    '../assets/foreground/day_v3.png',
    '../assets/foreground/day_v4.png',
    '../assets/foreground/day_v5.png',
    '../assets/foreground/day_v6.png',
    '../assets/foreground/day_v7.png',
];
  
  const dayImageLoaders = dayImageUrls.map(url => new Promise<HTMLImageElement>(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = url;
  }));
  
  const loadDayImages = Promise.all(dayImageLoaders);
  
  export default loadDayImages;
  