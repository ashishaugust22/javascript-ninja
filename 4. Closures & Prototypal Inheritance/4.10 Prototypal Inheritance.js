//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.__proto__;
Function.prototype;
multiplyBy5.__proto__.__proto__;
Object.prototype;
multiplyBy5.__proto__.__proto__.__proto__;
typeof Object;
typeof {};