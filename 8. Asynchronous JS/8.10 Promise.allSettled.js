const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 6000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));


Promise.allSettled([promiseOne, promiseTwo])
    .then(data => console.log(data));


// so catch is not needed with Promise.allSettled