/** @format */

console.log("Hello World !");

const getName = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};

const fullName = getName("Shajib", "Hossain");
console.log(fullName);

let userName = "Shajib";
let age = 22;

// can't reassign  string <=> integer
/*
userName = 26;
age = "Hossain";

console.log(userName, age);
*/

let x: number;
let a: string;

// error
// x = "Rakib"
// a = 45;

// no error
x = 23;
a = "Sakib";

// union type array

let array: (string | number)[] = [];
array.push("Shajib", 23);
// error if we push !(string | number)
// array.push(true)

// object types

let obj: object;
obj = {
  name: "Shajib",
  age: 23,
  isAdult: true,
  address: ["Adrs1", "Adrs2"],
};

console.log(obj);

// fixed structured object type

let obj2: {
  name: string;
  age: number;
  isAdmin: boolean;
};

obj2 = {
  name: "Hossain",
  age: 23,
  isAdmin: true,
};

console.log(obj2);

// function

const summation = (a: number, b: number, c: number = 0) => {
  return a + b + c;
};

const result = summation(1, 2);
console.log(result);

const stringConnect = (b: string, c: string, a: string = "Mr.") => {
  return { fullName: `${a} ${b} ${c}` };
};

const getFullName = stringConnect("Shajib", "Hossain");
console.log(getFullName);

// type alias

type numOrString = number | string;
type numOrStringObj = { name: string; age: number };

const sayHello = (user: numOrStringObj) => {
  console.log(`Hello ${user.name}`);
};

sayHello({ name: "Shajib", age: 23 });

const sendWish = (id: numOrString, user: numOrStringObj) => {
  const wish = `your id is ${id} wish you ${user.age > 45 ? "Mr." : "Sir"} ${
    user.name
  } all the happiness`;
  console.log(wish);
};

sendWish(123, { name: "Shajib", age: 63 });
