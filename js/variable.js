/* -------------------------------------------var-----------------------------------------  */

// var x = 10;
// x = 11;
// console.log(x);  11

// var x;
// x = 10;
// console.log(x);  10

// var x = 10;
// var x = 10;
// console.log(x); 10

/*----------------------------------------- in another scope the variable will reassign------------------------*/
// var test = "my test";
// for (let i = 0; i < 5; i++) {
//   var test = "for loop test";
//   console.log(test);
// }
// console.log(test);
/*
for loop test
for loop test
for loop test
for loop test
for loop test
for loop test

*/

/* -------------------------------------------let-----------------------------------------  */
// let x = 10;
// x = 11;
// console.log(x); 11

// let x;
// x = 10;
// console.log(x); 10

// let x = 10;
// let x = 10;
// console.log(x); error

/*-----------------------------------------can be declare in another scope------------------------*/
// let test = "my test";
// for (let i = 0; i < 5; i++) {
//   let test = "for loop test";
//   console.log(test);
// }
// console.log(test);
/*
for loop test
for loop test
for loop test
for loop test
for loop test
my test

*/

/* -------------------------------------------const-----------------------------------------  */

// const x = 10;
// console.log(x); 10

// const x = 10;
// x = 11;
// console.log(x); error

// const x;
// x = 10;
// console.log(x); error

// const x = 10;
// const x = 10;
// console.log(x); error
