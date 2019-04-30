import * as p5 from 'p5';
import {createDevRect, createDevRectRecursive, DevRect} from './dev-rect';
import {createDevSquare, createDevSquareRecursive, DevSquare} from "./dev-square";
import {colorAtRandom} from "./util";

const sketch = (p: p5) => {
    let ds: DevSquare;

    p.preload = () => {
    };

    p.setup = () => {
        p.resizeCanvas(1000, 1000);
        initDevSquare();
    };

    const initDevSquare = () => {
        const numA = Math.floor(p.random(1, 50));
        const numB = Math.floor(p.random(1, 50));
        ds = createDevRectRecursive(p, 10, 7, 50);
    };

    p.mouseClicked = () => {
        if (ds.hasNext()) {
            ds.step(colorAtRandom(p));
        } else {
            p.background(255);
            initDevSquare();
        }
    };

    p.windowResized = () => {
    };

    p.draw = () => {
    }
};

const sketchP = new p5(sketch);
