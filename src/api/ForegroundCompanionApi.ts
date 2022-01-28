import Foreground from "./Foreground";

interface ForegroundCompanionApi {
    update: (foreground: Foreground) => Foreground;
    new: (canvasHeight: number) => Foreground;
}

export default ForegroundCompanionApi;
