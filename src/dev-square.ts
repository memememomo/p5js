import * as p5 from "p5";

let p: p5;

export const createDevSquare = (_p: p5, numA: number, numB: number, width:number) => {
    p = _p;
    return new DevSquare(numA, numB, width);
};

export class DevSquare {
    wd: number;
    itr: number;
    xPos: number;
    yPos: number;
    ratio: number;

    constructor(private numA:number, private numB:number, private width:number) {
        this.ratio = this.numB / this.numA;
        this.itr = 1;
        this.xPos = 0;
        this.yPos = 0;
        this.wd = this.width;
    }

    step(color: p5.Color) {
        if (!this.hasNext()) {
            return;
        }

        const threshold = this.width + 0.1;

        if (this.itr % 2 == 1) {
            if (this.xPos + this.wd * this.ratio < threshold) {
                p.fill(color);
                p.rect(this.xPos, this.yPos, this.wd * this.ratio, this.wd);
                this.xPos += this.wd * this.ratio;
            }
            if (this.xPos + this.wd * this.ratio >= threshold) {
                this.wd = this.width - this.xPos;
                this.itr++;
            }
        } else {
            if (this.yPos + this.wd / this.ratio < threshold) {
                p.fill(color);
                p.rect(this.xPos, this.yPos, this.wd, this.wd / this.ratio);
                this.yPos += this.wd / this.ratio;
            }
            if (this.yPos + this.wd / this.ratio >= threshold) {
                this.wd = this.width - this.yPos;
                this.itr++;
            }
        }
    }

    hasNext() {
        return this.wd > 0.1;
    }
}
