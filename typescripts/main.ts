import HeroActions from "./HeroActions";
import Exhaust from "./api/Exhaust";
import ExhaustActions from "./ExhaustActions";

const canvas = <HTMLCanvasElement>document.getElementById('render');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let frame = 0;
let hero = HeroActions.new(canvas.height)
let exhaustClouds: Exhaust[] = [];

const drawHero = () => {
    c.beginPath();
    c.arc(hero.loc.x, hero.loc.y, hero.radius, 0, Math.PI * 2, false);
    c.fillStyle = hero.color;
    c.fill();
}

const drawExhaust = () => {
    exhaustClouds.forEach(exhaust => {
        c.beginPath();
        c.arc(exhaust.loc.x, exhaust.loc.y, exhaust.radius, 0, Math.PI * 2, false);
        c.fillStyle = exhaust.color;
        c.fill();
    })
}

const animate = () => {
    // Pure core
    hero = HeroActions.update(hero);
    exhaustClouds = ExhaustActions.updateAll(exhaustClouds, hero.loc, hero.isJumping);
    
    // Side effects
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    drawExhaust();
    drawHero();
    frame = requestAnimationFrame(animate);
}

window.addEventListener('click', (e) => {
    hero = HeroActions.jump(hero);
})

animate();
