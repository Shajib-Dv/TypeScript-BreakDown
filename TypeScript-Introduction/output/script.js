"use strict";
/** @format */
console.log("Hello World !");
const getName = (firstName, lastName) => {
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
let x;
let a;
// error
// x = "Rakib"
// a = 45;
// no error
x = 23;
a = "Sakib";
// union type array
let array = [];
array.push("Shajib", 23);
// error if we push !(string | number)
// array.push(true)
// object types
let obj;
obj = {
    name: "Shajib",
    age: 23,
    isAdult: true,
    address: ["Adrs1", "Adrs2"],
};
console.log(obj);
// fixed structured object type
let obj2;
obj2 = {
    name: "Hossain",
    age: 23,
    isAdmin: true,
};
console.log(obj2);
// function
const summation = (a, b, c = 0) => {
    return a + b + c;
};
const result = summation(1, 2);
console.log(result);
const stringConnect = (b, c, a = "Mr.") => {
    return { fullName: `${a} ${b} ${c}` };
};
const getFullName = stringConnect("Shajib", "Hossain");
console.log(getFullName);
const sayHello = (user) => {
    console.log(`Hello ${user.name}`);
};
sayHello({ name: "Shajib", age: 23 });
const sendWish = (id, user) => {
    const wish = `your id is ${id} wish you ${user.age > 45 ? "Mr." : "Sir"} ${user.name} all the happiness`;
    console.log(wish);
};
sendWish(123, { name: "Shajib", age: 63 });
