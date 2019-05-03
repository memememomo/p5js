import * as p5 from "p5";

let p:p5;

export const createGridColor = (_p:p5) => {
    p = _p;
    return new GridColor();
};

export class GridColor {
    stepX: number;
    stepY: number;

    constructor() {
    }

    setup() {
        p.createCanvas(800, 400);
        p.noStroke();
        p.colorMode(p.HSB, p.width, p.height, 100);
    }

    draw() {
        this.stepX = Math.max(p.mouseX, 0) + 2;
        this.stepY = Math.max(p.mouseY, 0) + 2;

        for (let gridY = 0; gridY < p.height; gridY += this.stepY) {
            for (let gridX = 0; gridX < p.width; gridX += this.stepX) {
                p.fill(gridX, p.height - gridY, 100);
                p.rect(gridX, gridY, this.stepX, this.stepY);
            }
        }
    }
}
