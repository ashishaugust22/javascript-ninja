/*
Higher order functions are functions
which accepts functions as arguments
and/or return functions

DRY
*/

const giveAccessTo = (name) =>
    'Access Granted to ' + name;

function authenticate(person) {
    let array = [];
    // you can add checks here for person.level
    for (let i = 0; i < 50000; i++) {
        array.push(i);
    }
    return giveAccessTo(person.name);
}

function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
    if (person.level === 'admin') {
        return fn(person);
    } else if (person.level === 'user') {
        return fn(person);
    }
}

function sing(person) {
    return 'la la la my name is ' + person.name;
}

letPerson({ level: 'user', name: 'Tim' }, sing);



// ==============================================

const multiplyBy = function (num1) {
    return function (num2) {
        return num1 * num2;
    };
};

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

multiplyByTwo(10); // 20
multiplyByFive(10); // 50


// ==============================================
// using arrow functions
const multiplyBy = (num1) => (num2) => num1 * num2;

// ==============================================
