/*
1- +
2- -
3- *
4- /
5- %
6- ++
7- --
8- **
9- ||
10- &&
 */

// console.log(1 + 2); //3
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log(1 - "2"); //-1
// console.log(2 - "1"); //1
// console.log(1 / "1"); //1

// let x = 0;
// console.log(x); //0
// console.log(x++); //0
// console.log(++x); //2

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// console.log("ibrahim" || true); // ibrahim
// console.log("ibrahim" | true); // 1

// console.log(1 || true); // 1
// console.log(-1 || true); // -1
// console.log(true || "ibrahim"); // true
// console.log(true || 1); // true
// console.log(true || -1); // true

// console.log(false || false); // false
// console.log(0 || false); // false
// console.log(null || false); // false
// console.log(undefined || false); // false
// console.log("" || false); // false
// console.log(NaN || false); // false

// false value
// 1- false
// 2- null
// 3- undefined
// 4- 0
// 5- ""
// 6- NaN

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// console.log("ibrahim" && true); // true

// console.log(1 && true); // true
// console.log(-1 && true); // true
// console.log(true && "ibrahim"); // ibrahim
// console.log(true && 1); // 1
// console.log(true && -1); // -1

// console.log(false && false); // false
// console.log(0 && false); // 0
// console.log(null && false); // null
// console.log(undefined && false); // undefined
// console.log("" && false); // ""
// console.log(NaN && false); // NaN

// console.log(false && false); // false
// console.log(false && 0); // false
// console.log(false && null); // false
// console.log( false && undefined); // false
// console.log( false && ""); // false
// console.log( false && NaN ); // false

// console.log(false && true); // false
// console.log(0 && true); // 0
// console.log(null && true); // null
// console.log(undefined && true); // undefined
// console.log("" && true); // ""
// console.log(NaN && true); // NaN

// console.log(true && NaN); // NaN
// console.log({} && 0); // 0
// console.log([] && 0); // 0
// console.log(NaN && 0); // NaN

// console.log(typeof 1); //number
// console.log(typeof "ibrahim"); //string
// console.log(typeof undefined); //undefined
// console.log(typeof []); //object
// console.log(typeof {}); //object
// console.log(typeof (() => {})); //function
// console.log(typeof false); //boolean
// console.log(typeof NaN); //number
// console.log(typeof null); //object

// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); //false

// console.log(isNaN(1)); //false
// console.log(isNaN("ibrahim")); //true
// console.log(isNaN(false)); //false
// console.log(isNaN(1 / "ibrahim")); //true

// console.log([] == true); // false
// console.log(NaN === NaN); // false /// غريبة
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(!"ibrahim"); // false

////comparison operations
// 1- ==
// 2- ===
// 3- !=
// 4- !==
// 5- >
// 6- <
// 7- >=
// 8- <=
// 9- ?

// console.log(1 == "1"); //true
// console.log(1 === "1"); // false
// console.log(1 != "1"); // false
// console.log(1 !== "1"); // true

// console.log(Number.MAX_VALUE + 1); //1.7976931348623157e+308
// console.log(Number.MAX_VALUE * 5); //Infinity
// console.log(typeof Infinity); //number
// console.log(typeof Number.MAX_VALUE); //number

// let name = "ibrahim";
// let fullName = (name += " sahhar");
// console.log(fullName); //ibrahim sahhar
