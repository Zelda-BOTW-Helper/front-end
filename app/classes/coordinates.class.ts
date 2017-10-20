export class Coordinates {
    public x: number;
    public y: number;

    public xOffset: number = 0;
    public yOffset: number = 0;

    public constructor(x: number, y: number, xOffset: number = 0, yOffset: number = 0) {
        this.x = x;
        this.y = y;

        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }
}