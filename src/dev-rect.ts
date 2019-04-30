import * as p5 from 'p5';
import {colorAtRandom} from "./util";
import {DevSquare} from "./dev-square";

let p: p5;


export const createDevRect = (_p: p5, numA: number, numB: number, scalar: number) => {
    p = _p;
    return new DevRect(numA, numB, scalar, drawerRect);
};

export const createDevRectRecursive = (_p: p5, numA: number, numB: number, scalar: number) => {
    p = _p;
    return new DevRect(numA, numB, scalar, drawerRecursive)
};

type drawer = (x:number, y:number, w:number, h:number, col:p5.Color, wd:number, ratio:number) => void;

const drawerRect = (x:number, y:number, w:number, h:number, col:p5.Color, wd:number, ratio:number) => {
    p.fill(col);
    p.rect(x, y, w, h);
};

const drawerRecursive = (x:number, y:number, w:number, h:number, col:p5.Color, wd:number, ratio:number) => {
    const ds = new DevSquare(x, y, w, w, ratio, drawerRect);
    while (ds.hasNext()) {
       ds.step(colorAtRandom(p));
    }
};

class DevRect {
    wd: number;
    itr: number;
    xPos: number;
    yPos: number;

    constructor(private numA: number, private numB: number, private scalar: number, private drawer: drawer) {
        this.numA *= this.scalar;
        this.numB *= this.scalar;
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
                this.drawer(this.xPos, this.yPos, this.wd, this.wd, color, this.wd, this.numB/this.numA);
                this.xPos += this.wd;
            }
            if (this.xPos + this.wd > this.numA) {
                this.wd = this.numA - this.xPos;
                this.itr++;
            }
        } else {
            if (this.yPos + this.wd <= this.numB) {
                this.drawer(this.xPos, this.yPos, this.wd, this.wd, color, this.wd, this.numB/this.numA);
                this.yPos += this.wd;
            }
            if (this.yPos + this.wd > this.numB) {
                this.wd = this.numB - this.yPos;
                this.itr++;
            }
        }
    }
}

