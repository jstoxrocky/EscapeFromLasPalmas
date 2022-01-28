interface Fonts {
  name: string;
  url: string;
}

const fontResources: Fonts[] = [
  { name: 'PressStart', url: 'url(../assets/fonts/PressStart2P-Regular.ttf)' },
];

const fontLoaders = fontResources.map(resource => {
  const font = new FontFace(resource.name, resource.url);
  return font.load();
});

const loadFont = Promise.all(fontLoaders);

export default loadFont;
