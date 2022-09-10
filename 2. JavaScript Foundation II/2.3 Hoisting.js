// 1. variables get hoisted to the top partially. Meaning with no values; (undefined)

// 2. function gets hoisted with definition.

// 3. Hoisting happens for every execution context


console.log(sing()); // works 
console.log(sing2()); // won't work => sing2 is not defined or undefined

// function declaration
function sing() {
    console.log('oh la la la');
}

// function expression
const sing2 = function() {
    console.log('uuuh la la la');
}

console.log(sing2()); // works




// ===============================================


a(); // output  => 'bye'

function a() {
    console.log('hi');
}

function a() {
    console.log('bye');
}



// ===============================================



var favFood = 'Mango';

function foodThoughts() {
    console.log('Original: ' + favFood);

    var favFood = 'Mango';
    console.log('New fav food: ' + favFood);
}

foodThoughts();

// think ?????????????????????????



// ===============================================


var favFood = 'Mango';

function foodThoughts() {
    console.log('Original: ' + favFood);
    console.log('New fav food: ' + favFood);
}

foodThoughts();


// ===============================================


// use const or let to avoid hoisting
// JS will throw error instead of undefined with above two



// ===============================================



function bigBrother() {
    function littleBrother() {
        return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
        return 'no me!';
    }
}

// Before running this code, what do you think the output is?
bigBrother();
  // output => 'no me!'