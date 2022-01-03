import Location from "./Location";

interface Hero {
    loc: Location;
    radius: number;
    color: string;
    yVelocity: number;
    yLimit: number;
    rotationCounter: number;
    isJumping: boolean;
}

export default Hero;
