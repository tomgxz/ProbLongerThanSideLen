import { calculation } from "./calculation";
let results = [];

for (let i = 0; i < 1000; i++) {
    results.push(calculation())
}

console.log(results)