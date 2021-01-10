let count = 0;
function test() {
    count++;
    test();
}


test();


console.log(count);
// 13966     ======> always same