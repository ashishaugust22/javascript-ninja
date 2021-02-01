/*
    memoize the function
*/
function memoize (fn) {
    let cache = {};

    return function (a) {
        if (cache[a]) {
            console.log('from cache');
            return a;
        }
        else {
            console.log('from calc');
            const result = fn(a);
            cache[a] = result;
            return result;
        }
    };
}


const test = function (x) {
    return x * 2;
};

const memoizedTest = memoize(test);

memoizedTest(1);