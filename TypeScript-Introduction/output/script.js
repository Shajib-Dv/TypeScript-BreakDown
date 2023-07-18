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
