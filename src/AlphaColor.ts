class AlphaColor {
    r: number;
    g: number;
    b: number;
    alpha: number;
    constructor(r: number, g: number, b: number, alpha: number) {
        this.r = r
        this.g = g
        this.b = b
        this.alpha = alpha
    }

    color = () => `rgb(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
}

export default AlphaColor;
