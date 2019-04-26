import * as p5 from 'p5';


export class DevRect {
    numA: number;
    numB: number;
    ratio: number;

    constructor(p: p5, numA: number, numB: number, scalar: number) {
        this.p = p;
        this.numA = numA;
        this.numB = numB;
        this.ratio = numB / numA;

        this.drawSqure();
    }

    drawSqure() {
        let itr = 0;
        let xPos = 0;
        let yPos = 0;
        let wd = this.p.width * this.ratio;

        this.p.mouseClicked = () => {
            this.numA = Math.floor(this.p.random(1, 20));
            this.numB = Math.floor(this.p.random(1, 20));
            console.log("NumA: " + this.numA);
            console.log("NumB: " + this.numB);
            this.ratio = this.numB / this.numA;
            this.p.background(0, 0, 1);
            this.drawSqure();
        };

        this.p.colorMode(this.p.HSB, 1);
        this.divSquare(0, 0, this.p.width);

        while (wd > 0.1) {
            itr++;
            if (itr % 2 == 1) {
                while (xPos + wd <= this.p.width + 0.1) {
                    this.divSquare(xPos, yPos, wd);
                    xPos += wd;
                }
                wd = this.p.width - xPos;
            } else {
                while (yPos + wd <= this.p.width * this.ratio + 0.1) {
                    this.divSquare(xPos, yPos, wd);
                    yPos += wd;
                }
                wd = this.p.width * this.ratio - yPos;
            }
        }
    }

    divSquare(xPos: number, yPos:number, wd:number) {
        let itr = 0;
        let xEndPos = wd + xPos;
        let yEndPos = wd + yPos;

        while (wd > 0.1) {
            itr++;
            if (itr % 2 == 1) {
                while (xPos + wd * this.ratio < xEndPos + 0.1) {
                    this.p.fill(this.p.color(this.p.random(1), 1, 1));
                    this.p.rect(xPos, yPos, wd * this.ratio, wd);
                    xPos += wd * this.ratio;
                }
                wd = xEndPos - xPos;
            } else {
                while (yPos + wd / this.ratio < yEndPos + 0.1) {
                    this.p.fill(this.p.color(this.p.random(1), 1, 1));
                    this.p.rect(xPos, yPos, wd, wd / this.ratio);
                    yPos += wd / this.ratio;
                }
                wd = yEndPos - yPos;
            }
        }
    }

    draw() {
    }
}
};
