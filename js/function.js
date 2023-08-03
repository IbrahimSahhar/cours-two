/* -------------------------------------------Arrow Function-----------------------------------------  */

const arrowFunction = () => {
  console.log("Arrow Function"); //Arrow Function
};
arrowFunction(); //

//////////////////////////////////////////////////////////

const arrowFunction2 = () => {
  return 10;
};
console.log(arrowFunction2()); //10

//////////////////////////////////////////////////////////

const arrowFunction3 = () => 10;
console.log(arrowFunction3()); //10

//////////////////////////////////////////////////////////

const arrowFunction4 = (firstName, secondName) => {
  return `${firstName} ${secondName}`;
};
console.log(arrowFunction4("ibrahim", "sahhar")); //ibrahim sahhar

//////////////////////////////////////////////////////////

const arrowFunction5 = (...numbers) => {
  return numbers.reduce((acc, current) => acc + current, 0);
};
console.log(arrowFunction5(1, 2, 3, 4, 5)); // 15

//////////////////////////////////////////////////////////

const arrowFunction6 = (_) => 2;
console.log(arrowFunction6()); //2
