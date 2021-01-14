/*
    these are use to borrow methods of different 
    object for other obj for DRY
*/

const wizard = {
    name: 'merlin',
    health: 50,
    heal: function (num1, num2) {
        return this.health += num1 + num2;
    }
};


const archer = {
    name: 'robin hood',
    health: 30
};

// immediately invokes
wizard.heal.call(archer, 10, 30);
wizard.heal.apply(archer, [10, 30]);


// while bind returns the function with new context
const healArcher = wizard.heal.bind(archer, 10, 30);
healArcher();







// ============================================

// Exercise: call(), apply()
// How would you implement this:

const array = [1, 2, 3];

function getMaxNumber(arr) {
    //code here  
}

getMaxNumber(array); // should return 3


// When you are ready, check out the attached solution!

// Resources for this lecture
// https://repl.it/@aneagoie/this-exe-2


const array = [1, 2, 3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
    return Math.max.apply(null, arr);
}

getMaxNumber(array);