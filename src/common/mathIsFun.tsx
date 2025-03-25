//GEMAAKT DOOR NOAH VAN LEEMPUT
//just a lil stupid collection of handy math functions
//i'm not a math's guy and remembering these is hard haha.
//so i made this file to store them all in one place.

//lerp = linear interpolation
export function lerp(a: number, b: number, alpha: number) {
    return a + alpha * (b - a);
}

//clamp a value between a min and max
export function clamp(x: number, min: number, max: number) {
    return Math.max(min, Math.min(x, max));
}

//normalize a value between a min and max
export function normalize(x: number, min: number, max: number) {
    return (x - min) / (max - min);
}

export default { lerp, clamp, normalize };
