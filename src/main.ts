import { calculation } from "./calculation";
let results:Array<boolean|undefined> = [];

let trueVales: number = 0;

for (let i = 0; i < 100000; i++) {
    if (typeof(calculation) != undefined) {

        let answer = calculation()
        results.push(answer)

        if (answer == true){
            trueVales += 1;
        }
    }
}



let probability: number = trueVales / results.length

console.log(`Probability to 3dp: \n ${probability.toFixed(3)}`)