function Employee (name) {
    this.name = name;
}

function Developer () {
    this.type = 'developer';
}

const ashish = new Employee('Ashish');

ashish.__proto__ = new Developer();

// const developer = new Developer();

console.log(ashish);
console.log(ashish.type);

//////////////////////////////////////////////////////////////////////////////


// class Employee {
//     constructor (name) {
//         this.name = name;
//     }
// }

// class Developer extends Employee {
//     constructor (name) {
//         super(name);
//         this.type = 'developer';
//     }
// }

// class Tester extends Employee {
//     constructor (name) {
//         super(name);
//         this.type = 'tested';
//     }
// }


// const ashish = new Developer('Ashish');
// console.log(ashish);

//////////////////////////////////////////////////////////////////////////////

// const data = { test: 'test' };
// const urls = new Array(10).fill('url');

// function getData (url) {
//     console.log(url);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(data);
//             reject({ reason: 'failed' });
//         }, Math.random() * 5000);
//     });
// }


// async function getDataFromAllUrls () {
//     try {
//         const result1 = await getData('url');
//         const result2 = await getData('url');
//         console.log(result1, result2);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getDataFromAllUrls();