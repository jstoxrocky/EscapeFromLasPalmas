import CollisionApi from './api/CollisionApi';
import Circle from './api/Circle';
import Hero from './api/Hero';
import carIndex from "./commandCenter";
import offsets from './offsets';


// http://www.jeffreythompson.org/collision-detection/poly-circle.php
const Collision: CollisionApi = {
  detectCircleCircleCollision: (c1: Circle, c2: Circle) => {
    const dist = Math.hypot(c1.loc.x - c2.loc.x, c1.loc.y - c2.loc.y);
    return dist - c1.radius - c2.radius < 1;
  },

  detectCircleHeroCollision: (c: Circle, hero: Hero) => {
    const shape = offsets[carIndex].shape.map(car => {
      return { x: hero.loc.x + car.x, y: hero.loc.y + car.y }
    })
    return Collision.polyCircle(
      shape,
      c.loc.x,
      c.loc.y,
      c.radius,
    );
  },

  detected: (state) => {
    const loop = (comets: Circle[], hero: Hero): boolean => {
      const [comet, ...tail] = comets;
      if (typeof comet === 'undefined') {
        return false;
      }
      return Collision.detectCircleHeroCollision(comet, hero) || loop(tail, hero);
    }

    return loop(state.comets, state.hero);
  },

  polyCircle: (vertices, cx, cy, r) => {
    let next = 0;
    for (let current = 0; current < vertices.length; current++) {
      next = current + 1;
      if (next == vertices.length) next = 0;
      const collision: boolean = Collision.lineCircle(
        vertices[current].x,
        vertices[current].y,
        vertices[next].x,
        vertices[next].y,
        cx,
        cy,
        r,
      );
      if (collision) return true;
    }

    return false;
  },

  lineCircle: (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cx: number,
    cy: number,
    r: number,
  ) => {
    const inside1: boolean = Collision.pointCircle(x1, y1, cx, cy, r);
    const inside2: boolean = Collision.pointCircle(x2, y2, cx, cy, r);
    if (inside1 || inside2) return true;

    const distX = x1 - x2;
    const distY = y1 - y2;
    const len = Math.sqrt(distX * distX + distY * distY);
    const dot = ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / len ** 2;
    const closestX = x1 + dot * (x2 - x1);
    const closestY = y1 + dot * (y2 - y1);
    const onSegment: boolean = Collision.linePoint(
      x1,
      y1,
      x2,
      y2,
      closestX,
      closestY,
    );
    if (!onSegment) return false;

    const distX2 = closestX - cx;
    const distY2 = closestY - cy;
    const distance = Math.sqrt(distX2 * distX2 + distY2 * distY2);
    if (distance <= r) {
      return true;
    }

    return false;
  },

  linePoint: (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    px: number,
    py: number,
  ) => {
    const d1 = Math.hypot(px - x1, py - y1);
    const d2 = Math.hypot(px - x2, py - y2);
    const lineLen = Math.hypot(x1 - x2, y1 - y2);
    const buffer = 0.1; // lower to make more accurate
    if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
      return true;
    }

    return false;
  },

  pointCircle: (px: number, py: number, cx: number, cy: number, r: number) => {
    const distance = Math.hypot(px - cx, py - cy);
    if (distance <= r) {
      return true;
    }

    return false;
  },
};

export default Collision;
