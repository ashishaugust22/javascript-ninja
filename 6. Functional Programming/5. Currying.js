/*
currying means takes any number of parameters
and return function and process one by one params
*/


let sum = (a) => (b) => (b !== undefined ? sum(a + b) : a);

// orrrrrrrrrrrrrrrrrrrrrrrrrrrr

function sum (a) {
    debugger;
    return function (b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    };
}

const resultSumFn = sum(1)(2);

resultSumFn();