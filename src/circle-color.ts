import * as p5 from "p5";

let p:p5;

export const createCircleColor = (_p:p5) => {
    p = _p;
    return new CircleColor();
};

export class CircleColor {
    segmentCount: number;
    radius: number;

    constructor() {
        this.radius = 100;
    }

    draw() {
        p.colorMode(p.HSB, 360, p.width, p.height);
        p.background(360, 0, p.height);

        const angleStep = 360 / this.segmentCount;

        p.beginShape(p.TRIANGLE_FAN);
        p.vertex(p.width / 2, p.height / 2);

        for (let angle = 0; angle <= 360; angle += angleStep) {
            const vx = p.width / 2 + p.cos(p.radians(angle)) * this.radius;
            const vy = p.height / 2 + p.sin(p.radians(angle)) * this.radius;
            p.vertex(vx, vy);
            p.fill(angle, p.mouseX, p.mouseY);
        }

        p.endShape();
    }

    keyPressed() {
        switch (p.key) {
            case '1':
                this.segmentCount = 360;
                break;
            case '2':
                this.segmentCount = 45;
                break;
            case '3':
                this.segmentCount = 24;
                break;
            case '4':
                this.segmentCount = 12;
                break;
            case '5':
                this.segmentCount = 60;
                break;
        }
    }
}
