const arr = [2, 3];

const sum = arr.reduce((acc, curr, i) => acc, 0);


// TODO: implement array.myReduce


Array.prototype.myReduce = function (callback, initial) {
    let values = this;
    values.forEach((item, i) => {
        initial = initial !== undefined ? callback(initial, item, i) : item;
    });
    return initial;
};

const mySum = arr.myReduce((acc, curr, i) => {
    // console.log(i);
    acc += curr;
    return acc;
}, 0);
console.log(mySum); // 5


console.log(arr.reduce((a, b) => a * b));  // 6
console.log(arr.myReduce((a, b) => a * b));  // 6
