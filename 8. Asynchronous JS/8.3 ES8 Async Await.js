// how to convert chaining into async await 
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'));


async function playerStart () {
    await movePlayer(100, 'Left');
    await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}

// orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

async function playerStart () {
    const first = await movePlayer(100, 'Left');
    const second = await movePlayer(400, 'Left');
    const third = await movePlayer(10, 'Right');
    const fourth = await movePlayer(330, 'Left');
}




// ======================================================

async function test () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(data);
    console.log('here');
    console.log(users);
}

test();
