"use strict";
function calculation() {
    let sideLength = 5;
    let probability = 0;
    let topArray = new Array(sideLength).fill(0);
    let leftArray = new Array(sideLength).fill(0);
    let bottomArray = new Array(sideLength).fill(0);
    let rightArray = new Array(sideLength).fill(0);
    let square = [topArray, leftArray, bottomArray, rightArray];
    let rand1 = Math.floor(Math.random() * sideLength);
    let rand2 = Math.floor(Math.random() * sideLength);
    while (rand1 == rand2) {
        rand2 = Math.floor(Math.random() * sideLength);
    }
    square[Math.floor(Math.random() * 4)][rand1] = 1;
    square[Math.floor(Math.random() * 4)][rand2] = 1;
    let side1 = -1;
    let side2 = -1;
    for (let i = 0; i < square.length; i++) {
        console.log(square[i]);
        let countOnSide = 0;
        for (let j = 0; j < square[i].length; j++) {
            if (square[i][j] == 1) {
                countOnSide += 1;
            }
        }
        if (countOnSide == 2) {
            probability = 0;
            return probability;
        }
        else if (countOnSide == 1) {
            if (side1 == -1) {
                side1 = i;
            }
            else {
                side2 = i;
            }
        }
    }
    if (side1 - side2 == 2 || side2 - side1 == 2) {
        probability = 1;
        return probability;
    }
    return -1;
}
