import Foreground from "./Foreground";

interface ForegroundCompanionApi {
    update: (foreground: Foreground) => Foreground;
    new: () => Foreground;
}

export default ForegroundCompanionApi;
