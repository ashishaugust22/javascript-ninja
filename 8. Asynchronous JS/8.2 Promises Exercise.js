// Question: Can we use await only with promises?

// Answer: No, we can use await with promise as well as any object that implements a then function.
const thenable = {
    then: function (callback) {
        setTimeout(() => callback(2), 100);
    }
};

const value = await thenable;
console.log(value); // 2

// ==========================================================

// Question
// What is the output of the following code?
const promise = new Promise((resolve, reject) => {
    reject(Error('Some error occurred'));
});
promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message));

// Solution
// Some error occurred
// Some error occurred


// ==========================================================

// Question
// How can I write a sleep function using a promise?

// Solution
function sleep (ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    });
}


// ==========================================================


// What is the output of the following code?
const promise = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
})
    .catch(error => console.log(error))
    .then(error => console.log(error));
// Solution
// Some error occurred
// undefined


// ==========================================================


// Question
// What is the output of the following code?
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });
// Solution
// 2
// 4
// undefined
// 8


// ==========================================================
// What is the output of the code above ?

function job () {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promise = job();

promise

    .then(function () {
        console.log('Success 1');
    })

    .then(function () {
        console.log('Success 2');
    })

    .then(function () {
        console.log('Success 3');
    })

    .catch(function () {
        console.log('Error 1');
    })

    .then(function () {
        console.log('Success 4');
    });

// Solution
    // Error 1, Success 4