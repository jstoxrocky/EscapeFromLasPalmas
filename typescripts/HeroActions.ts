import c from "./Constants";
import HeroActionsApi from "./api/HeroActionsApi";

const HeroActions: HeroActionsApi = {
    new: (yLimit) => ({
        loc: {x: 200, y: yLimit - 30},
        radius: 30,
        color: 'blue',
        yVelocity: 0,
        yLimit: yLimit,
        rotationCounter: 0,
        isJumping: false
    }),

    update: (hero) => {
        const prevRotationCounter = hero.rotationCounter % 360;
        const prevAngle = Math.sin(5 * (Math.PI / 180) * prevRotationCounter) * 10;
        const rotationCounter = (hero.rotationCounter + 1) % 360;
        const angle = Math.sin((c.WOBBLE_SPEED * Math.PI / 180) * rotationCounter) * c.WOBBLE_SWING;
        const bottomBuffer = hero.radius * 2
        const bottomThreshold = hero.yLimit - bottomBuffer;
        const topThreshold = hero.radius;
        const isJumping = hero.yVelocity < 0;
        const isAtBottom = hero.loc.y >= bottomThreshold + prevAngle;
        const isAtTop = hero.loc.y < topThreshold;

        // Stop at bottom of canvas
        if (isAtBottom && !isJumping) {
            const yVelocity = 0;
            const y = bottomThreshold + angle;
            const loc = {...hero.loc, y};
            const isJumping = false;
            return ({...hero, loc, yVelocity, rotationCounter, isJumping});
        } 
        // Stop at top of canvas
        else if (isAtTop) {
            const yVelocity = 0;
            const y = topThreshold;
            const loc = {...hero.loc, y};
            const isJumping = true;
            return ({...hero, loc, yVelocity, isJumping});
        }
        else {
            // Apply gravity
            const yVelocity = hero.yVelocity + c.GRAVITY;
            const y = hero.loc.y + yVelocity;
            const loc = {...hero.loc, y};
            const isJumping = true;
            return ({...hero, loc, yVelocity, isJumping});
        }
    },

    jump: (hero) => {
        return ({...hero, yVelocity: c.JUMP_VELOCITY});
    },
}

export default HeroActions;
