import * as p5 from "p5";
import {colorAtRandom} from "./util";

let p: p5;

type drawer = (x:number, y:number, w:number, h:number, col:p5.Color, wd:number, ratio:number) => void;

export const createDevSquare = (_p: p5, numA: number, numB: number, width:number) => {
    p = _p;
    const ratio = numB/numA;
    return new DevSquare(0, 0, width, width, ratio, drawerRect);
};

const drawerRect = (x:number, y:number, w:number, h:number, col:p5.Color, wd:number, ratio:number) => {
    p.fill(col);
    p.rect(x, y, w, h);
};


export class DevSquare {
    itr: number;
    xEndPos: number;
    yEndPos: number;
    thresholdX: number;
    thresholdY: number;
    wd: number;

    constructor(private xPos:number, private yPos:number, private w:number, private h:number, private ratio:number, private drawer: drawer) {
        this.itr = 1;
        this.xEndPos = this.xPos + w;
        this.yEndPos = this.yPos + h;
        this.thresholdX = this.xEndPos + 0.1;
        this.thresholdY = this.yEndPos + 0.1;
        this.wd = this.w;
    }

    step(color: p5.Color) {
        if (!this.hasNext()) {
            return;
        }

        if (this.itr % 2 == 1) {
            if (this.xPos + this.wd * this.ratio < this.thresholdX) {
                this.drawer(this.xPos, this.yPos, this.wd * this.ratio, this.wd, color, this.wd, this.ratio);
                this.xPos += this.wd * this.ratio;
            }
            if (this.xPos + this.wd * this.ratio >= this.thresholdX) {
                this.wd = this.xEndPos - this.xPos;
                this.itr++;
            }
        } else {
            if (this.yPos + this.wd / this.ratio < this.thresholdY) {
                this.drawer(this.xPos, this.yPos, this.wd, this.wd / this.ratio, color, this.wd, this.ratio);
                this.yPos += this.wd / this.ratio;
            }
            if (this.yPos + this.wd / this.ratio >= this.thresholdY) {
                this.wd = this.yEndPos - this.yPos;
                this.itr++;
            }
        }
    }

    hasNext() {
        return this.wd > 0.1;
    }
}


