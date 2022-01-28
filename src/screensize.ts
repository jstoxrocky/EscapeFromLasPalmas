const MAX_WIDTH = 508;
const MAX_HEIGHT = 500;
const canvasWidth = innerWidth < MAX_WIDTH ? innerWidth : MAX_WIDTH;
const canvasHeight = innerHeight < MAX_HEIGHT ? innerHeight : MAX_HEIGHT;

export {canvasWidth, canvasHeight};
