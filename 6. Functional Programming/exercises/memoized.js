/*
problem is to implement memoized function 
which takes a function as an argument and
return the output using memoization technique
*/

/* 
this is based on the concept of function composition
*/


function memoizer (fn) {
    let cache = {};

    return function (n) {
        if (cahed[n] !== undefined) {
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}


const fibonacciMemoFunction = memoizer(fibonacciRecursive);



/*
When to use?
For expensive function calls i.e functions that carry out heavy computations.
For functions with a limited and highly recurring input range such that cached values don't just sit there and do nothing.
For recursive functions with recurring input values.
For pure functions i.e functions that return the same output each time they are called with a particular input.
*/