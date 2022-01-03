import Updatable from "./Updatable";
import Hero from "./Hero";

interface HeroActionsApi extends Updatable<Hero> {
    new: (yLimit: number) => Hero;
    jump: (hero: Hero) => Hero;
}

export default HeroActionsApi;
