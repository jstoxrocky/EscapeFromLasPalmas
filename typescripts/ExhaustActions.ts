import c from "./Constants";
import ExhaustActionsApi from "./api/ExhaustActionsApi";

const ExhaustActions: ExhaustActionsApi = {
    new: (loc, radius) => ({
        loc,
        radius,
        color: `rgb(100, 150, 200, 0.5)`,
        yVelocity: (Math.random() * 1) - 0.5,
        age: 0
    }),

    maybeNew: (loc, isJumping) => {
        const [multiplier, threshold] = isJumping ? [25, 0.1] : [10, 0.75];
        if (Math.random() > threshold) {
            const radius = Math.random() * multiplier + 3;
            return [ExhaustActions.new(loc, radius)];
        } else {
            return [];
        }
    },

    update: (exhaust) => {
        const x = exhaust.loc.x - c.GAMESPEED;
        const y = exhaust.loc.y + exhaust.yVelocity;
        const loc = {...exhaust.loc, x, y};
        const age = exhaust.age + 1;
        const color = `rgb(100, 150, 200, ${(100 - age) / 750})`;
        return {...exhaust, loc, age, color};
    },

    updateAll: (exhaustClouds, loc, isJumping) => {
        return exhaustClouds
            .flatMap(exhaust => exhaust.age <= 100 ? [ExhaustActions.update(exhaust)] : [])
            .concat(ExhaustActions.maybeNew(loc, isJumping));
    }
}

export default ExhaustActions;
