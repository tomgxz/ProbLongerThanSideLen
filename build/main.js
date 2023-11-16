"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculation_1 = require("./calculation");
let results = [];
for (let i = 0; i < 1000; i++) {
    results.push((0, calculation_1.calculation)());
}
console.log(results);
