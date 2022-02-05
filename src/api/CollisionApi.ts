import Hero from './Hero';
import Comet from './Comet';
import Circle from './Circle';
import Location from './Location';
import GameState from './GameState';

interface CollisionApi {
  detectCircleCircleCollision: (c1: Circle, c2: Circle) => boolean;
  detectCircleHeroCollision: (c: Circle, hero: Hero) => boolean;
  detected: (state: GameState) => boolean;
  polyCircle: (
    vertices: Location[],
    cx: number,
    cy: number,
    r: number
  ) => boolean;
  lineCircle: (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cx: number,
    cy: number,
    r: number
  ) => boolean;
  linePoint: (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    px: number,
    py: number
  ) => boolean;
  pointCircle: (
    px: number,
    py: number,
    cx: number,
    cy: number,
    r: number
  ) => boolean;
}

export default CollisionApi;
