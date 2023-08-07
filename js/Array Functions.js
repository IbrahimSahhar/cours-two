let array = [1, 2, 3, 4, 5];

// array.map((num) => {
//   console.log(num); //1 2 3 4 5
// });

// array.forEach((num) => {
//   console.log(num); //1 2 3 4 5
// });

// console.log(
//   array.filter((num) => {
//     return num > 2;
//   })
// );  [3,4,5]

// console.log(
//   array.reduce((accumulator, currentValue) => accumulator + currentValue, 10)
// ); //25

// not effect in the main array
// console.log(array.slice(2, 4)); // [3 ,4] // not include last element
// console.log(array.slice(-2)); // [4 ,5] // last two elements

//  effect in the main array
// console.log(array.splice(2)); // [3 ,4 ,5] // from 2 index to last element
// console.log(array.splice(-2)); // [4 ,5] // last two elements

//  effect in the main array
// console.log(array.reverse()); // [5 ,4,,3,2,1] //

// const array2 = [6, 7, 8];

// console.log(array.concat(array2));
// // [
// //     1, 2, 3, 4,
// //     5, 6, 7, 8
// //   ]

// console.log(array.join(" % ")); //1 % 2 % 3 % 4 % 5

// console.log(
//   array.find((x) => {
//     return x == 2;
//   })
// ); //2
let array2 = [3, 1, 5, 4, 2, 20, 30, 11, 231, 323];
// console.log(array2.sort()); //[ 1, 2, 3, 4, 5 ]
// console.log(array2); //[ 1, 2, 3, 4, 5 ]

console.log(array2.sort()); //[1, 11,   2, 20, 231,3, 30, 323,  4,   5]

console.log(
  array2.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  })
); //[1,  2,  3,   4,   5,11, 20, 30, 231, 323]
