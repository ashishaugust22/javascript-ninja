// for await of using for of loop

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/albums'
];


async function getAllData () {
    try {
        const [users, todos, albums] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
        console.log('users', users);
        console.log('todos', todos);
        console.log('albums', albums);
    } catch (err) {
        console.log(err);
    }
}

getAllData();

// orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

const getData2 = async function () {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
};

getData2();
