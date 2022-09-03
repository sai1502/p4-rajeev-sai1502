const arr = [1,2,3,4,5,6,6,7,5,7,6,7,5,4,3,2];
const myset = new Set(arr);

console.log([...myset]); // using spread syntax to transform a set into an array