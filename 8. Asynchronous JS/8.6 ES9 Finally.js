const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/albums'
];


Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(array => {
        console.log(0, array[0]);
        console.log(1, array[1]);
        console.log(2, array[2]);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Something happend'));


// finally doesnt recieve any parameter
// Finally will be called anyhow