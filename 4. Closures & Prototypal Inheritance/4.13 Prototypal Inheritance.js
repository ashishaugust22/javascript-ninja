//Array.map() => to print '🗺'
Array.prototype.map = function () { // what happens with arrow function here?
    arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺'));
    }
    return arr;
};
console.log([1, 2, 3].map());

//Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
};

new Date('1900-10-10').lastYear();
  // don't worry if you didn't get this... we will expand on this later.