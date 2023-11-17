"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculation_1 = require("./calculation");
let results = [];
let trueVales = 0;
for (let i = 0; i < 100000; i++) {
    if (typeof (calculation_1.calculation) != undefined) {
        let answer = (0, calculation_1.calculation)();
        results.push(answer);
        if (answer == true) {
            trueVales += 1;
        }
    }
}
let probability = trueVales / results.length;
console.log(`Probability to 3dp: \n ${probability.toFixed(3)}`);
