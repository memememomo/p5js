import * as p5 from 'p5';
import {colorAtRandom} from "./util";

let p: p5;

export const createDevRect = (_p: p5, numA: number, numB: number, scalar: number) => {
    p = _p;
    return new DevRect(numA, numB, scalar);
};

class DevRectItr {
    wd: number;
    itr: number;
    xPos: number;
    yPos: number;

    constructor(private numA: number, private numB: number) {
        this.wd = this.numB;
        this.itr = 1;
        this.xPos = 0;
        this.yPos = 0;
    }

    hasNext() {
        return this.wd > 0;
    }

    step(color: p5.Color) {
        if (!this.hasNext()) {
            return;
        }

        if (this.itr % 2 == 1) {
            if (this.xPos + this.wd <= this.numA) {
                p.fill(color);
                p.rect(this.xPos, this.yPos, this.wd, this.wd);
                this.xPos += this.wd;
            }
            if (this.xPos + this.wd > this.numA) {
                this.wd = this.numA - this.xPos;
                this.itr++;
            }
        } else {
            if (this.yPos + this.wd <= this.numB) {
                p.fill(color);
                p.rect(this.xPos, this.yPos, this.wd, this.wd);
                this.yPos += this.wd;
            }
            if (this.yPos + this.wd > this.numB) {
                this.wd = this.numB - this.yPos;
                this.itr++;
            }
        }
    }
}

export class DevRect {
    itr: DevRectItr;

    constructor(private readonly numA: number, private readonly numB: number, scalar: number) {
        this.numA = numA * scalar;
        this.numB = numB * scalar;
        this.initItr();
    }

    stepDraw(color: p5.Color) {
        this.itr.step(color);
    }

    initItr() {
        this.itr = new DevRectItr(this.numA, this.numB);
    }

    hasNext() {
        return this.itr.hasNext();
    }

    drawAtRandomColor() {
        p.colorMode(p.HSB, 1);
        while (this.itr.hasNext()) {
            this.itr.step(colorAtRandom(p));
        }
    }
}
