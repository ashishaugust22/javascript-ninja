// guess the output
function callMeMayBe() {
    const callMe = 'Hi! I am now here!';
    setTimeout(() => {
        console.log(callMe);
    }, 4000);
}
callMeMayBe();

// ==========================================================
// guess the output
/*
so const doesnt get hoisted but closures
create a separat lexical environment where callMe
will be found
*/
function callMeMayBe() {
    setTimeout(() => {
        console.log(callMe);
    }, 4000);
    const callMe = 'Hi! I am now here!';
}
callMeMayBe();
