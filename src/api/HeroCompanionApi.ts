import Updatable from './Updatable';
import Hero from './Hero';
import ImgIndex from './ImageIndex';

interface HeroCompanionApi extends Updatable<Hero> {
  new: () => Hero;
  rev: (hero: Hero) => Hero;
  calcSway: (swayCounter: number) => number;
}

export default HeroCompanionApi;
