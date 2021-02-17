const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
];


async function functionPromiseAll () {
    const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
    console.log(results);
    // all responses
}

async function functionPromiseRace () {
    const result = await Promise.race(urls.map(url => fetch(url).then(res => res.json())));
    console.log(result);
    // only single response
}

async function functionPromiseAllSettled () {
    const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
    const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(1), 5000));
    const results = await Promise.allSettled([promise1, promise2]);
    console.log(results);
    // both results with fullfilled or rejected
    // [{"status":"fulfilled","value":1},{"status":"rejected","reason":1}]
}

async function functionPromiseAny () {
    const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 8000));
    const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(1), 5000));
    const result = await Promise.any([promise1, promise2]);
    console.log(result);
    // get result on any of the first fullfilled promise
}

async function functionPromiseSerial () {
    const result1 = await fetch(urls[0]).then(res => res.json());
    const result2 = await fetch(urls[1]).then(res => res.json());
    console.log(result1, result2);
    // get result on any of the first fullfilled promise
}

// functionPromiseAll();
// functionPromiseRace();
// functionPromiseAllSettled();
// functionPromiseAny();
functionPromiseSerial();