// factory function make/create
function createElf(name, weapon) {
    //we can also have closures here to hide properties from being changed.
    return {
        name: name,
        weapon: weapon,
        atack() {
            return 'atack with ' + weapon;
        }
    };
}
const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');

sam.atack();

// ===============================================================

// single line implementation
const createElf = (name, weapon) => ({ name, weapon, attack() { console.log(`attack with ${weapon}`); } });



// ===============================================================
/*
But the problem is that methods get repeated on every
Object. Which is not memory optimized
*/