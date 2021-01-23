// Only functions have the "prototype" property

function a() { }

a.prototype;   // exists


let arr = [];
arr.prototype; // undefined

let obj = {};
obj.prototype; // undefined



Object.prototype; // exists
Array.prototype; //exists
String.prototype; //exists