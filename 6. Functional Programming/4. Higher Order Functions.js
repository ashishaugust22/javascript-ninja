// Higher Order Functions

// simplest HOF is 

const hof = () => () => 5;
hof()(); // 5



///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

let hof2 = (fn) => fn(5);

// orrrrrrrrrrrrrrrrrr

let hof2 = (fn) => {
    console.log(fn);
    return fn(5);
};


hof2(function (x) { return x; });



///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

// using the concept of closure in HOF 

function closure () {
    let count = 0; // this make sure that outside other can't modify
    return function increment () {
        count++;
        return count;
    };
}

const incrementFn = closure();
incrementFn();