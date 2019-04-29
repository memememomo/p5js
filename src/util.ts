import * as p5 from "p5";

export const newMtx = (col:number, row:number, v?:any) => {
    const mtx = new Array(col);
    for (let i=0; i<col; i++) {
        mtx[i] = new Array(row);
        for (let j=0; j<row; j++) {
            mtx[i][j] = v;
        }
    }
    return mtx;
};

export const colorAtRandom = (p: p5) => {
    p.colorMode(p.HSB, 1);
    return p.color(p.random(1), 1, 1);
};
