import * as p5 from 'p5';
import {DevRect} from './dev-rect';

const sketch = (p: p5) => {
    let dr: DevRect;

    p.preload = () => {
    };

    p.setup = () => {
        p.resizeCanvas(1000, 1000);
        dr = new DevRect(p, 10, 6, 60);
    };

    p.windowResized = () => {
    };

    p.draw = () => {
        dr.draw()
    }
};

const sketchP = new p5(sketch);
