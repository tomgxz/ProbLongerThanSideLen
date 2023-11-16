let sideLength = 5;

// -------------
// Create square
// -------------

let topArray = new Array(sideLength).fill(0);
let leftArray = new Array(sideLength).fill(0);
let rightArray = new Array(sideLength).fill(0);
let bottomArray = new Array(sideLength).fill(0);

let square = [topArray, leftArray, rightArray, bottomArray]

// --------------------
// Randomly pick points
// --------------------

let rand1 = Math.floor(Math.random() * sideLength)
let rand2 = Math.floor(Math.random() * sideLength)

while (rand1 == rand2) {
    rand2 = Math.floor(Math.random() * sideLength)
}

square[Math.floor(Math.random() * 4)][rand1] = 1
square[Math.floor(Math.random() * 4)][rand2] = 1
console.log(square)