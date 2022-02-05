import carIndices from "./carIndices";

interface Offsets {
    shape: { x: number, y: number }[],
    headlights: { x: number, y: number },
    brakelights: { x: number, y: number },
    extension: { left: number, right: number },
    width: number,
    bottom: number,
}

const toyota2ndGen4Runner: Offsets = {
    shape: [
        { x: 2, y: 45 },
        { x: 3, y: 34 },
        { x: 10, y: 24 },
        { x: 48, y: 24 },
        { x: 57, y: 31 },
        { x: 67, y: 32 },
        { x: 77, y: 36 },
        { x: 77, y: 43 },
    ],
    headlights: { x: 76, y: 38 },
    brakelights: { x: 4, y: 39 },
    extension: { left: 2, right: 77 },
    width: 77 - 2,
    bottom: 55,
}

const bmwE36M3: Offsets = {
    shape: [
        { x: 4, y: 45 },
        { x: 6, y: 38 },
        { x: 11, y: 38 },
        { x: 24, y: 32 },
        { x: 41, y: 32 },
        { x: 57, y: 40 },
        { x: 71, y: 42 },
        { x: 74, y: 47 },
    ],
    headlights: { x: 72, y: 45 },
    brakelights: { x: 6, y: 42 },
    extension: { left: 4, right: 74 },
    width: 74 - 4,
    bottom: 55,
}

const offsets = Object.fromEntries([
    [carIndices.toyota2ndGen4Runner, toyota2ndGen4Runner],
    [carIndices.bmwE36M3, bmwE36M3],
])

export default offsets;
