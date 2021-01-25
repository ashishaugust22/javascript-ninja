// Closures are memory efficient

function heavyDuty(index) {
    const array = new Array(7000).fill("Haha");
    console.log(array[index]);
}

heavyDuty(100);
heavyDuty(323);

/* 
in above example we are creating arrays again n again
so below is the efficient way
*/
function createHeavyDuty() {
    const array = new Array(7000).fill("Hahasss");
    return function getHeavy(index) {
        console.log(array[index]);
    };
}

let getEl = createHeavyDuty();

getEl(100);
getEl(442);